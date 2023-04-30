import React from "react";
import hero from "../../../assets/svg/hero.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              <i class="ri-heart-fill text-pink-600 ri-lg mr-2"></i>
              Health Comes First
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Protect your health and take care of your health
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Your health is one of the most important aspects of your life, and
            it's essential to take steps to protect it.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mb-4 md:flex-row">
          <NavLink
            end
            to="/appointment"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-pink-600 hover:bg-pink-500 active:bg-pink-600 focus:shadow-outline focus:outline-none"
          >
            Make an appointment
          </NavLink>
        </div>
        <img
          src={hero}
          className="w-full mx-auto md:w-auto md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
