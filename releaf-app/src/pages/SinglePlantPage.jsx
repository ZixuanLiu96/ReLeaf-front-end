import { useParams, Outlet } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ErrorPage from "./ErrorPage";
import PlantCard from "../components/PlantCard";

const API_URL = "https://releaf-backend.fly.dev";
const token = localStorage.getItem("authToken");
export default function SinglePlantPage() {
  const [plants, setPlants] = useState(null);
  const { plantId } = useParams();

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
      setPlants(plants.data.data.plants);
    } catch (err) {
      console.log(err);
    }
  };
  return plants && plants.some((plant) => plant._id == plantId) ? (
    <div className="flex-grow">
      <div className="mt-40">
        <PlantCard plantId={plantId} API_URL={API_URL} token={token} />
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
}
