import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState([]);
  const [hidden] = useState("daftar_admin");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/api/users/", { ...inputs, cek: hidden })
      .then(function (response) {
        console.log(response.data);
      });
    console.log(inputs);
  };
  const radios = ["Patient", "Doctor"];
  if (localStorage.getItem("status_save") != "admin") {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <div className="max-w-sm  w-full mx-auto flex flex-col items-end  mt-12 ">
        <NavLink end to="/admin/accounts">
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
                Create an account
              </h3>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="nama"
                onChange={handleChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-gray-800 font-medium">Select user role</h2>
              <ul className=" flex items-center gap-4">
                {/* Radio groups */}
                {radios.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-2.5">
                    <input
                      type="radio"
                      name="role"
                      value={item}
                      id={idx}
                      onChange={handleChange}
                      className="form-radio border-gray-400 text-pink-600 focus:ring-pink-600 duration-150"
                    />
                    <label
                      htmlFor={idx}
                      className="text-sm text-gray-700 font-medium"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-pink-600 hover:bg-pink-500 active:bg-pink-600 rounded-lg duration-150">
              Create account
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
