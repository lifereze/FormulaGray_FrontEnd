import React from "react";
import Campus from "../constants/images/campus.png";
import {MdLocationPin} from 'react-icons/md'
export const Card = () => {
  return (
    <div className="shadow-lg rounded-xl mb-3 bg-gray-200">
      
       
        <img className="w-full h-48" src={Campus} />
      
<div className="px-2 ">
      <div className=" font-semibold text-blue-500 pt-0.5">Cheshire Collage South and West </div>
      <div className="flex items-center  space-x-2 py-0.5">
        <div className="">
          <MdLocationPin className=" text-xl text-gray-900" />
        </div>
        <div className=" text-sm text-gray-700">Ellesmere Port, North West, United Kingdom</div>
      </div>
      <div className=" flex justify-between py-0.5">
      <div className="">
        <div className="font-semibold">Tiution</div>
        <div className="text-sm text-gray-500 text-center">$4500 </div>
      </div>
      <div className="">
        <div className="font-semibold ">Application fee </div>
        <div className="text-sm text-gray-500 text-center">$4500 </div>
      </div></div>
      <div className="w-full flex justify-center m-2">
        <button
          type="button"
          className="w-3/4 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-indigo-700"
        >
          Select student
        </button>
      </div>
    </div></div>
  );
};
