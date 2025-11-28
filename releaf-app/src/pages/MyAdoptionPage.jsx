import UserNavBar from "../components/UserNavBar";
import EmptyContent from "../components/EmptyContent";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";
import MasonryGallery from "../components/MasonryGallery";
import { Outlet, useLocation } from "react-router-dom";

const API_URL = "https://releaf-backend.fly.dev";
const token = localStorage.getItem("authToken");

export default function MyAdoptionPage() {
  const [plants, setPlants] = useState(null);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const getAllPlants = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/plants`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        const plantsWithHeight = res.data.data.plants.map((plant) => ({
          ...plant,
          randomHeight: Math.floor(Math.random() * 200) + 220,
        }));

        const adoptedPlants = plantsWithHeight.filter(
          (ele) => ele.adoptedBy === user._id
        );
        console.log(adoptedPlants);
        setPlants(adoptedPlants);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPlants();
  }, [user._id]);

  if (!plants) return <div>Loading...</div>;

  return (
    <div className="flex-grow">
      <UserNavBar />
      <div className="mt-40">
        {location.pathname === `/user/${user._id}/my-adoptions` &&
          (plants.length ? (
            <div>
              <MasonryGallery plants={plants} />
            </div>
          ) : (
            <EmptyContent
              pt={"pt-30"}
              text={
                <>
                  You haven't adopted any plants!
                  <br />
                  Go to <a href="/all-plants">All Plants</a>
                </>
              }
            />
          ))}
        <Outlet />
      </div>
    </div>
  );
}
