import { useState } from "react";
import { NavLink } from "react-router-dom";
import LazyBackground from "./LazyBackground";

export default function MasonryGallery({ plants }) {
  const [hoverId, setHoverId] = useState(null);

  return (
    <div className="w-full px-4 py-5 mt-5">
      <div
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4
          gap-4 space-y-4
        "
      >
        {plants &&
          plants.map((plant) => {
            return (
              <NavLink to={`${plant._id}`} className="block" key={plant._id}>
                {/* <div
                    className={`w-full break-inside-avoid rounded-xl overflow-hidden shadow-md
              hover:scale-[1.03] transition-transform duration-300 cursor-pointer bg-cover bg-center flex items-end`}
                    style={{
                      backgroundImage: `url(${plant.imageUrl[0]} )`,
                      height: `${plant.randomHeight}px`,
                    }}
                    onMouseEnter={() => setHoverId(plant._id)}
                    onMouseLeave={() => setHoverId(null)}
                  > */}
                <LazyBackground
                  src={plant.imageUrl[0]}
                  height={`${plant.randomHeight}px`}
                  onMouseEnter={() => setHoverId(plant._id)}
                  onMouseLeave={() => setHoverId(null)}
                >
                  <div
                    className={`py-2 px-3 flex flex-col justify-center gap-1 font-semibold bg-white/80 w-full transition-all duration-200 ease-in-out ${
                      hoverId === plant._id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    } `}
                  >
                    <div className="plant-name text-md">{plant.name}</div>
                    <div className="plant-status flex items-center">
                      <span
                        className={`w-5 h-5 ${
                          (plant.status === "available" && " bg-[#4caf50]") ||
                          (plant.status === "adopted" && "bg-[#a52a2a]") ||
                          (plant.status === "pending" && "bg-[#ffc70d]")
                        } 
                     rounded-full`}
                      ></span>
                      <span
                        className={`p-1 text-sm font-medium ${
                          (plant.status === "available" && " text-[#4caf50]") ||
                          (plant.status === "adopted" && "text-[#a52a2a]") ||
                          (plant.status === "pending" && "text-[#ffc70d]")
                        } `}
                      >
                        {plant.status.slice(0, 1).toUpperCase() +
                          plant.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  {/* </div> */}
                </LazyBackground>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}
