import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SidebarMobile = ({ onClick, isActive, links }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className={isActive ? "block" : "hidden"}>
      <div className="absolute top-0 inset-0 overflow-hidden z-20">
        <div className="w-72 px-6 pt-4 pb-20 bg-white z-[1] fixed h-full">
          <div className="flex justify-between items-center  mb-8">
            <div className="text-pink-600 flex items-center">
              <i class="ri-capsule-line ri-2x text-pink-600"></i>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                RS-UKSW
              </span>
            </div>
            <div className="cursor-pointer" onClick={onClick}>
              <i class="ri-close-line ri-lg"></i>
            </div>
          </div>
          <div
            className="flex flex-col justify-between h-full
      "
          >
            <div className="space-y-2">
              <p className="font-medium px-3 text-gray-500">Main Menu</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li>
                    <NavLink
                      end
                      to={link.to}
                      className={({ isActive }) =>
                        !isActive
                          ? "flex gap-2 font-medium p-3 cursor-pointer rounded-md items-center transition-all ease-in hover:bg-slate-100"
                          : "flex gap-2 font-medium p-3 cursor-pointer rounded-md items-center bg-pink-600 text-white"
                      }
                      onClick={onClick}
                    >
                      <i className={link.icon}></i>
                      <p>{link.title}</p>
                    </NavLink>
                  </li>
                ))}
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
                  <button onClick={handleClick}>
                    <a className="flex gap-2 font-medium p-3 cursor-pointer items-center">
                      <i class="ri-logout-circle-line ri-lg"></i>
                      <p>Logout</p>
                    </a>
                  </button>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#090909] opacity-[0.5] absolute inset-0 z-10"></div>
    </div>
  );
};

export default SidebarMobile;
