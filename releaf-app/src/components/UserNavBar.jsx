import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useState } from "react";

export default function UserNavBar() {
  const navigate = useNavigate();
  const { user, logOutUser } = useContext(AuthContext);
  const [isLogOut, setIsLogOut] = useState(false);

  const handleNavigate = () => {
    navigate(0);
  };

  const handleLogOut = () => {
    setIsLogOut(true);
    logOutUser();
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  return (
    <div className="fixed w-full z-10">
      <div className="w-full h-24 bg-[#4caf50] ">
        <div className="px-10 py-5 flex items-center">
          <div
            className="logo w-56 h-15 bg-[url(/logo-2.png)] bg-center bg-cover"
            onClick={handleNavigate}
          ></div>

          <div className="user flex items-center gap-5 ml-auto">
            <div className="flex items-center gap-2">
              <span
                className="profile-img h-10 w-10 rounded-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${user.profileUrl})`,
                }}
              ></span>
              <span className="text-sm font-medium text-[#a52a2a] ">
                Hello! <span className="hover:underline">{user.username}</span>
              </span>
            </div>

            <span
              className="text-sm h-8 w-18 border-[#f0ead6] border-1 rounded-md shadow-lg flex items-center justify-center hover:bg-[#c86e59]"
              onClick={handleLogOut}
            >
              Log out
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-13 bg-[#dcefa4]">
        <div className="px-20 py-4 flex items-center justify-center gap-10 text-sm font-medium">
          <NavLink
            to="/all-plants"
            className={({ isActive }) => `${isActive ? "text-[#a52a2a]" : ""}`}
          >
            <span className="hover:text-[#a52a2a]">Check All Plants</span>
          </NavLink>
          <span className="hover:text-[#a52a2a]">My Adoptions</span>
          <span className="hover:text-[#a52a2a]">Give Away Plants</span>
          <span className="hover:text-[#a52a2a] hover:underline">About</span>
          <span className="hover:text-[#a52a2a] hover:underline">Help</span>
        </div>
      </div>
    </div>
  );
}
