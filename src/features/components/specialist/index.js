import React from "react";

const Specialist = () => {
  return (
    <div>
      {/* Specialist */}
      <div className="bg-gray-50 ">
        <div className="relative px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-pink-100"
            >
              <circle fill="currentColor" cx="44" cy="44" r="15.5" />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          <div>
            <p></p>
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <i class="ri-service-line ri-lg text-pink-400"></i>
                  </div>
                  <p className="mb-2 font-bold">Cardiologist</p>
                  <p className="text-sm leading-5 text-gray-900">
                    specializes in heart health
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-pink-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <i class="ri-brain-line ri-lg text-pink-400"></i>
                  </div>
                  <p className="mb-2 font-bold">Neurologist</p>
                  <p className="text-sm leading-5 text-gray-900">
                    specializes in the nervous system, including the brain
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-pink-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <i class="ri-microscope-line ri-lg text-pink-400"></i>
                  </div>
                  <p className="mb-2 font-bold">Oncologist</p>
                  <p className="text-sm leading-5 text-gray-900">
                    specializes in the treatment of cancer
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-pink-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <i class="ri-syringe-line ri-lg text-pink-400"></i>
                  </div>
                  <p className="mb-2 font-bold">Gastroenterologist</p>
                  <p className="text-sm leading-5 text-gray-900">
                    specializes in the digestive system
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-pink-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <i class="ri-medicine-bottle-line ri-lg text-pink-400"></i>
                  </div>
                  <p className="mb-2 font-bold">Orthopedic surgeon</p>
                  <p className="text-sm leading-5 text-gray-900">
                    specializes in bone and joint health
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-pink-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <i class="ri-empathize-line ri-lg text-pink-400"></i>
                  </div>
                  <p className="mb-2 font-bold">Pulmonologist</p>
                  <p className="text-sm leading-5 text-gray-900">
                    specializes in respiratory health
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-pink-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <i class="ri-capsule-line ri-lg text-pink-400"></i>
                  </div>
                  <p className="mb-2 font-bold">Dentist</p>
                  <p className="text-sm leading-5 text-gray-900">
                    specializes in teeth, gums, and mouth health.
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-pink-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <i class="ri-hearts-line ri-lg text-pink-400"></i>
                  </div>
                  <p className="mb-2 font-bold">Nephrologist</p>
                  <p className="text-sm leading-5 text-gray-900">
                    specializes in kidney health
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-pink-400 group-hover:scale-x-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
