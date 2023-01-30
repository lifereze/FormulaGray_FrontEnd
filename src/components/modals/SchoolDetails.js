import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { userStore } from "../../stores";

function SchoolDetails({ setSchoolUpload }) {
  const user = userStore((state) => state.user);

  return (
    <>
      <div
        className="fixed w-full inset-0 z-75 overflow-hidden flex justify-center items-end md:items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.6)" }}
      >
        <div className="shadow-xl modal-container bg-white text-black w-full md:w-3/5 lg:w-3/5 xl:w-1/3 mx-auto rounded-t-lg md:rounded-lg z-100 overflow-y-auto max-h-full">
          <div className="modal-content text-left">
            <div className="flex w-full flex-row-reverse">
              <div
                className=" mt-1 mr-4 p-2 hover:bg-gray-200 hover:text-black rounded-lg cursor-pointer"
                onClick={() => setSchoolUpload(false)}
              >
                <AiOutlineClose className="" />
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="  text-blue-800 py-2 font-semibold text-center">
                School Details
              </div>

              <div className="py-1">
                <label
                  htmlFor="name-of-school"
                  className="text-xs 
         "
                >
                  Name of School
                </label>
                <input
                  type="text"
                  name="name-of-school"
                  className="w-full rounded-md text-black bg-transparent placeholder-white text-sm border focus:outline-none focus:ring-0 focus:border-bloow-blue "
                  placeholder="Enter the School's Name"
                  required
                />
              </div>
              <div className="py-1">
                <label
                  htmlFor="country"
                  className="text-xs 
         "
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  className="w-full rounded-md text-black bg-transparent placeholder-white text-sm border focus:outline-none focus:ring-0 focus:border-bloow-blue "
                  placeholder="Country"
                  required
                />
              </div>

              <div className="py-1">
                <label
                  htmlFor="city"
                  className="text-xs 
         "
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  className="w-full rounded-md text-black border placeholder-white text-sm  focus:outline-none focus:ring-0 focus:border-bloow-blue bg-transparent"
                  placeholder="City"
                  required
                />
              </div>
              <div className="text-blue-800 py-2 font-semibold text-center">
                Contact Person Details
              </div>
              <div className="py-1">
                <label
                  htmlFor="name"
                  className="text-xs 
         "
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-md text-black border placeholder-white text-sm  focus:outline-none focus:ring-0 focus:border-bloow-blue bg-transparent"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="py-1">
                <label
                  htmlFor="phone-number"
                  className="text-xs 
         "
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  className="w-full rounded-md text-black border placeholder-white text-sm  focus:outline-none focus:ring-0 focus:border-bloow-blue bg-transparent"
                  placeholder="Enter Phone"
                  required
                />
              </div>
              <div className="py-1">
                <label
                  htmlFor="email"
                  className="text-xs 
         "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-md text-black border placeholder-white text-sm  focus:outline-none focus:ring-0 focus:border-bloow-blue bg-transparent"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <button
                className=" bg-blue-500 text-white mt-4 w-full flex justify-between items-center rounded-md px-4 py-1"
                onClick={() => setSchoolUpload(false)}
              >
                <div className="">Submit</div>
                <div className="">
                  <AiOutlineArrowRight className="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolDetails;
