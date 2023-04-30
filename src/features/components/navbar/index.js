import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [users, setUsers] = useState([]);
  const [sett, setSett] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    if (localStorage.getItem("id_save") != null) {
      setIsLogged(true);
    }
  }, [isLogged, localStorage.getItem("id_save")]);
  const home = localStorage.getItem("id_save");
  console.log(home);
  const url = `http://localhost/api/users/?home=${home}`;
  function getUsers() {
    axios.get(`${url}`).then(function (response) {
      console.log(response.data);
      setUsers(response.data);
      setSett(true);
    });
  }
  const handleClick = () => {
    localStorage.clear();
    setIsLogged(false);
  };

  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <div class="flex items-center">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center mr-8"
          >
            <i class="ri-capsule-line ri-2x text-pink-600"></i>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              RS-UKSW
            </span>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Patients & Visitors"
                title="Patients & Visitors"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
              >
                Patients & Visitors
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Service"
                title="Service"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Health News & Articles"
                title="Health News & Articles"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
              >
                Health News & Articles
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
              >
                About us
              </a>
            </li>
          </ul>
        </div>
        {isLogged ? (
          <div className="relative  gap-2 items-center hidden lg:flex">
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="img"
              />
            </div>
              <div>
                <p className="font-semibold">{users.nama}</p>
                <p className="text-xs text-gray-500 font-medium">
                  {users.status}
                </p>
              </div>
            <div
              className="p-1 cursor-pointer bg-slate-100 rounded-md hover:bg-slate-200"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
            >
              <i class="ri-arrow-drop-down-line ri-lg"></i>
            </div>
            {isMoreOpen && (
              <div className="absolute px-4 py-2 space-y-2 bg-white rounded-md shadow-md top-12 border right-0">
                <div className="flex gap-2 px-4 py-2 font-medium rounded-md hover:bg-slate-100 cursor-pointer">
                  <i class="ri-settings-line"></i>
                  <p>Setting</p>
                </div>
                <hr />
                <div className="flex gap-2 px-4 py-2 font-medium rounded-md hover:bg-slate-100 cursor-pointer">
                  <i class="ri-logout-circle-line"></i>
                  <button onClick={handleClick}>
                    <p>Logout</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                end
                to="/login"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
                aria-label="Sign in"
                title="Sign in"
              >
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-600 hover:bg-pink-500 active:bg-pink-600 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        )}
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full z-10">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                      <i class="ri-capsule-line ri-2x text-pink-600"></i>
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        RS-UKSW
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
                      >
                        Patients & Visitors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
                      >
                        Service
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
                      >
                        Health News & Articles
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <NavLink
                        end
                        to="/login"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
                      >
                        Sign in
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        end
                        to="/signup"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-400 hover:bg-pink-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign up
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
