import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function ProgramsCard({
  name,
  campus,
  location,
  intake,
  deadline,
  fees,
  applicationFees,
  commision,
  id,
}) {
  return (
    <div className=" border bg-white border-gray-500 rounded-lg p-4">
      <div className=" flex items-start  space-x-4">
        <div className=" p-3 rounded-lg bg-blue-100 text-blue-500">
          <IoSchoolOutline className=" text-4xl" />
        </div>
        <div className="">
          <div className=" font-semibold text-lg">{name}</div>
          <div className=" text-sm text-gray-500">
            {campus}-{location}
          </div>
          <div className=" flex items-center py-6  space-x-4">
            <div className="">
              <div className=" text-gray-500 text-sm pb-1">Earliest Intake</div>
              <div className="  ">{intake}</div>
            </div>
            <div className="">
              <div className=" text-gray-500 text-sm pb-1">Deadline</div>
              <div className="  ">{deadline}</div>
            </div>
          </div>
          <div className=" flex items-center space-x-4">
            <div className="">
              <div className=" text-gray-500 text-sm pb-1">Tuition</div>
              <div className="  ">{fees}</div>
            </div>
            <div className="">
              <div className=" text-gray-500 text-sm pb-1">Application Fee</div>
              <div className="  ">{applicationFees}</div>
            </div>
            <div className="">
              <div className=" text-gray-500 text-sm pb-1">Commision</div>
              <div className="  ">{commision}</div>
            </div>
          </div>
          <Link to={`/programs/${id}`}>
            <div className=" p-3 mt-4 border w-1/2 text-center cursor-pointer hover:bg-blue-300 border-blue-500 text-blue-500 hover:text-blue-600 rounded-lg">
              Check Student Eligibility
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramsCard;
