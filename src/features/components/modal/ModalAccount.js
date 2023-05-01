import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalAccount = ({ state, onClick, id }) => {
  const [selectedRole, setSelectedRole] = useState("Patient");
  const [selectSpesialist, setDoctorSpecialist] = useState();
  const radios = ["Patient", "Doctor"];
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const no = id;
  const url = `http://localhost/api/users/?id= ${no}`;
  function getUsers() {
    axios.get(`http://localhost/api/users/?id=${no}`).then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "role") {
      setSelectedRole(value);
      if (value === "Patient") {
        setDoctorSpecialist(null);
      }
    } else {
      setDoctorSpecialist(value);
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost/api/users/${no}`, { ...inputs, id: no })
      .then(function (response) {
        console.log(response.data);
        onClick = false;
        window.location.href = "/admin/accounts";
        window.location.reload();
      });
    console.log(inputs);
  };
  const radioss = ["Cardiologist", "Neurologist", "Oncologist"];
  const radiossvalue = [220, 221, 222];
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
                  Edit account
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
                  <div className="relative mt-2">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-gray-800 font-medium">Status</h2>
                  <ul className=" flex items-center gap-4">
                    {/* Radio groups */}
                    {radios.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-x-2.5">
                        <input
                          type="radio"
                          name="role"
                          value={item}
                          onChange={handleChange}
                          required
                          id={idx}
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
                {selectedRole === "Doctor" && (
                  <div>
                    <h2 className="text-gray-800 font-medium">
                      Select doctors specialist
                    </h2>
                    <ul className=" flex items-center gap-4">
                      {/* Radio groups */}
                      {radioss.map((item, idxx) => (
                        <li key={idxx} className="flex items-center gap-x-2.5">
                          <input
                            type="radio"
                            name="roless"
                            value={radiossvalue[idxx]}
                            id={idxx}
                            onChange={handleChange}
                            className="form-radio border-gray-400 text-pink-600 focus:ring-pink-600 duration-150"
                          />
                          <label
                            htmlFor={idxx}
                            className="text-sm text-gray-700 font-medium"
                          >
                            {item}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className="w-full px-4 py-2 text-white font-medium bg-pink-600 hover:bg-pink-500 active:bg-pink-600 rounded-lg duration-150">
                  Edit
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

export default ModalAccount;
