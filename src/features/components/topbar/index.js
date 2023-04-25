import React from "react";
import moment from "moment";

const Topbar = () => {
  return (
    <div className="flex w-full justify-between p-4 bg-white">
      <div className="flex items-center gap-3">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="img"
            />
          </div>
          <div>
            <p className="font-semibold">dr. John Doe</p>
            <p className="text-xs text-gray-500 font-medium">
              Specialist Dentist
            </p>
          </div>
        </div>
        <span className="block w-[2px] h-10 bg-gray-200"></span>
        <div className="flex gap-2 p-2 rounded-md bg-slate-100 font-medium items-center text-sm cursor-pointer">
          <i class="ri-calendar-2-line"></i>
          <p>{moment().format("ll")}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div class="relative flex items-center mt-4 md:mt-0">
          <span class="absolute">
            <i class="ri-search-2-line  w-5 h-5 mx-3 text-gray-400 "></i>
          </span>

          <input
            type="text"
            placeholder="Search"
            class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-pink-400 dark:focus:border-pink-300 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="p-2 bg-slate-100 rounded-full cursor-pointer">
          <i class="ri-notification-3-line ri-lg"></i>
        </div>
        <div className="p-2 bg-slate-100 rounded-full cursor-pointer">
          <i class="ri-message-3-line ri-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
