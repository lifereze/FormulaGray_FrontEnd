import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { userStore } from "../../stores";

function ProgramDetails({ setViewProgram, program }) {
  const user = userStore((state) => state.user);
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="fixed w-full inset-0 z-75 overflow-hidden flex justify-center items-end md:items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.6)" }}
      >
        <div className="shadow-xl modal-container bg-white overflow-y-scroll text-black w-full md:w-2/3 lg:w-2/3 xl:w-3/5 mx-auto rounded-t-lg md:rounded-lg z-100  max-h-full">
          <div className="modal-content text-left">
            <div className="flex w-full flex-row-reverse">
              <div
                className=" mt-1 mr-4 p-2 hover:bg-gray-200 hover:text-black rounded-lg cursor-pointer"
                onClick={() => setViewProgram(false)}
              >
                <AiOutlineClose className="" />
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="  text-center text-lg pb-2 font-semibold text-[#184061] ">
                {program.title}
              </div>
              <div className=" flex justify-between">
                <div className=" w-1/2 ">
                  <div className=" text-sm text-gray-500">School</div>
                  <div className="line-clamp-1 ">{program?.schoolId?.name}</div>
                </div>
                <div className=" w-1/2">
                  <div className=" text-sm  text-gray-500">Location</div>
                  <div className="flex space-x-1  items-center">
                    <div className=" line-clamp-1">
                      {program?.schoolId?.city}, {program?.schoolId?.country}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-left font-semibold pt-2 pb-1 text-[#184061]">
                About
              </div>
              {(show && (
                <div className=" line-clamp-none  ">{program?.description}</div>
              )) || (
                <div className=" line-clamp-6  ">{program?.description}</div>
              )}
              {(show && (
                <div
                  className="text-right text-sm text-blue-600 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  Show Less
                </div>
              )) || (
                <div
                  className="text-right text-sm text-blue-600 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  Show more
                </div>
              )}
              <div className="text-left font-semibold pt-2 pb-1 text-[#184061]">
                Cost
              </div>
              <div className=" flex justify-between ">
                <div className="w-1/2">
                  <div className=" text-sm text-gray-500">Tuition</div>
                  <div className="">$ {program?.tuitionFees}</div>
                </div>
                <div className=" w-1/2">
                  <div className=" text-sm text-gray-500">Application Fees</div>
                  <div className="">$ {program?.applicationFees}</div>
                </div>
              </div>
              <div className="text-left font-semibold pt-2 pb-1 text-[#184061]">
                Program Intakes
              </div>
              <div className=" flex space-x-2">
                {program?.intakes?.map((intake) => (
                  <div className=" text-sm   capitalize pt-2">{intake}</div>
                ))}
              </div>
              <div className="text-left font-semibold pt-2 pb-1 text-[#184061]">
                Program Level
              </div>
              <div className=" text-sm capitalize pt-2">{program?.level}</div>
              {/* <div className=" text-lg">1-Year Post-Secondary Certificate</div>
              <div className=" text-sm pt-2">Minimum GPA</div>
              <div className=" text-lg">50.0%</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramDetails;
