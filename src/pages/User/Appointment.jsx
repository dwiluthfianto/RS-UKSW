import React, { useState } from "react";
import { Select } from "../../features/components";

const Appointment = () => {
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
  const doctorItems = ["dr Dwi Luthfianto", "dr Tresno"];

  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="text-pink-600 font-semibold">Appointment</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Make an Appointment
          </p>
          <p>
            Scheduling an appointment with a healthcare provider is an important
            step in taking control of your health.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
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
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <input
                  type="number"
                  required
                  className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <Select items={specialistItems} title="specialists" />
            <Select items={doctorItems} title="doctors" />
            <Select items={doctorItems} title="Doctor's Schedule" />

            <div>
              <label className="font-medium capitalize">
                symptoms & conditions
              </label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-pink-600 hover:bg-pink-500 active:bg-pink-600 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Appointment;
