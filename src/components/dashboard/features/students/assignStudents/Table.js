import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useAdminGetUnassignedStudentsQuery,
  useAdminGetCounsellorQuery,
  useAdminAssignCounsellorStudentMutation,
} from "./assignStudentsApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../../../utils/Spinner";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";

export const Table = () => {
  const tableRef = useRef(null);
  const navigate = useNavigate();
  const { counsellorId } = useParams();
  const { data: students, isLoading } = useAdminGetUnassignedStudentsQuery();
  const { data: counsellor, isLoading: loading } = useAdminGetCounsellorQuery({
    id: counsellorId,
    data: {
      role: "counselor",
    },
  });
  const [
    adminAssignCounsellorStudent,
    { isLoading: loadingAssignPartner, error },
  ] = useAdminAssignCounsellorStudentMutation();
  const studentsIds = useSelector(
    (state) => state.assignStudents.assignedStudents
  );
  console.log(studentsIds);
  const assignStudents = () => {
    adminAssignCounsellorStudent({
      id: counsellorId,
      data: {
        assignedStudents: studentsIds,
      },
    });
    if (!error) {
      toast("Students added successfully.");
      navigate("/counsellors");
    }
  };
  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar ">
      <div className="flex items-center justify-between">
        <div className=" flex flex-col items-start">
          <h1 className="md:text-xl font-bold text-blue-500">
            Assing Students
          </h1>

          <div className=" ">
            Name:{" "}
            <span className="text-blue-500 text-sm">
              {counsellor?.firstName} {counsellor?.lastName}
            </span>
          </div>
          <div className="">
            Email:{" "}
            <span className="text-blue-500 text-sm">{counsellor?.email}</span>
          </div>
        </div>
        <div>
          <div
            className={
              (studentsIds?.length === 0 &&
                "bg-white shadow-md rounded-md text-[#184061] cursor-pointer px-2 py-1.5 ") ||
              "bg-blue-500 shadow-md rounded-md text-white cursor-pointer px-2 py-1.5 "
            }
            onClick={studentsIds?.length > 0 ? assignStudents : () => {}}
          >
            {loadingAssignPartner ? <Spinner /> : "Assign Students"}
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table
                className="min-w-full table-fixed divide-y divide-gray-300"
                ref={tableRef}
              >
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    ></th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      First name
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Last name
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Country
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {!isLoading &&
                    students &&
                    students.map((student) => <TableRow student={student} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
