import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import UserDefaultPage from "../pages/UserDefaultPage";
import AllPlantsPage from "../pages/AllPlantsPage";
import ErrorPage from "../pages/ErrorPage";

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
    element: <AllPlantsPage />,
  },
  {
    path: "/:userId",
    element: <UserDefaultPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
