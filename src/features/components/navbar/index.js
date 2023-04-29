import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="fixed w-full top-0 bg-white z-50 shadow	">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="  flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <i className="ri-capsule-line ri-2x text-pink-600"></i>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                RS-UKSW
              </span>
            </a>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400">
                <Link
                  to="step"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  How to use
                </Link>
              </li>
              <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400">
                <Link
                  to="specialist"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Specialist
                </Link>
              </li>
              <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400">
                <Link
                  to="news"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Health News & Articles
                </Link>
              </li>
              <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400">
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Faq
                </Link>
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
                <p className="font-semibold">Dwi Luthfianto</p>
                <p className="text-xs text-gray-500 font-medium">Patient</p>
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
                    <p>Logout</p>
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
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
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
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <i className="ri-capsule-line ri-2x text-pink-600"></i>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          RS-UKSW
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400">
                        <Link
                          to="step"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                          How to use
                        </Link>
                      </li>
                      <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400">
                        <Link
                          to="specialist"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                          Specialist
                        </Link>
                      </li>
                      <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400">
                        <Link
                          to="news"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                          Health News & Articles
                        </Link>
                      </li>
                      <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400">
                        <Link
                          to="faq"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                          Faq
                        </Link>
                      </li>

                      {isLogged ? (
                        <>
                          <li className="relative  gap-2 items-center flex justify-between">
                            <div className="flex gap-2">
                              <div className="w-10 h-10 overflow-hidden rounded-full">
                                <img
                                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                  alt="img"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">Dwi Luthfianto</p>
                                <p className="text-xs text-gray-500 font-medium">
                                  Patient
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div className="p-1 cursor-pointer ">
                                <i class="ri-settings-line ri-lg"></i>
                              </div>
                              <div className="p-1 text-red-500 cursor-pointer ">
                                <i class="ri-logout-circle-line ri-lg"></i>
                              </div>
                            </div>
                          </li>
                        </>
                      ) : (
                        <>
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
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
