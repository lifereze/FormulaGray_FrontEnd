import React from "react";
import { AiOutlineHome, AiOutlineInbox } from "react-icons/ai";
import Logo from "../../constants/images/formulargray_03.png";
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";
import { BiFolder } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
const selected = "px-2 py-4 text-bloow-blue cursor-pointer";
const notSelected = "py-4 px-2 text-white cursor-pointer hover:text-bloow-blue";
function SideBar() {
  return (
    <div className="w-full flex flex-col space-y-4 items-center bg-black text-white h-screen ">
      <div className=" pt-2">
        <img src={Logo} className="" />
      </div>
      <Link
        to={"/dashboard"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500"
      >
        <AiOutlineHome className=" text-2xl" />
        <div className="">Dashboard</div>
      </Link>
      <Link
        to={"/applications"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500"
      >
        <AiOutlineInbox className="text-2xl" />
        <div className="">Applications</div>
      </Link>
      <Link
        to={"/students"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500"
      >
        <HiOutlineUsers className="text-2xl" />
        <div className="">Students</div>
      </Link>

      <Link
        to={"/programs"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 bg-blue-100 w-10/12 rounded-lg  text-blue-500"
      >
        <BiFolder className="text-2xl" />
        <div className="">Programs</div>
      </Link>

      <Link
        to={"/schools"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500"
      >
        <HiOutlineUsers className="text-2xl" />
        <div className="">Schools</div>
      </Link>

      <Link
        to={"/visa"}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500"
      >
        <GiNetworkBars className="text-2xl" />
        <div className="">Visa</div>
      </Link>
    </div>
  );
}

export default SideBar;
