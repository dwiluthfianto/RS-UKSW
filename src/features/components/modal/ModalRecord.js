import { useEffect, useState } from "react";
import Select from "../select";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ModalRecord = ({ state, onClick, id }) => {
  const [inputs, setInputs] = useState([]);
  const [users, setUsers] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function getUsers() {
    axios
      .get(`http://localhost/api/users/?appodokmod=${id}`)
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      });
  }
  const handleSubmit = (event) => {
    axios
      .put(`http://localhost/api/users/?medrecord=${users.id_record}`, inputs)
      .then(function (response) {
        console.log(response.data);
        if (response.data.berhasil == "oye") {
          Navigate("/");
          window.location.reload();
        }
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

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
                  Medical Record
                </h4>
                <div className="space-y-2">
                  <p>
                    <span>Nama : </span>
                    {users.nama}
                  </p>
                  <p>
                    <span>Gender : </span>
                    {users.gender}
                  </p>
                  <p>
                    <span>Age : </span>
                    {users.age}
                  </p>
                  <p>
                    <span>Phone : </span>
                    {users.phone}
                  </p>
                  <p>
                    <span>Email : </span>
                    {users.email}
                  </p>
                  <p>
                    <span>Keluhan : </span>
                    {users.keluhan}
                  </p>
                </div>
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
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="font-medium">Obat</label>
                  <input
                    type="text"
                    name="obat"
                    required
                    onChange={handleChange}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium capitalize">Diagnosis</label>
                  <textarea
                    name="diagnosa"
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

export default ModalRecord;

