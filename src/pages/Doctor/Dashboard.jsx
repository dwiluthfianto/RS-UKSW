import React from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [pasien, setPasien] = useState([]);
  const [totalPasien, setTotalPasien] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/?dok=${"list_akun"}`)
    .then(response => {
      setPasien(response.data);
      setTotalPasien(response.data[0].total_pasien);
    })
    .catch(error => console.log(error));
  }, []);

  var chart1 = {
    series: [
      {
        name: "positive",

        data: [39, 36, 34, 20, 29, 23, 44, 45, 23, 28, 19, 13, 19, 37, 18, 40],
      },
      {
        name: "neutral",
        data: [31, 23, 33, 47, 31, 44, 39, 24, 47, 28, 51, 29, 67, 14, 25, 61],
      },
      {
        name: "negative",
        data: [30, 41, 33, 33, 40, 33, 17, 31, 30, 44, 30, 58, 14, 8, 38, 21],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
    },
  };
  return (
    <div className="p-2 md:p-8 space-y-5">
      <div className="flex flex-col gap-5 lg:flex-row items-center">
        <p className="text-4xl font-bold">Analytics</p>
        <div className="flex gap-5 px-2 py-2 bg-slate-200 rounded-full items-center">
          <div className="px-5 lg:px-10 py-1 bg-white rounded-full font-medium cursor-pointer">
            <p className="text-sm lg:text-base">Full Statistics</p>
          </div>
          <div className="px-5 lg:px-10 py-1 rounded-full text-slate-600  font-medium cursor-pointer">
            <p className="text-sm lg:text-base">Result Summary</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-md p-5 flex flex-col justify-between cursor-pointer">
            <div className="flex gap-3 items-center">
              <i class="ri-wallet-3-line ri-2x"></i>
              <p className="text-2xl font-bold">Income</p>
            </div>
            <div>
              <p className="text-4xl font-bold">-</p>
              <p className=" text-gray-400">Per Month</p>
            </div>
          </div>
          <div className="bg-white rounded-md p-5 flex flex-col justify-between cursor-pointer">
            <div className="flex justify-between items-center">
              <i class="ri-medicine-bottle-line ri-2x"></i>
              <div className="flex gap-2">
                <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg  rtl:flex-row-reverse ">
                  <button class="px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm ">
                    Days
                  </button>

                  <button class="px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100">
                    Months
                  </button>

                  <button class="px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100">
                    Years
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold">
                {totalPasien}
              </p>
              <p className=" text-gray-400">Patient Visits</p>
            </div>
          </div>
          <div className="bg-white rounded-md p-5 flex flex-col justify-between cursor-pointer">
            <div className="flex justify-between items-center">
              <i class="ri-calendar-2-line ri-2x"></i>
              <div className="flex gap-2">
                <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg  rtl:flex-row-reverse ">
                  <button class="px-2 py-1 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm ">
                    Days
                  </button>

                  <button class="px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100">
                    Months
                  </button>

                  <button class="px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100">
                    Years
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold">{totalPasien}</p>
              <p className=" text-gray-400">Appointments</p>
            </div>
          </div>
        </div>
        <div className="bg-white lg:w-1/4 rounded-md">
          <Chart
            options={chart1.options}
            series={chart1.series}
            type="area"
            height={200}
          />
        </div>
      </div>
      <div className="mt-12 bg-white p-5 rounded-lg space-y-5">
        <p className="text-lg font-medium">Recent Appointments</p>
        <div className="shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr className="divide-x">
                <th className="py-3 px-6">Username</th>
                <th className="py-3 px-6">Alamat</th>
                <th className="py-3 px-6">Age</th>
                <th className="py-3 px-6">Doctor</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {pasien.map((item, idx) => (
                <tr key={idx} className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                    <span>{idx + 1}</span>
                    {item.nama_pasien}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.alamat}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.nama_dokter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
