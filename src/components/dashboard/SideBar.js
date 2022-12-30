import React from "react";
import { AiOutlineHome, AiOutlineInbox } from "react-icons/ai";
import Logo from "../../constants/images/formulargray_03.png";
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";
import { BiFolder } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";

import { FaUserAlt, FaSchool, FaUserTie } from "react-icons/fa";
import { userStore } from "../../stores";
const selected = "px-2 py-4 text-bloow-blue cursor-pointer";
const notSelected = "py-4 px-2 text-white cursor-pointer hover:text-bloow-blue";
function SideBar() {
  const user = userStore((state) => state.user);
  const setUser = userStore((state) => state.storeUser);
  return (
    <div className="w-full flex flex-col space-y-4 items-center bg-[#184061] text-gray-200 h-screen ">
      <div className=" p-2 mx-2 bg-white rounded-b-lg">
        <img src={Logo} className="" />
      </div>
      <div className=" flex flex-col items-center justify-center ">
        <div className="p-3  bg-white rounded-full">
          <FaUserAlt className=" text-5xl text-black" />
        </div>
        <div className=" pt-2 text-lg font-semibold uppercase text-white">
          {user && user.firstName && user.firstName}{" "}
          <span>{user && user.lastName && user.lastName}</span>
        </div>
        <div className="pb-6 text-sm">{user && user.email && user.email}</div>
      </div>
      {user && (
        <Link
          to={
            (user?.role == "recruitmentPartner" && "/dashboard") ||
            (user?.role == "admin" && "/adminDashboard")
          }
          className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
        >
          <AiOutlineHome className=" text-2xl" />
          <div className="">Dashboard</div>
        </Link>
      )}
      {(user && user.role == "recruimentPartner" && (
        <Link
          to={"/applications"}
          className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
        >
          <AiOutlineInbox className="text-2xl" />
          <div className="">Applications</div>
        </Link>
      )) ||
        (user && user.role == "admin" && (
          <Link
            to={"/adminapplications"}
            className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
          >
            <AiOutlineInbox className="text-2xl" />
            <div className="">Applications</div>
          </Link>
        ))}
      {user && user.role == "admin" && (
        <Link
          to={"/partners"}
          className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
        >
          <FaUserTie className="text-2xl " />
          <div className="">Partners</div>
        </Link>
      )}
      <Link
        to={"/students"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
      >
        <HiOutlineUsers className="text-2xl" />
        <div className="">Students</div>
      </Link>

      <Link
        to={"/programs"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12  w-10/12 rounded-lg  text-gray-100"
      >
        <BiFolder className="text-2xl" />
        <div className="">Programs</div>
      </Link>

      <Link
        to={"/schools"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
      >
        <FaSchool className="text-2xl" />
        <div className="">Schools</div>
      </Link>

      <Link
        to={"/visa"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
      >
        <GiNetworkBars className="text-2xl" />
        <div className="">Visa</div>
      </Link>
    </div>
  );
}

export default SideBar;
