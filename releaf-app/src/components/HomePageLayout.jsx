import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

export default function HomePageLayout({ children }) {
  return (
    <>
      <NavBar />

      <div className="px-4 mx-auto flex-col text-[#2e2e2e] ">
        <div className="header w-full flex items-center mb-20 pt-50">
          <div className="header-left flex flex-col ml-5">
            <div className="header-welcome ">
              <h1 className="text-[#4caf50] text-8xl font-semibold">
                Welcome to ReLeaf
              </h1>
              <h1 className="text-[#c97c5d] mt-5 text-xl">
                Adopt Your Plant Pal Now!
              </h1>
            </div>
            {children}
          </div>

          <div className="header-right flex flex-col gap-2 ml-auto mr-30 ">
            <div className="pic-1 w-60 h-70 border-[#c97c5d] border-8 bg-[#f0ead6] flex items-center justify-center origin-top-left -rotate-10  ">
              <img
                src="/plant-1.png"
                alt="plant-1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pic-2 w-60 h-70 border-[#c97c5d] border-8 bg-[#f0ead6] items-center justify-center ml-10 -mt-10 origin-center rotate-20">
              <img
                src="/plant-2.png"
                alt="plant-2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pic-2 w-60 h-70 border-[#c97c5d] border-8 bg-[#f0ead6] items-center justify-center -mt-10 z-20 origin-bottom -rotate-12">
              <img
                src="/plant-3.png"
                alt="plant-3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
