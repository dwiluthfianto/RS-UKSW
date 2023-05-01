
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Appointment, Dashboard, Patient } from "./pages/Doctor";
import { Footer, Nav, Sidebar, Topbar } from "./features/components";
import { AppointmentForm, Home, LoginUser, Signup } from "./pages/User";
import {
  Accounts,
  AddDoctor,
  AppointmentAdmin,
  DashboardAdmin,
  Doctors,
  PatientAdmin,
  SignupAccount,
} from "./pages/Admin";

const Doctor = () => {
  const links = [
    {
      to: "/doctor",
      title: "dashboard",
      icon: "ri-dashboard-line ri-lg",
    },
    {
      to: "/doctor/patients",
      title: "patients",
      icon: "ri-medicine-bottle-line ri-lg",
    },
    {
      to: "/doctor/appointments",
      title: "appointment",
      icon: "ri-calendar-2-line ri-lg",
    },
  ];
  return (
    <div className="flex bg-slate-100 h-screen ">
      <Sidebar links={links} />
      <div className="w-full overflow-y-scroll">
        <Topbar links={links} />
        <Outlet />
      </div>
    </div>
  );
};
const Admin = () => {
  const links = [
    {
      to: "/admin",
      title: "dashboard",
      icon: "ri-dashboard-line ri-lg",
    },
    {
      to: "/admin/patients",
      title: "patients",
      icon: "ri-medicine-bottle-line ri-lg",
    },
    {
      to: "/admin/doctors",
      title: "doctors",
      icon: "ri-nurse-line ri-lg",
    },
    {
      to: "/admin/appointments",
      title: "appointment",
      icon: "ri-calendar-2-line ri-lg",
    },
    {
      to: "/admin/accounts",
      title: "account",
      icon: "ri-account-box-line ri-lg",
    },
  ];
  return (
    <div className="flex bg-slate-100 h-screen ">
      <Sidebar links={links} />
      <div className="w-full overflow-y-scroll">
        <Topbar links={links} />
        <Outlet />
      </div>
    </div>
  );
};
const User = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
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
        path: "/doctor/patients",
        element: <Patient />,
      },
      {
        path: "/doctor/appointments",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin",
        element: <DashboardAdmin />,
      },
      {
        path: "/admin/patients",
        element: <PatientAdmin />,
      },
      {
        path: "/admin/appointments",
        element: <AppointmentAdmin />,
      },
      {
        path: "/admin/accounts",
        element: <Accounts />,
      },
      {
        path: "/admin/doctors",
        element: <Doctors />,
      },
    ],
  },
  {
    path: "/admin/signup",
    element: <SignupAccount />,
  },
  {
    path: "/admin/add-doctor",
    element: <AddDoctor />,
  },
  {
    path: "/",
    element: <User />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginUser />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/appointment",
        element: <AppointmentForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
