import React from "react";
import { AiOutlineHome, AiOutlineInbox } from "react-icons/ai";
import Logo from "../../constants/images/formulargray_03.png";
import { HiOutlineUsers } from "react-icons/hi";
import { BiFolder } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
function SideBar() {
  return (
    <div className="w-full flex flex-col space-y-4 items-center bg-gray-100 h-screen ">
      <div className=" pt-2">
        <img src={Logo} className="" />
      </div>
      <div className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg bg-blue-100 text-blue-500">
        <AiOutlineHome className=" text-2xl" />
        <div className="">Dashboard</div>
      </div>
      <div className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <AiOutlineInbox className="text-2xl" />
        <div className="">Applications</div>
      </div>
      <div className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <HiOutlineUsers className="text-2xl" />
        <div className="">Students</div>
      </div>
      <div className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <BiFolder className="text-2xl" />
        <div className="">Programs</div>
      </div>
      <div className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <HiOutlineUsers className="text-2xl" />
        <div className="">Schools</div>
      </div>
      <div className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <GiNetworkBars className="text-2xl" />
        <div className="">Visa</div>
      </div>
    </div>
  );
}

export default SideBar;
