import React from "react";
import { AiOutlineHome, AiOutlineInbox,AiOutlineLogout } from "react-icons/ai";
import Logo from "../../constants/images/formulargray_03.png";
import { HiOutlineUsers } from "react-icons/hi";
import { BiFolder } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import {ImCancelCircle} from 'react-icons/im'
import { FaUserAlt, FaSchool, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { userStore } from "../../stores";
import {refreshSession,logout} from '../../data/api/authenticatedRequests'
function Drawer({setShowDrawer}) {
  const user = userStore((state) => state.user);
  const LogOut=async ()=>{
    const res= await logout();
    window.location.href = "/signin";
               }
  return (
    <div className=" fixed w-full inset-0 z-10 "      style={{ background: "rgba(0,0,0,.5)" }}>
    <div className="w-3/5 flex flex-col space-y-4 items-center bg-[#184061] text-gray-200 h-screen ">
      <div className=" pt-2 w-full pr-2 flex justify-between items-center">
        <img src={Logo} className=" w-3/5 bg-white p-2 rounded-md" />
        <div className=" p-2 cursor-pointer" onClick={()=>setShowDrawer(false)}>
            <ImCancelCircle className=" text-xl" />
        </div>
      </div>
    
      <div className=" flex flex-col items-center justify-center ">
        {user && user.role == "recruitmentPartner" && (
          <Link to={"/recruitmentPartner/register"}>
            <div className="p-3  bg-white rounded-full">
              <FaUserAlt className=" text-4xl text-black" />
            </div>
          </Link>
        )}
        {user && user.role == "student" && (
          <Link to={"/profile"}>
            <div className="p-3  bg-white rounded-full">
              <FaUserAlt className=" text-4xl text-black" />
            </div>
          </Link>
        )}
        {user && user.role == "admin" && (
          <Link to={"/profile"}>
            <div className="p-3  bg-white rounded-full">
              <FaUserAlt className=" text-4xl text-black" />
            </div>
          </Link>
        )}
        {!user && (
          <div className="p-3  bg-white rounded-full">
            <FaUserAlt className=" text-4xl text-black" />
          </div>
        )}
        <div className=" pt-2 text-md font-semibold uppercase text-white">
          {user && user.firstName && user.firstName}{" "}
          <span>{user && user.lastName && user.lastName}</span>
        </div>
        <div className="pb-2 text-sm">{user && user.email && user.email}</div>
      </div>
      <Link onClick={()=>setShowDrawer(false)}
        to={
          (user?.role == "recruitmentPartner" && "/dashboard") ||
          (user?.role == "admin" && "/adminDashboard") ||
          (user?.role == "student" && "/studentDashboard")
        }  className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  ">
        <AiOutlineHome className=" text-2xl" />
        <div className="">Dashboard</div>
      </Link>
      {(user && user?.role == "recruitmentPartner" && (
        <Link onClick={()=>setShowDrawer(false)}
          to={"/applications"}
          className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
        >
          <AiOutlineInbox className="text-2xl" />
          <div className="">Applications</div>
        </Link>
      )) ||
        (user && user.role == "admin" && (
          <Link onClick={()=>setShowDrawer(false)}
            to={"/adminapplications"}
            className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
          >
            <AiOutlineInbox className="text-2xl" />
            <div className="">Applications</div>
          </Link>
        ))}
         {user && user.role == "admin" && (
        <Link onClick={()=>setShowDrawer(false)}
          to={"/partners"}
          className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
        >
          <FaUserTie className="text-2xl " />
          <div className="">Partners</div>
        </Link>
      )}
      {user && user.role !== "student" && (
        <Link
          to={
            user?.role == "recruitmentPartner" ? "/students" : "/adminStudents"
          }
          className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  text-gray-100"
        >
          <HiOutlineUsers className="text-2xl" />
          <div className="">Students</div>
        </Link>
      )}
      <Link onClick={()=>setShowDrawer(false)}
         to={(user?.role && "/programs") || "/signin"} className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  ">
        <BiFolder className="text-2xl" />
        <div className="">Programs</div>
      </Link>
      <Link onClick={()=>setShowDrawer(false)}
         to={(user?.role && "/schools") || "/signin"} className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  ">
        <HiOutlineUsers className="text-2xl" />
        <div className="">Schools</div>
      </Link>
      <Link onClick={()=>setShowDrawer(false)}
        to={"/visa"} className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  ">
        <GiNetworkBars className="text-2xl" />
        <div className="">Visa</div>
      </Link>
     {user?.role&& <div onClick={()=>{setShowDrawer(false);LogOut();}}
        className=" flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  ">
        <AiOutlineLogout className="text-2xl" />
        <div className="">Logout</div>
      </div>}
    </div>
    </div>
  );
}

export default Drawer;
