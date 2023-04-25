import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden w-72 px-6 pt-4 pb-20 bg-white lg:block">
      <div className="flex items-center text-pink-600 mb-8">
        <i class="ri-capsule-fill ri-2x"></i>
        <p className="text-xl font-bold">RS-UKSW</p>
      </div>
      <div
        className="flex flex-col justify-between h-full
      "
      >
        <div className="space-y-2">
          <p className="font-medium px-3 text-gray-500">Main Menu</p>
          <ul className="space-y-2">
            <li>
              <NavLink
                end
                to="/doctor"
                className={({ isActive }) =>
                  !isActive
                    ? "flex gap-2 font-medium p-3 cursor-pointer rounded-md items-center transition-all ease-in hover:bg-slate-100"
                    : "flex gap-2 font-medium p-3 cursor-pointer rounded-md items-center bg-pink-600 text-white"
                }
              >
                <i class="ri-dashboard-line ri-lg"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctor/patient"
                className={({ isActive }) =>
                  !isActive
                    ? "flex gap-2 font-medium p-3 cursor-pointer rounded-md items-center transition-all ease-in hover:bg-slate-100"
                    : "flex gap-2 font-medium p-3 cursor-pointer rounded-md items-center bg-pink-600 text-white"
                }
              >
                <i class="ri-medicine-bottle-line ri-lg"></i>
                <p>Patients</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctor/appointment"
                className={({ isActive }) =>
                  !isActive
                    ? "flex gap-2 font-medium p-3 cursor-pointer rounded-md items-center transition-all ease-in hover:bg-slate-100"
                    : "flex gap-2 font-medium p-3 cursor-pointer rounded-md items-center bg-pink-600 text-white"
                }
              >
                <i class="ri-calendar-2-line ri-lg"></i>
                <p>Appointments</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a className="flex gap-2 font-medium p-3 cursor-pointer  items-center">
                <i class="ri-settings-line ri-lg"></i>
                <p>Settings</p>
              </a>
            </li>
            <li>
              <a className="flex gap-2 font-medium p-3 cursor-pointer items-center">
                <i class="ri-logout-circle-line ri-lg"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
