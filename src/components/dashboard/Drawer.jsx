import React from "react";
import { AiOutlineHome, AiOutlineInbox } from "react-icons/ai";
import Logo from "../../constants/images/formulargray_03.png";
import { HiOutlineUsers } from "react-icons/hi";
import { BiFolder } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import {ImCancelCircle} from 'react-icons/im'
import { Link } from "react-router-dom";
function Drawer({setShowDrawer}) {
  return (
    <div className=" fixed w-full inset-0 z-10 "      style={{ background: "rgba(0,0,0,.5)" }}>
    <div className="w-3/5 flex flex-col space-y-4 items-center bg-gray-100 h-screen ">
      <div className=" pt-2 w-full px-2 flex justify-between items-center">
        <img src={Logo} className=" w-3/5" />
        <div className=" p-2 cursor-pointer" onClick={()=>setShowDrawer(false)}>
            <ImCancelCircle className=" text-xl" />
        </div>
      </div>
      <Link onClick={()=>setShowDrawer(false)}
        to={"/dashboard"}  className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg bg-blue-100 text-blue-500">
        <AiOutlineHome className=" text-2xl" />
        <div className="">Dashboard</div>
      </Link>
      <Link onClick={()=>setShowDrawer(false)}
        to={"/applications"} className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <AiOutlineInbox className="text-2xl" />
        <div className="">Applications</div>
      </Link>
      <Link onClick={()=>setShowDrawer(false)}
        to={"/students"} className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <HiOutlineUsers className="text-2xl" />
        <div className="">Students</div>
      </Link>
      <Link onClick={()=>setShowDrawer(false)}
        to={"/programs"} className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <BiFolder className="text-2xl" />
        <div className="">Programs</div>
      </Link>
      <Link onClick={()=>setShowDrawer(false)}
        to={"/schools"} className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <HiOutlineUsers className="text-2xl" />
        <div className="">Schools</div>
      </Link>
      <Link onClick={()=>setShowDrawer(false)}
        to={"/visa"} className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-blue-500">
        <GiNetworkBars className="text-2xl" />
        <div className="">Visa</div>
      </Link>
    </div>
    </div>
  );
}

export default Drawer;
