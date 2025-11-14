import { useParams, Outlet } from "react-router-dom";

export default function SinglePlantPage() {
  const { plantId } = useParams();
  return (
    <div>
      I am single plant page (about plant info)
      <Outlet />
    </div>
  );
}
