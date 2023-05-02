import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const MedRecord = () => {
  const [users, setUsers] = useState([]);
  const id = localStorage.getItem("id_save");
  function getUsers() {
    axios
      .get(`http://localhost/api/users/?appousrmod=${id}`)
      .then(function (response) {
        setUsers(response.data);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return users ? (
    <div className="mx-auto max-w-xl rounded-md shadow-md border mt-12 p-10">
      <div className="space-y-2">
        <h4 className="text-lg font-medium text-gray-800">Medical Record</h4>
        <div className="space-y-5">
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
          <p>
            <span>Obat : </span>
            {users.obat}
          </p>
          <p>
            <span>Diagnosa : </span>
            {users.diagnosa}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-12">
      <div className="max-w-5xl mx-auto p-8  md:p-48 ">
        <div className="flex justify-between p-4 rounded-md bg-blue-50 border border-blue-300">
          <div className="flex gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="self-center">
              <span className="text-blue-600 font-medium">
                Med record not available yet
              </span>
              <div className="text-blue-600">
                <p className="mt-2 sm:text-sm">
                  Tolong tunggu Medical Record, pemberitahuan medical record
                  telah keluar bisa di cek melalui email yang telah di daftar
                </p>
                <div className="mt-2">
                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center font-medium hover:underline sm:text-sm"
                  >
                    Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedRecord;
