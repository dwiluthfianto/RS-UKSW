import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Appointment, Dashboard, Patient } from "./pages/Doctor";
import { Sidebar, Topbar } from "./features/components";

const Doctor = () => {
  return (
    <div className="flex bg-slate-100 h-screen ">
      <Sidebar />
      <div className="w-full overflow-y-scroll">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};
const Admin = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/doctor",
    element: <Doctor />,
    children: [
      {
        path: "/doctor",
        element: <Dashboard />,
      },
      {
        path: "/doctor/patient",
        element: <Patient />,
      },
      {
        path: "/doctor/appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Doctor />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
