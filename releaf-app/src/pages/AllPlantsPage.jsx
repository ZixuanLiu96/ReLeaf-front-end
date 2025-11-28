import { useState, useEffect, useContext } from "react";
import MasonryGallery from "../components/MasonryGallery";
import UserNavBar from "../components/UserNavBar";
import { Link, Outlet, useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";
import EmptyContent from "../components/EmptyContent";

const API_URL = "https://releaf-backend.fly.dev";
const token = localStorage.getItem("authToken");

export default function AllPlantsPage() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllPlants();
  }, []);

  console.log(plants);

  const getAllPlants = async () => {
    try {
      const plants = await axios.get(`${API_URL}/api/plants`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const plantsWithHeight = plants.data.data.plants.map((plant) => ({
        ...plant,
        randomHeight: Math.floor(Math.random() * 200) + 200,
      }));
      setPlants(plantsWithHeight);
      if (search) {
        const filterPlants = plantsWithHeight.filter((plant) => {
          if (plant.name.toLowerCase().includes(search.toLowerCase()))
            return plant;
        });
        console.log(filterPlants);
        setPlants(filterPlants);
        setSearch("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);
  console.log(search);

  return (
    <div className="flex-grow">
      <UserNavBar plants={plants} />

      {location.pathname === "/all-plants" && (
        <SearchBar
          setSearch={setSearch}
          getAllPlants={getAllPlants}
          search={search}
        />
      )}
      <Outlet />

      {location.pathname === "/all-plants" && (
        <MasonryGallery plants={plants} />
      )}
      {!plants && <div>Loading...</div>}
      {!plants?.length && <EmptyContent text="Oops, can't find any results" />}
    </div>
  );
}
