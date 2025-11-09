import HomePageLayout from "../components/HomePageLayout";
import { useLocation } from "react-router-dom";
import NewUserForm from "../components/NewUserForm";

export default function SignupPage() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" w-full flex-grow">
      <HomePageLayout>
        {location.pathname === "/signup" && <NewUserForm />}
      </HomePageLayout>
    </div>
  );
}
