import React, { useState, useEffect } from "react";
import Select from "../select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalAppointment = ({ state, onClick, id }) => {
  const [doctorItems, setDoctorItems] = useState([]);
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();
  const specialistItems = ["Cardiologist", "Neurologist", "Oncologist"];

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    axios
      .put(`http://localhost/api/users/?appo=${id}`, inputs)
      .then(function (response) {
        console.log(response.data);
        if (response.data.berhasil == "oye") {
          window.location.reload();
        }
      });
  };
  const handleSelected = (item) => {
    console.log(item);
    axios
      .get(`http://localhost/api/users/?spesial=${item}`)
      .then(function (response) {
        console.log(response.data);
        setDoctorItems(response.data);
        console.log(doctorItems.map((doctor) => doctor.nama));
      });
  };
  const submitAppointment = (item) => {
    axios
      .put(`http://localhost/api/users/?iddoktor=${item}`, {
        ...inputs,
        cek: id,
      })
      .then(function (response) {
        console.log(response.data);
      });
  };
  return state ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={onClick}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="py-3 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  Edit appointment
                </h4>
                <p className="text-[15px] text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.{" "}
                </p>
              </div>
              <button
                className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                onClick={onClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-12 max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-medium">Full Name</label>
                  <input
                    type="text"
                    name="nama"
                    onChange={handleChange}
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
                      <select
                        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-pink-600"
                        name="gender"
                        onChange={handleChange}
                      >
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-medium">Age</label>
                    <input
                      type="number"
                      name="age"
                      onChange={handleChange}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Phone number</label>
                  <div className="relative mt-2">
                    <input
                      type="number"
                      name="phone"
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <Select
                  items={specialistItems}
                  title="specialists"
                  getValue={handleSelected}
                />
                <Select
                  items={doctorItems.map((doctor) => doctor.nama)}
                  title="doctors"
                  getValue={submitAppointment}
                />

                <div>
                  <label className="font-medium capitalize">
                    symptoms & conditions
                  </label>
                  <textarea
                    name="keluhan"
                    onChange={handleChange}
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
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ModalAppointment;
