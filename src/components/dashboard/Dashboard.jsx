import React from "react";
import { Navbar } from "./Navbar";
import { Card } from "../Card";
import Banner from "./Banner";
import SideBar from "./SideBar";
export const Dashboard = () => {
  return (
    <div className=" grid grid-cols-12 ">
<div className="col-span-2">
  <SideBar />
</div>
  
      <div className=" col-span-10 h-screen overflow-y-scroll w-full overflow-x-hidden">
        <div>
          <div className="w-full   ">
            <div className="xl:col-span-5 xl:border-r xl:border-gray-200  ">
              <div className=" ">

  <Banner />

               
              </div>
              <div className="flex  border-b border-[#0092D2] pb-2 flex-col ml-4">
                <div className="text-gray-500 mt-6">Programs</div>
              </div>
              <div className="grid grid-col-1 md:grid-cols-3 space-x-4 mt-3">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="flex  border-b border-[#0092D2] pb-2 flex-col ml-4">
                <div className="text-gray-500 mt-6">Account activity</div>
              </div>
              <div className="space-y-2 bg-indigo-500 m-1 md:m-3 h-32 rounded-md w-full md:w-64">
                <div className="relative">
                  <div className="absolute top-0 left-2 mt-1 text-white font-bold">
                    USD Balance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-32 bg-gray-200">
          <div className="flex items-center">
            <div>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 border rounded-full mr-1.5 border-gray-500 p-0.5"
              >
                <path
                  d="M5 10C5.901 10 7.581 9.832 8.707 8.708L7.293 7.292C6.85 7.735 5.992 8 5 8C3.374 8 2 6.626 2 5C2 3.374 3.374 2 5 2C5.993 2 6.851 2.265 7.293 2.707L8.707 1.293C7.582 0.168 5.901 0 5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10Z"
                  fill="#9E9E9E"
                />
              </svg>
            </div>
            <div className="text-gray-500">Copyright FormularGray 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};
