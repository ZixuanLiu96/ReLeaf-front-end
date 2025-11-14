import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import UserDefaultPage from "../pages/UserDefaultPage";
import AllPlantsPage from "../pages/AllPlantsPage";
import ErrorPage from "../pages/ErrorPage";
import Protect from "../components/Protect";
import SinglePlantPage from "../pages/SinglePlantPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/all-plants",
    element: (
      <Protect>
        <AllPlantsPage />
      </Protect>
    ),
    children: [
      {
        path: ":plantId",
        element: <SinglePlantPage />,
      },
    ],
  },
  {
    path: "/user/:userId",
    element: <UserDefaultPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
