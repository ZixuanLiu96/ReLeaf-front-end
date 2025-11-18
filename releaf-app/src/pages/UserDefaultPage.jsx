import { Outlet, useParams } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";

export default function UserDefaultPage() {
  const { userId } = useParams();

  return (
    <div className="flex-grow">
      <UserNavBar id={userId} />
      <Outlet />
    </div>
  );
}
