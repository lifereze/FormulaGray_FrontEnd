import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProgramDetails from "../../modals/programDetails";
import { studentCreateApplication } from "../../../data/api/authenticatedRequests";
import { userStore } from "../../../stores";
import Spinner from "../../utils/BlueSpinner";
function ProgramCard({ program }) {
  const [viewProgram, setViewProgram] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = userStore((state) => state.user);

  const makeApplication = async () => {
    setLoading(true);
    const res = await studentCreateApplication({ programmeId: program._id });

    console.log("Applicaation response :", res);
    setLoading(false);
  };
  return (
    <div className="p-2 border text-left mb-4 col-span-5  bg-white shadow-lg rounded-lg ">
      <div className=" text-[#184061] font-semibold capitalize">
        {program?.title}
      </div>
      <div className=" flex  justify-between items-center py-1">
        <div className=" w-1/2 ">
          <div className=" text-sm text-gray-500">School</div>
          <div className=" ">University of Toronto</div>
        </div>
        <div className=" w-1/2">
          <div className=" text-sm  text-gray-500">Location</div>
          <div className="flex space-x-1  items-center">
            <div className="">Ellesmere Port, North West, GB</div>
          </div>
        </div>
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
      <div className=" flex  justify-between items-center pt-4">
        {user?.role == "student" ? (
          <div className="w-1/2 flex items-start justify-start">
            <div
              className=" p-2 border cursor-pointer border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white text-blue-600"
              onClick={makeApplication}
            >
              {loading ? <Spinner /> : "Apply"}
            </div>
          </div>
        ) : (
          <Link
            to={`/programs/${program._id}`}
            className="w-1/2 flex items-start justify-start"
          >
            <div className=" p-2 border cursor-pointer border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white text-blue-600">
              Select Student
            </div>
          </Link>
        )}
        <div
          className=" flex  items-center w-1/2 space-x-2 cursor-pointer text-blue-600"
          onClick={() => setViewProgram(true)}
        >
          <div className="">See Program Details</div>
          <div className="">
            <AiOutlineArrowRight className=" text-xl" />
          </div>
        </div>
      </div>
      {viewProgram && (
        <ProgramDetails setViewProgram={setViewProgram} program={program} />
      )}
    </div>
  );
}

export default ProgramCard;
