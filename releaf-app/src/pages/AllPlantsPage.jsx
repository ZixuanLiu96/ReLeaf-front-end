import { useState, useEffect, useContext } from "react";
import MasonryGallery from "../components/MasonryGallery";
import UserNavBar from "../components/UserNavBar";
import { Outlet, useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";

const API_URL = "http://localhost:5005";

export default function AllPlantsPage() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(user);

  return (
    <div>
      <UserNavBar />
      {location.pathname === "/all-plants" && <SearchBar />}
      <Outlet />

      {location.pathname === "/all-plants" && <MasonryGallery />}
    </div>
  );
}
