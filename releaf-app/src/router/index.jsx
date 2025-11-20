import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import UserDefaultPage from "../pages/UserDefaultPage";
import AllPlantsPage from "../pages/AllPlantsPage";
import ErrorPage from "../pages/ErrorPage";
import Protect from "../components/Protect";
import SinglePlantPage from "../pages/SinglePlantPage";
import ProfilePage from "../pages/ProfilePage";
import MyAdoptionPage from "../pages/MyAdoptionPage";
import AboutPage from "../pages/AboutPage";
import HelpPage from "../pages/HelpPage";
import CreateAdoptionsPage from "../pages/CreateAdoptionsPage";

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
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/user/:userId/profile",
    element: (
      <Protect>
        <ProfilePage />
      </Protect>
    ),
  },

  {
    path: "/user/:userId/my-adoptions",
    element: (
      <Protect>
        <MyAdoptionPage />
      </Protect>
    ),
    children: [
      {
        path: ":plantId",
        element: <SinglePlantPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/user/:userId/create-adoptions",
    element: (
      <Protect>
        <CreateAdoptionsPage />
      </Protect>
    ),
  },
  {
    path: "/about",
    element: (
      <Protect>
        <AboutPage />
      </Protect>
    ),
  },
  {
    path: "/help",
    element: (
      <Protect>
        <HelpPage />
      </Protect>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
