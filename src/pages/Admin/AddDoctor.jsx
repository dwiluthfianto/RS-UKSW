import React from "react";
import { NavLink } from "react-router-dom";
import { Select } from "../../features/components";

const Signup = () => {
  const specialistItems = [
    "Cardiologist",
    "Neurologist",
    "Oncologist",
    "Gastroenterologist",
    "Orthopedic surgeon",
    "Pulmonologist",
    "Dentist",
    "Nephrologist",
    "Surgeon",
    "Radiologist",
    "Psychiatrist",
    "Urologist",
    "Rheumatologist",
    "Otolaryngologist",
    "Gynecologist",
    "Hematologist",
  ];
  return (
    <div>
      <div className="max-w-sm  w-full mx-auto flex flex-col items-end  mt-12 ">
        <NavLink end to="/admin/doctors">
          <i class="ri-close-line ri-2x hover:text-red-600 cursor-pointer"></i>
        </NavLink>
      </div>
      <main className="w-full  flex flex-col items-center  px-4 bg-white">
        <div className="max-w-sm w-full text-gray-600 space-y-5">
          <div className="text-center pb-8">
            <div className="flex items-center justify-center">
              <i class="ri-capsule-line ri-3x text-pink-600"></i>
              <span class="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase">
                RS-UKSW
              </span>
            </div>
            <div className="mt-5">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Biodata doctor
              </h3>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">Gender</label>
                <div className="relative  mx-auto mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-pink-600">
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-medium">Age</label>
                <input
                  type="number"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            <Select items={specialistItems} title="specialists" />
            <button className="w-full px-4 py-2 text-white font-medium bg-pink-600 hover:bg-pink-500 active:bg-pink-600 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
