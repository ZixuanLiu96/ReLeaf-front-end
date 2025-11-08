import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className=" w-full h-30 bg-[#f0ead6] py-8 fixed z-50">
      <div className="flex items-center justify-between items-center px-20 mb-20">
        <NavLink to="/">
          <div className="w-56 h-15 bg-[url(/logo-2.png)] bg-center bg-cover"></div>
        </NavLink>
        <div className="flex items-center gap-10 px-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[#2e2e2e] rounded-md w-28 h-10 text-lg font-normal flex items-center justify-center p-4 transition-all duration-300 ${
                isActive ? "bg-[#c97c5d]" : " bg-[#4caf50] hover:bg-[#c97c5d] "
              } `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `text-[#2e2e2e] rounded-md w-28 h-10 text-lg font-normal flex items-center justify-center p-4 transition-all duration-300 ${
                isActive ? "bg-[#c97c5d]" : " bg-[#4caf50] hover:bg-[#c97c5d] "
              } `
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-[#2e2e2e] rounded-md w-28 h-10 text-lg font-normal flex items-center justify-center p-4 transition-all duration-300 ${
                isActive ? "bg-[#c97c5d]" : " bg-[#4caf50] hover:bg-[#c97c5d] "
              } `
            }
          >
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
