import { useEffect, useState } from "react";
import Select from "../select";
import axios from "axios";

const ModalDoctor = ({ state, onClick, id }) => {
  const [inputs, setInputs] = useState([]);
  const [spesialisItem, setSpesialisItem] = useState([]);
  const specialistItems = ["Cardiologist", "Neurologist", "Oncologist"];
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const items = spesialisItem.map((item) => item.spesialisasi);
  function getSpesialis() {
    axios
      .get(`http://localhost/api/users/?spesialis`)
      .then(function (response) {
        setSpesialisItem(response.data);
      });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost/api/users/?updok=${id}`, inputs)
      .then(function (response) {
        console.log(response.data);
        if (response.data.status == 1) {
          window.location.reload();
        }
      });
  };
  const handleSelected = (item) => {
    console.log(item);
    axios
      .put(`http://localhost/api/users/?admdok=${item}`, { ...inputs, id: id })
      .then(function (response) {
        console.log(response.data);
      });
  };
  useEffect(() => {
    getSpesialis();
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
                  Edit biodata doctor
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
                    required
                    onChange={handleChange}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                  />
                </div>

                <Select
                  items={specialistItems}
                  title="specialists"
                  getValue={handleSelected}
                />
                <div>
                  <label className="font-medium">Gaji</label>
                  <input
                    type="number"
                    name="gaji"
                    required
                    onChange={handleChange}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                  />
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

export default ModalDoctor;
