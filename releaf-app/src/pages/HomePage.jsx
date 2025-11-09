import { NavLink, useLocation } from "react-router-dom";
import HomePageLayout from "../components/HomePageLayout";
import NewUserForm from "../components/NewUserForm";

export default function HomePage() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="w-full flex-grow">
      <HomePageLayout>
        {location.pathname === "/" && (
          <>
            <div className="header-about flex items-center mt-15 ">
              <p className="w-3/4 text-lg/9 p-10 rounded-md bg-[#4caf50]  ">
                This is an app for people who want to adopt plants, and also for
                people who want to give away their plants because of moving,
                traveling, etc. There are some caring instructions for each
                plant, which is also friendly to people who have 0 experience
                for looking after plants. After you log in, you can see all the
                plants which are waiting to be adopted!
              </p>
            </div>

            <div className="w-3/4 btns flex flex-col justify-center gap-5 mt-10 ">
              <NavLink
                to="/login"
                className={
                  "rounded-full h-12 p-2 border-[#c97c5d] border-solid border-2 text-lg font-semibold flex items-center justify-center tracking-wide hover:bg-[#c97c5d] "
                }
              >
                Have an Account? Go to Log In
              </NavLink>
              <NavLink
                to="/signup"
                className={
                  "rounded-full h-12 p-2 border-[#c97c5d] border-solid border-2 text-lg font-semibold flex items-center justify-center tracking-wide hover:bg-[#c97c5d] "
                }
              >
                Create an Account
              </NavLink>
            </div>
          </>
        )}
      </HomePageLayout>
    </div>
  );
}
