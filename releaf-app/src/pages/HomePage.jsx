import { NavLink, useLocation } from "react-router-dom";
import HomePageLayout from "../components/HomePageLayout";
import { useEffect } from "react";

export default function HomePage() {
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-grow">
      <HomePageLayout>
        {location.pathname === "/" && (
          <>
            <div className="header-about flex items-center mt-15 pr-10 ">
              <p
                className="w-full sm:w-4/5 lg:w-full
                text-base sm:text-lg leading-relaxed
                p-6 sm:p-10
                rounded-md bg-[#4caf50] text-white "
              >
                This is an app for people who want to adopt plants, and also for
                people who want to give away their plants because of moving,
                traveling, etc. There are some caring instructions for each
                plant, which is also friendly to people who have 0 experience
                for looking after plants. After you log in, you can see all the
                plants which are waiting to be adopted!
              </p>
            </div>

            <div className="w-full flex flex-col gap-4 mt-10 pr-10">
              <div className="w-full sm:w-4/5 lg:w-full flex flex-col gap-4">
                <NavLink
                  to="/login"
                  className={
                    "rounded-full h-12 p-2 border-[#c97c5d] border-solid border-2 text-base sm:text-lg font-semibold flex items-center justify-center tracking-wide hover:bg-[#c97c5d] hover:text-white transition"
                  }
                >
                  Have an Account? Go to Log In
                </NavLink>
                <NavLink
                  to="/signup"
                  className={
                    "rounded-full h-12 p-2 border-[#c97c5d] border-solid border-2 text-base sm:text-lg font-semibold flex items-center justify-center tracking-wide hover:bg-[#c97c5d] hover:text-white transition "
                  }
                >
                  Create an Account
                </NavLink>
              </div>
            </div>
          </>
        )}
      </HomePageLayout>
    </div>
  );
}
