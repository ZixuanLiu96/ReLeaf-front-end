import { useState, useEffect, useContext } from "react";
import MasonryGallery from "../components/MasonryGallery";
import UserNavBar from "../components/UserNavBar";
import { Link, Outlet, useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";

const API_URL = "https://releaf-backend.fly.dev";
const token = localStorage.getItem("authToken");

export default function AllPlantsPage() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState(null);
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
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);

  return (
    <div className="flex-grow">
      <UserNavBar plants={plants} />
      {location.pathname === "/all-plants" && <SearchBar />}
      <Outlet />

      {location.pathname === "/all-plants" && (
        <MasonryGallery plants={plants} />
      )}
    </div>
  );
}
