import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ModalRecord } from "../../features/components";
const Appointment = () => {
  const [users, setUsers] = useState([]);
  const idDok = localStorage.getItem("id_save");
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    const url = `http://localhost/api/users/?appodok=${idDok}`;
    axios.get(`${url}`).then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }
  const [id, setId] = useState();
  const handleClick = (id) => {
    setId(id);
  };
  const [state, setState] = useState(false);
  const toggleState = () => setState(!state);
  const onClick = () => setState(false);
  if (localStorage.getItem("status_save") != "dokter") {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      {id && <ModalRecord state={state} onClick={onClick} id={id} />}
      <div className="p-2 md:p-8">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-4xl font-bold">Appointments</h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-12 bg-white p-5 rounded-lg space-y-5">
          <div class=" md:flex md:items-center md:justify-between">
            <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg  rtl:flex-row-reverse ">
              <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm ">
                View all
              </button>

              <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100">
                Monitored
              </button>

              <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100">
                Unmonitored
              </button>
            </div>

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
          </div>
          <div className="shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr className="divide-x">
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Gender</th>
                  <th className="py-3 px-6">Age</th>
                  <th className="py-3 px-6">Phone</th>
                  <th className="py-3 px-6">Doctor</th>
                  <th className="py-3 px-6">Spesialisasi</th>
                  <th className="py-3 px-6">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {users.map((user, idx) => (
                  <tr key={idx} className="divide-x">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                      <span>{idx + 1}</span>
                      {user.nama}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.nama_dokter}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.spesialisasi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          handleClick(user.id);
                          toggleState();
                        }}
                        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-400"
                      >
                        <i class="ri-survey-line ri-lg"></i>
                      </button>
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

export default Appointment;
