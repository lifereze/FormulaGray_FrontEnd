import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiFillDelete, AiFillCopy } from "react-icons/ai";
import ProgramDetails from "../../modals/programDetails";
import {
  studentCreateApplication,
  deleteProgram,
} from "../../../data/api/authenticatedRequests";
import { userStore } from "../../../stores";
import Spinner from "../../utils/BlueSpinner";
function ProgramCard({ program }) {
  const [viewProgram, setViewProgram] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = userStore((state) => state.user);

  const makeApplication = async () => {
    setLoading(true);
    const res = await studentCreateApplication({ programmeId: program._id });

    setLoading(false);
  };
  const delete_program = async () => {
    try {
      const confirmer = window.confirm(
        "Are you sure you want to delete this Program? You cannot undo this action."
      );
      if (confirmer) {
        const res = await deleteProgram(program._id);

        if (res && res.status == 200) {
          window.location.reload();
        }
      }
    } catch (error) {}
  };
  return (
    <div className="p-2 border text-left mb-4 md:col-span-5 col-span-10 bg-white shadow-lg rounded-lg ">
      <div className=" flex items-center space-x-2">
        <div className=" text-[#184061] font-semibold  flex-grow capitalize">
          {program?.title}
        </div>
        {user?.role == "admin" && (
          <div className=" flex items-center space-x-2">
            <Link
              to={`/programs/duplicate/${program._id}`}
              className=" p-2 cursor-pointer rounded-full hover:bg-gray-200"
            >
              <AiFillCopy className="" />
            </Link>
            <Link
              to={`/programs/edit/${program._id}`}
              className=" p-2 cursor-pointer rounded-full hover:bg-gray-200"
            >
              <FiEdit2 className="" />
            </Link>
            <div
              className=" p-2 cursor-pointer text-red-500 rounded-full hover:bg-gray-200"
              onClick={delete_program}
            >
              <AiFillDelete className=" text-xl" />
            </div>
          </div>
        )}
      </div>

      <div className=" flex  justify-between items-center py-1">
        <div className=" w-1/2 ">
          <div className=" text-sm text-gray-500">School</div>
          <div className=" ">{program?.schoolId?.name}</div>
        </div>
        <div className=" w-1/2">
          <div className=" text-sm  text-gray-500">Location</div>
          <div className="flex space-x-1  items-center">
            <div className="">
              {program?.schoolId?.city}, {program?.schoolId?.country}
            </div>
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
