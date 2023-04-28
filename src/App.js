import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Appointment, Dashboard, LoginDoctor, Patient } from "./pages/Doctor";
import { Footer, Nav, Sidebar, Topbar } from "./features/components";
import { Home, LoginUser, Signup } from "./pages/User";

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
        path: "/doctor/dashboard",
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
    path: "/doctor/login",
    element: <LoginDoctor />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
