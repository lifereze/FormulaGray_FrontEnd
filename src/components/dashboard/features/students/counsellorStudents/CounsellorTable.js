import React, { useEffect, useState, useRef } from "react";
import { GrFormEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ShowFiles from "../../../../buttons/showFiles";
import { searchStore, userStore } from "../../../../../stores/index";
import {
  useGetCounsellorStudentsQuery,
  useDeleteStudentMutation,
} from "./counsellorStudentsApiSlice";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const CounsellorTable = () => {
  const tableRef = useRef(null);

  const user = userStore((state) => state.user);
  const { data, isLoading, isSuccess, isFetching, refetch, isError, error } =
    useGetCounsellorStudentsQuery();

  const [deleteStudent, { error: deleteError }] = useDeleteStudentMutation();
  const deleteOneStudent = async (id) => {
    const confirmer = window.confirm(
      "Are you sure you want to delete this counsellor? You can not undo this action."
    );
    if (confirmer) {
      try {
        const res = await deleteStudent(id).unwrap();
        if (!deleteError) {
          toast("Student deleted successfully!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="">
      <div className=" flex mt-2 flex-row-reverse">
        <div>
          <DownloadTableExcel
            filename="students table"
            sheet="applications"
            currentTableRef={tableRef.current}
          >
            <div className="bg-white shadow-md rounded-md text-[#184061] cursor-pointer px-2 py-1.5 ">
              Generate report
            </div>
          </DownloadTableExcel>
        </div>
      </div>
      <div className="mt-8 flex  flex-col">
        <div className="-my-2 -mx-4  overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block  min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative z-0 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table
                className="min-w-full    -z-10 divide-y divide-gray-300"
                ref={tableRef}
              >
                <thead className="bg-gray-50">
                  <tr>
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
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Nationality
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Level of Education
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Documents
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 pb-64 bg-white">
                  {!isLoading &&
                    data &&
                    data?.length &&
                    data?.length > 0 &&
                    data?.map((student) => (
                      <tr key={student?.email}>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {student?.email}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {student?.firstName}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {student?.lastName}
                        </td>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {student?.location?.country || "Nigeria"}
                        </td>

                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {student?.educationLevel}
                        </td>

                        <td className="whitespace-nowrap px-3 z-10 text-left py-4 text-sm text-gray-500">
                          {(Object.keys(
                            student?.documents ? student?.documents : {}
                          )?.length > 0 && (
                            <ShowFiles docs={student?.documents} />
                          )) || (
                            <Link to={`/student/edit/${student?._id}`}>
                              Upload Docs
                            </Link>
                          )}
                        </td>
                        <td className="whitespace-nowrap py-4 px-2  text-left text-sm font-medium sm:pr-6">
                          <div className=" flex space-x-2 items-center">
                            <div className="p-1 hover:bg-gray-100 rounded-full">
                              <Link
                                to={`/counsellor/student/edit/${student?._id}`}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                <GrFormEdit className=" text-2xl" />
                              </Link>
                            </div>
                            <div
                              className=" cursor-pointer p-1 hover:bg-gray-100 rounded-full "
                              onClick={() => deleteOneStudent(student?._id)}
                            >
                              <AiOutlineDelete className="text-xl text-red-500" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
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
