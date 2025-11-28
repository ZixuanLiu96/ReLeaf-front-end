import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-[#f0ead6] py-5 fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-20">
        <NavLink to="/">
          <div className="w-56 h-15 bg-[url(/logo-2.png)] bg-center bg-cover"></div>
        </NavLink>

        {/* Hamburger (mobile only) */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
        {/* Menu */}
        <div
          className={`
            flex-col md:flex-row md:flex 
            absolute md:static 
            top-16 left-0 w-full md:w-auto
            bg-[#f0ead6] md:bg-transparent
            transition-all duration-300 
            ${open ? "flex" : "hidden"}
          `}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `m-2 md:mx-2 text-[#2e2e2e] rounded-md w-full md:w-28 h-10 
               text-lg font-normal flex items-center justify-center 
               p-2 md:p-4 transition-all duration-300
               ${isActive ? "bg-[#c97c5d]" : "bg-[#4caf50] hover:bg-[#c97c5d]"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `m-2 md:mx-2 text-[#2e2e2e] rounded-md w-full md:w-28 h-10
               text-lg font-normal flex items-center justify-center 
               p-2 md:p-4 transition-all duration-300
               ${isActive ? "bg-[#c97c5d]" : "bg-[#4caf50] hover:bg-[#c97c5d]"}`
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `m-2 md:mx-2 text-[#2e2e2e] rounded-md w-full md:w-28 h-10
               text-lg font-normal flex items-center justify-center 
               p-2 md:p-4 transition-all duration-300
               ${isActive ? "bg-[#c97c5d]" : "bg-[#4caf50] hover:bg-[#c97c5d]"}`
            }
          >
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
