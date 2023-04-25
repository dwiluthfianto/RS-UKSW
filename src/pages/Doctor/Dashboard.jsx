import React from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
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
  const tableItems = [
    {
      name: "Liam James",
      email: "liamjames@example.com",
      position: "Software engineer",
      salary: "$100K",
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      position: "Product designer",
      salary: "$90K",
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      position: "Front-end developer",
      salary: "$80K",
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      position: "Laravel engineer",
      salary: "$120K",
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      position: "Open source manager",
      salary: "$75K",
    },
  ];
  return (
    <div className="p-2 md:p-8 space-y-8">
      <div className="flex gap-5 items-center">
        <p className="text-4xl font-bold">Analytics</p>
        <div className="flex gap-5 px-2 py-2 bg-slate-200 rounded-full items-center">
          <div className="px-10 py-1 bg-white rounded-full font-medium cursor-pointer">
            <p>Full Statistics</p>
          </div>
          <div className="px-10 py-1 rounded-full text-slate-600  font-medium cursor-pointer">
            <p>Result Summary</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="bg-white w-2/3">
          <Chart
            options={chart1.options}
            series={chart1.series}
            type="area"
            height={350}
          />
        </div>
        <div className="bg-white w-1/3">
          <Chart
            options={chart1.options}
            series={chart1.series}
            type="area"
            height={350}
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
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Position</th>
                <th className="py-3 px-6">Salary</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx} className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                    <span>{idx + 1}</span>
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
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
