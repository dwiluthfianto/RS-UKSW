import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "../../features/components";

const Account = () => {
  const tableItems = [
    {
      name: "Liam James",
      email: "liamjames@example.com",
      status: "doctor",
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      status: "patient",
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      status: "patient",
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      status: "patient",
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      status: "doctor",
    },
  ];
  const labelColors = {
    doctor: {
      color: "text-green-600 bg-green-50",
    },
    patient: {
      color: "text-blue-600 bg-blue-50",
    },
  };
  const [state, setState] = useState(false);
  const toggleState = () => setState(!state);
  const onClick = () => setState(false);
  return (
    <div>
      <Modal state={state} onClick={onClick} />
      <div className="p-2 md:p-8">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-4xl font-bold">Accounts</h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-12 bg-white p-5 rounded-lg space-y-5">
          <div class=" md:flex md:items-center md:justify-between">
            <div class="relative flex items-center mt-4 md:mt-0">
              <span class="absolute">
                <i class="ri-search-2-line  w-5 h-5 mx-3 text-gray-400"></i>
              </span>

              <input
                type="text"
                placeholder="Search"
                class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-pink-400 dark:focus:border-pink-300 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div class=" mt-4 text-end md:mt-0">
              <NavLink
                end
                to="/admin/signup"
                className="w-full px-4 py-2 text-white font-medium bg-pink-600 hover:bg-pink-500 active:bg-pink-600 rounded-lg duration-150"
              >
                Create an Account
              </NavLink>
            </div>
          </div>
          <div className="shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr className="divide-x">
                  <th className="py-3 px-6">Username</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {tableItems.map((item, idx) => (
                  <tr key={idx} className="divide-x">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                      <span>{idx + 1}</span>
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.email}
                    </td>

                    <td className="px-6py-4 whitespace-nowrap text-center">
                      <span
                        className={`py-2 px-3 rounded-full font-semibold text-xs capitalize ${
                          labelColors[item?.status]?.color || ""
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center justify-center gap-3">
                      <button
                        className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-400"
                        onClick={toggleState}
                      >
                        <i class="ri-edit-box-line ri-xl"></i>
                      </button>
                      <a
                        href=""
                        className="p-2 bg-red-600 text-white rounded-md hover:bg-red-400"
                      >
                        <i class="ri-delete-bin-line ri-xl"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
            <div class="text-sm text-gray-500 ">
              Page <span class="font-medium text-gray-700 ">1 of 10</span>
            </div>

            <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
              <a
                href="#"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>previous</span>
              </a>

              <a
                href="#"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 "
              >
                <span>Next</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
