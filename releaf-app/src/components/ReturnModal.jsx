import { useState } from "react";
import { AuthContext } from "../contexts/auth.context";

export default function ReturnModal({
  handleMessage,
  handleReleasePlant,
  dialogRef,
}) {
  const [location, setLocation] = useState("Green House");

  return (
    <el-dialog>
      <dialog
        ref={dialogRef}
        id="dialog"
        aria-labelledby="dialog-title"
        className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
      >
        <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

        <div
          tabIndex="0"
          className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
        >
          <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
            <form onSubmit={handleReleasePlant}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                <div className="sm:flex sm:items-start ">
                  <div className="mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left w-full">
                    <h3
                      id="dialog-title"
                      className="text-lg font-semibold text-gray-900 w-full"
                    >
                      You are releasing a plant
                    </h3>
                    <div className="mt-5 text-base font-md">
                      {/* <div className="flex flex-col gap-1">
                        <label htmlFor="location">Location: </label>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          placeholder="Green House"
                          className="border-1 border-[#2a2a2a] p-2 rounded-md text-sm"
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div> */}

                      <div className="mt-4 flex flex-col gap-1">
                        <label htmlFor="reason">
                          Leave your reasons here (no more than 100 charactors):
                        </label>
                        <textarea
                          id="reason"
                          name="reason"
                          className="border-1 border-[#2a2a2a] p-2 rounded-md w-full text-sm"
                          rows="2"
                          maxLength={100}
                          placeholder="I want to return this plant because..."
                          onChange={(e) => handleMessage(e)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  command="close"
                  commandfor="dialog"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer"
                >
                  Confirm
                </button>
                <button
                  type="button"
                  command="close"
                  commandfor="dialog"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  );
}
