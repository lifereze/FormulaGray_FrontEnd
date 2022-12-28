import React from "react";

import { MdAppRegistration } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { GrVisa } from "react-icons/gr";
import { SiProgress } from "react-icons/si";
function Join() {
  return (
    <div className="text-[#184061] py-8 px-20">
      <div className="text-4xl font-bold text-center text-orange-400 py-8">
        Steps to join <span className=" ">FormularGray</span>
      </div>

      <div className=" flex items-center justify-center pb-8">
        <div className="flex">
          <div className=" border font-semibold bg-[#184061] text-white  cursor-pointer border-gray-400 w-48 text-center py-2">
            Student
          </div>
          <div className=" border font-semibold cursor-pointer border-gray-400 w-48 text-center py-2">
            Recruitment partner
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-4 space-x-4">
        <div className=" shadow-lg border border-gray-200 flex flex-col space-y-4 rounded-md p-3">
          <div className="">
            <MdAppRegistration className=" text-5xl" />
          </div>
          <div className=" text-lg font-bold text-blue-500">
            Create an Account
          </div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </div>
          <div className=" flex flex-row-reverse">
            <div className=" rounded-full bg-orange-400 mt-2 py-0.5 px-4 text-lg text-white">
              Join
            </div>
          </div>
        </div>
        <div className=" shadow-lg border border-gray-200 flex flex-col space-y-4 rounded-md p-3">
          <div className="">
            <FaSchool className=" text-5xl" />
          </div>
          <div className=" text-lg font-bold text-blue-500">
            Make application
          </div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </div>
          <div className=" flex flex-row-reverse">
            <div className=" rounded-full bg-orange-400 mt-2 py-0.5 px-4 text-lg text-white">
              Join
            </div>
          </div>
        </div>
        <div className=" shadow-lg border border-gray-200 flex flex-col space-y-4 rounded-md p-3">
          <div className="">
            <GrVisa className=" text-5xl " />
          </div>
          <div className=" text-lg font-bold text-blue-500">Get a visa</div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </div>
          <div className=" flex flex-row-reverse">
            <div className=" rounded-full bg-orange-400 mt-2 py-0.5 px-4 text-lg text-white">
              Join
            </div>
          </div>
        </div>
        <div className=" shadow-lg border border-gray-200 flex flex-col space-y-4 rounded-md p-3">
          <div className="">
            <SiProgress className=" text-5xl " />
          </div>
          <div className=" text-lg font-bold text-blue-500">Join a program</div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </div>
          <div className=" flex flex-row-reverse">
            <div className=" rounded-full bg-orange-400 mt-2 py-0.5 px-4 text-lg text-white">
              Join
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
