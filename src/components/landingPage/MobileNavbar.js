import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../constants/images/formulargray_03.png";

import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { GrVisa } from "react-icons/gr";

import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { userStore } from "../../stores";
import { refreshSession } from "../../data/api/authenticatedRequests";

function Navbar() {
  let [open, setOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const location = useLocation();
  const user = userStore((state) => state.user);
  const setUser = userStore((state) => state.storeUser);
  useEffect(() => {
    const getUser = async () => {
      const res = await refreshSession();

      setUser(res.data.user);
    };

    getUser();
  }, []);
  return (
    <>
      <div className="bg-white pb-2  z-10 shadow-sm w-full mx-auto h-16 px-4 md:flex md:items-center items-center justify-between">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute cursor-pointer md:hidden block pt-3 z-10"
        >
          {open ? <AiOutlineClose /> : <BiMenu />}
        </div>
        <div className="text-3xl text-center md:pl-8 pl-14 absolute pt-2">
          <Link to="/" className="font-semibold no-underline text-black">
            <img className="h-12 w-auto" src={Logo} alt="Your Company" />
          </Link>
        </div>

        <ul
          className={`md:flex md:items-center md:pl-80 pt-2 md:pb-0 pb-12 absolute md:static bg-white
                       w-11/12 rounded-2xl mt-2 right-4 md:p1-0 p1-9 transition-all duration-500 
                        ease-in ${open ? "top-20" : "top-[-490px]"}`}
        >
          <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7 text-black">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-black no-underline"
                  : "text-black no-underline"
              }
            >
              <div className=" flex items-center space-x-2  pl-2">
                <AiFillHome className="md:hidden" />
                <div className="">Home</div>
              </div>
            </NavLink>
          </li>
          <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7 text-black">
            <NavLink
              to="/schools"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-black no-underline"
                  : "text-black no-underline"
              }
            >
              <div className=" flex items-center space-x-2  pl-2">
                <FaSchool className="md:hidden" />
                <div className="">Schools</div>
              </div>
            </NavLink>
          </li>
          <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              to="/programs"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-black no-underline"
                  : "text-black no-underline"
              }
            >
              <div className=" flex items-center space-x-2  pl-2">
                <IoMdSchool className="md:hidden" />
                <div className="">Programs</div>
              </div>
            </NavLink>
          </li>
          <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              to="/visa"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-black no-underline"
                  : "text-black no-underline"
              }
            >
              <div className=" flex items-center space-x-2  pl-2">
                <GrVisa className="md:hidden" />
                <div className="">Visa</div>
              </div>
            </NavLink>
          </li>

          <div className="ml-8  ">{/* <Search /> */}</div>
        </ul>

        <div className=" hidden md:flex items-center justify-end pt-4 md:pt-2">
          {!user && (
            <Link
              className="no-underline text-black font-semibold mb-3 md:mr-2 cursor-pointer "
              to="/signin"
            >
              SignIn/
            </Link>
          )}
          {user && (
            <Link
              to={
                user && user?.role == "admin"
                  ? "/adminDashboard"
                  : user && user?.role == "student"
                  ? "/studentDashboard"
                  : user?.role == "counselor"
                  ? "counsellorDashboard"
                  : "/dashboard"
              }
            >
              {" "}
              <div className=" no-underline text-black font-semibold  capitalize mb-3 mr-4 cursor-pointer">
                {(user && user.username) ||
                  (user && user.email && user.email.split("@")[0])}
              </div>
            </Link>
          )}
          {!user && (
            <Link
              className="no-underline text-black font-semibold mb-3 mr-4 cursor-pointer"
              to="/signup"
            >
              SignUp
            </Link>
          )}
          {!user && <BsFillPersonCheckFill className="text-2xl mb-3" />}
          {user && (
            <div className=" group">
              {/* <img
                src={defaultUser}
                className="w-10 h-8 rounded-full object-cover mb-3"
                alt="User profile"
              /> */}
              <ul
                className={`group-hover:block absolute hidden  w-64 -ml-52 bg-midnight border border-gray-100  -mt-2 z-100  shadow-md`}
              >
                <li className="flex items-center space-x-4 border-b border-gray-300 py-4 pl-2">
                  <div className="">
                    {/* <img
                      src={
                        user?.image
                          ? (user.image.includes("cloudinary") &&
                              defaultUser) ||
                            user.image
                          : "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
                      }
                      className="w-8 h-8 rounded-full object-cover"
                      alt="User profile"
                    /> */}
                  </div>
                  <div className={`capitalize text-sm  text-white`}>
                    <Link
                      to={
                        user && user?.role == "admin"
                          ? "/adminDashboard"
                          : user && user?.role == "student"
                          ? "/studentDashboard"
                          : user?.role == "counselor"
                          ? "/counsellorDashboard"
                          : "dashboard"
                      }
                    >
                      {" "}
                      <div className="hidden md:block cursor-pointer font-semibold capitalize text-purple-900">
                        {(user && user.firstName && user.firstName) ||
                          (user.email && user.email.split("@")[0])}
                      </div>
                    </Link>
                  </div>
                </li>

                {/* <li
                  className="flex items-center space-x-4 py-4 pl-2 text-white  cursor-pointer"
                  onClick={userLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <div className={`capitalize text-sm  `}>Logout</div>
                </li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
