import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useLocation } from "react-router-dom";
import AdoptionModal from "./AdoptionModal";

export default function PlantCard({ plantId, API_URL, token }) {
  const [plant, setPlant] = useState(null);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const getPlant = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/plants/${plantId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // console.log(res);
        setPlant(res.data.data.plant);
      } catch (err) {
        console.log(err);
      }
    };
    getPlant();
  }, [API_URL, plantId, token]);

  // const handlePlant = async () => {
  //   try {
  //     const pendingPlant = await axios.patch(
  //       `${API_URL}/api/plants/${plantId}`,
  //       { ...plant, status: "pending" },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     // console.log(pendingPlant);
  //     setPlant(pendingPlant.data.data.plant);
  //     setTimeout(() => {
  //       // console.log("1111111");

  //       adoptedPlant();
  //     }, 10000);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const adoptedPlant = async () => {
  //   try {
  //     const aPlant = await axios.patch(
  //       `${API_URL}/api/plants/${plantId}`,
  //       {
  //         status: "adopted",
  //         adoptedBy: user._id,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     // console.log(aPlant);
  //     setPlant(aPlant.data.data.plant);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleReleasePlant = async () => {
    const res = await axios.patch(
      `${API_URL}/api/plants/${plantId}`,
      {
        status: "pending",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res);
    setPlant(res.data.data.plant);
    setTimeout(() => {
      // console.log(1111111);

      releasePlant();
    }, 10000);
  };

  const releasePlant = async () => {
    try {
      const aPlant = await axios.patch(
        `${API_URL}/api/plants/${plantId}`,
        {
          status: "available",
          adoptedBy: null,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPlant(aPlant.data.data.plant);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    plant && (
      <div className="flex mx-10 p-8 gap-12 justify-center items-center">
        <div
          className="h-110 w-100 bg-center bg-cover rounded-md border-[#c97c5d] border-4 "
          style={{ backgroundImage: `url(${plant.imageUrl})` }}
        ></div>
        <div className="flex flex-col justify-center gap-5 font-medium text-lg text-[#2a2a2a] ">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>

            <span>{`${plant.name}`}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <span>{` ${plant.species || "Empty"}`}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <span>{`${plant.age} years old`}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>

            <span>{` ${plant.description}`}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>

            <span>{` ${plant.careInstruction || "Empty"}`}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <span>{` ${plant.location || "Empty"}`}</span>
          </div>

          {location.pathname === `/all-plants/${plant._id}` && (
            <>
              <button
                type="button"
                command="show-modal"
                commandfor="dialog"
                className={`rounded-md h-12 hover:bg-[#c97c5d] ${
                  plant.status === "available" ? "bg-[#4caf50]" : "bg-[#c97c5d]"
                }
    ${
      plant.status === "available" ? "hover:bg-green-600" : "hover:bg-[#c97c5d]"
    }
    ${plant.status !== "available" ? "cursor-not-allowed" : "cursor-pointer"}`}
                disabled={plant.status !== "available"}
                // onClick={handlePlant}
              >
                {plant.status === "adopted"
                  ? "This plant has been adopted!"
                  : plant.status === "available"
                  ? "Apply Now"
                  : "Pending"}
              </button>
              <AdoptionModal plant={plant} API_URL={API_URL} token={token} />
            </>
          )}
          {location.pathname ===
            `/user/${user._id}/my-adoptions/${plant._id}` && (
            <button
              type="button"
              command="show-modal"
              commandfor="dialog"
              className={`rounded-md h-12 ${
                plant.status === "adopted" ? "bg-[#4caf50]" : "bg-[#c97c5d]"
              }
              
    ${plant.status === "adopted" ? "hover:bg-green-600" : "hover:bg-[#c97c5d]"}
    ${plant.status !== "adopted" ? "cursor-not-allowed" : "cursor-pointer"}`}
              disabled={plant.status !== "adopted"}
              onClick={handleReleasePlant}
            >
              {plant.status === "adopted"
                ? "Release this plant"
                : plant.status === "pending"
                ? "Pending"
                : "You have successfully released this plant!"}
            </button>
          )}
        </div>
      </div>
    )
  );
}
