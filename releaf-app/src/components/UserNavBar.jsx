import {
  NavLink,
  useNavigate,
  useLocation,
  useParams,
  Link,
} from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useState } from "react";
import WarningNotification from "./WarningNotification";

export default function UserNavBar({ id }) {
  const navigate = useNavigate();
  const { user, logOutUser } = useContext(AuthContext);
  const [isLogOut, setIsLogOut] = useState(false);
  const location = useLocation();
  const { plantId } = useParams();

  const handleNavigate = () => {
    navigate(0);
  };

  const handleLogOut = () => {
    setIsLogOut(true);
    console.log(111);

    setTimeout(() => {
      logOutUser();
      navigate("/login");
    }, 1500);
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
              <NavLink
                to={`/user/${user?._id}/profile`}
                className={`block profile-img h-10 w-10 rounded-full bg-center bg-cover `}
                style={{
                  backgroundImage: `url(${user?.profileUrl})`,
                }}
              >
                {/* <span
                  className="profile-img h-10 w-10 rounded-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${user?.profileUrl})`,
                  }}
                ></span> */}
              </NavLink>
              <span className="text-sm font-medium text-[#a52a2a] ">
                Hello!{" "}
                <Link to={`/user/${user?._id}/profile`}>
                  <span className="hover:underline">{user?.username}</span>
                </Link>
              </span>
            </div>
            <WarningNotification onHandleClick={handleLogOut} />
            {/* <span
              className="text-sm h-8 w-18 border-[#f0ead6] border-1 rounded-md shadow-lg flex items-center justify-center hover:bg-[#c86e59]"
              onClick={handleLogOut}
            >
              Log out
            </span> */}
          </div>
        </div>
      </div>

      <div className="w-full h-13 bg-[#dcefa4]">
        <div className="px-20 py-4 flex items-center justify-center gap-10 text-sm font-medium">
          <div>
            <NavLink
              to="/all-plants"
              className={({ isActive }) =>
                `${isActive ? "text-[#a52a2a]" : ""}`
              }
            >
              <span className="hover:text-[#a52a2a] hover:underline">
                Check All Plants
              </span>
            </NavLink>
            {location.pathname === `/all-plants/${plantId}` && (
              <span className="text-[#a52a2a] hover:underline">
                &gt; Plant Details
              </span>
            )}
          </div>
          <div>
            <NavLink
              to={`/user/${user?._id}/my-adoptions`}
              className={({ isActive }) =>
                `${isActive ? "text-[#a52a2a]" : ""}`
              }
            >
              <span className="hover:text-[#a52a2a] hover:underline">
                My Adoptions
              </span>
            </NavLink>
            {location.pathname ===
              `/user/${user._id}/my-adoptions/${plantId}` && (
              <span className="text-[#a52a2a] hover:underline">
                &gt; Details
              </span>
            )}
          </div>
          <NavLink
            to={`/user/${user?._id}/create-adoptions`}
            className={({ isActive }) => `${isActive ? "text-[#a52a2a]" : ""}`}
          >
            <span className="hover:text-[#a52a2a] hover:underline">
              Give Away Plants
            </span>
          </NavLink>
          <NavLink
            to={`/about`}
            className={({ isActive }) => `${isActive ? "text-[#a52a2a]" : ""}`}
          >
            <span className="hover:text-[#a52a2a] hover:underline">About</span>
          </NavLink>
          <NavLink
            to={`/help`}
            className={({ isActive }) => `${isActive ? "text-[#a52a2a]" : ""}`}
          >
            <span className="hover:text-[#a52a2a] hover:underline">Help</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
