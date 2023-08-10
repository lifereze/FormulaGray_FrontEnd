import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineInbox } from "react-icons/ai";
import Logo from "../../constants/images/formulargray_03.png";
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";
import { BiFolder } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { FiEdit2 } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { FaUserAlt, FaSchool, FaUserTie } from "react-icons/fa";
import { userStore } from "../../stores";
const selected = "px-2 py-4 text-bloow-blue cursor-pointer";
const notSelected = "py-4 px-2 text-white cursor-pointer hover:text-bloow-blue";

function SideBar() {
  const user = userStore((state) => state.user);
  const setUser = userStore((state) => state.storeUser);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("");
  useEffect(() => {
    const currentPath = location?.pathname;
    if (currentPath.includes("ashboard")) {
      setCurrentRoute("dashboard");
    }
    if (currentPath.includes("tudent")) {
      setCurrentRoute("students");
    }
    if (currentPath.includes("applications")) {
      setCurrentRoute("applications");
    }
    if (currentPath.includes("partners")) {
      setCurrentRoute("partners");
    }
    if (currentPath.includes("programs")) {
      setCurrentRoute("programs");
    }
    if (currentPath.includes("schools")) {
      setCurrentRoute("schools");
    }
    if (currentPath.includes("visa")) {
      setCurrentRoute("visa");
    }
    if (currentPath.includes("counsellors")) {
      setCurrentRoute("counsellors");
    }
  }, [location]);
  return (
    <div className="w-full flex flex-col space-y-4 items-center bg-[#184061] text-gray-200 h-screen overflow-y-scroll pb-10 ">
      <Link to="/" className=" p-2 mx-2 bg-white rounded-b-lg">
        <img src={Logo} className="" />
      </Link>
      <div className=" flex flex-col items-center justify-center ">
        {user && user.role == "recruitmentPartner" && (
          <Link to={"/recruitmentPartner/register"}>
            <div className="p-3 relative bg-white rounded-full">
              <div className=" absolute bg-white p-1 rounded-lg top-0 right-0">
                <FiEdit2 className="text-black text-md" />
              </div>
              <FaUserAlt className=" text-5xl text-black" />
            </div>
          </Link>
        )}
        {user && user.role == "student" && (
          <Link to={"/profile"}>
            <div className="p-3 relative bg-white rounded-full">
              <div className=" absolute bg-white p-1 rounded-lg top-0 right-0">
                <FiEdit2 className="text-black text-md" />
              </div>
              <FaUserAlt className=" text-5xl text-black" />
            </div>
          </Link>
        )}
        {user && user.role == "admin" && (
          <Link to={"/profile"}>
            <div className="p-3 relative bg-white rounded-full">
              <div className=" absolute bg-white p-1 rounded-lg top-0 right-0">
                <FiEdit2 className="text-black text-md" />
              </div>
              <FaUserAlt className=" text-5xl text-black" />
            </div>
          </Link>
        )}
        {user && user.role == "counselor" && (
          <Link to={"/profile"}>
            <div className="p-3 relative bg-white rounded-full">
              <div className=" absolute bg-white p-1 rounded-lg top-0 right-0">
                <FiEdit2 className="text-black text-md" />
              </div>
              <FaUserAlt className=" text-5xl text-black" />
            </div>
          </Link>
        )}
        {!user && (
          <div className="p-3  bg-white rounded-full">
            <FaUserAlt className=" text-5xl text-black" />
          </div>
        )}
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
            (user?.role == "counselor" && "/counsellorDashboard") ||
            (user?.role == "admin" && "/adminDashboard") ||
            (user?.role == "student" && "/studentDashboard")
          }
          className={
            currentRoute == "dashboard"
              ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
              : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
          }
        >
          <AiOutlineHome className=" text-2xl" />
          <div className="">Dashboard</div>
        </Link>
      )}

      {user && user?.role == "recruitmentPartner" && (
        <Link
          to={"/applications"}
          className={
            currentRoute == "applications"
              ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
              : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
          }
        >
          <AiOutlineInbox className="text-2xl" />
          <div className="">Applications</div>
        </Link>
      )}
      {user && user.role == "admin" && (
        <Link
          to={"/adminapplications"}
          className={
            currentRoute == "applications"
              ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
              : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
          }
        >
          <AiOutlineInbox className="text-2xl" />
          <div className="">Applications</div>
        </Link>
      )}
      {user && user.role == "counselor" && (
        <Link
          to={"/counsellorapplications"}
          className={
            currentRoute == "applications"
              ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
              : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
          }
        >
          <AiOutlineInbox className="text-2xl" />
          <div className="">Applications</div>
        </Link>
      )}
      {user && user.role == "admin" && (
        <Link
          to={"/counsellors"}
          className={
            currentRoute == "counsellors"
              ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
              : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
          }
        >
          <ImUsers className="text-2xl " />
          <div className="">Counsellors</div>
        </Link>
      )}
      {user && user?.role == "admin" && (
        <Link
          to={"/partners"}
          className={
            currentRoute == "partners"
              ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
              : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
          }
        >
          <FaUserTie className="text-2xl " />
          <div className="">Partners</div>
        </Link>
      )}
      {user && user?.role == "counselor" && (
        <Link
          to={"/counsellorPartners"}
          className={
            currentRoute == "partners"
              ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
              : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
          }
        >
          <FaUserTie className="text-2xl " />
          <div className="">Partners</div>
        </Link>
      )}
      {user && user?.role !== "counselor" && (
        <Link
          to={
            (user?.role == "recruitmentPartner" && "/students") ||
            (user?.role == "admin" && "/adminStudents")
          }
          className={
            currentRoute == "students"
              ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
              : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
          }
        >
          <HiOutlineUsers className="text-2xl" />
          <div className="">Students</div>
        </Link>
      )}
      {user?.role == "counselor" && (
        <Link
          to={"/counsellorStudents"}
          className={
            currentRoute == "students"
              ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
              : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
          }
        >
          <HiOutlineUsers className="text-2xl" />
          <div className="">Students</div>
        </Link>
      )}
      <Link
        to={"/programs"}
        className={
          currentRoute == "programs"
            ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
            : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
        }
      >
        <BiFolder className="text-2xl" />
        <div className="">Programs</div>
      </Link>
      <Link
        to={"/schools"}
        className={
          currentRoute == "schools"
            ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
            : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
        }
      >
        <FaSchool className="text-2xl" />
        <div className="">Schools</div>
      </Link>
      <Link
        to={"/visa"}
        className={
          currentRoute == "visa"
            ? "flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg  bg-gray-100 text-[#184061] font-normal  "
            : " flex space-x-2 cursor-pointer items-center p-2 pr-12 w-10/12 rounded-lg transition  text-gray-100 hover:bg-gray-100 hover:text-[#184061]"
        }
      >
        <GiNetworkBars className="text-2xl" />
        <div className="">Visa</div>
      </Link>
    </div>
  );
}

export default SideBar;
