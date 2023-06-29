import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { userStore } from "../../../../../stores";
import {
  useAdminGetCounsellorPartnersQuery,
  useAdminGetCounsellorQuery,
} from "./adminCounsellorPartnersApiSlice";
import TableRow from "./TableRow";

export const Table = () => {
  const tableRef = useRef(null);
  const { id } = useParams();
  const user = userStore((state) => state.user);
  const { data, isLoading } = useAdminGetCounsellorPartnersQuery(id);
  const { data: counsellor, isLoading: loading } = useAdminGetCounsellorQuery({
    id,
    data: {
      role: "counselor",
    },
  });

  console.log(data);
  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar ">
      <div className="flex items-center justify-between">
        <div className=" flex flex-col items-start">
          <h1 className="md:text-xl font-bold text-blue-500">
            Counsellor's Partners
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
          <DownloadTableExcel
            filename="Partners table"
            sheet="Partners"
            currentTableRef={tableRef.current}
          >
            <div className="bg-white shadow-md rounded-md text-[#184061] cursor-pointer px-2 py-1.5 ">
              Generate report
            </div>
          </DownloadTableExcel>
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
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Average charge per student
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Average number of students annually
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Students To
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Applications
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Approval status
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
                    data &&
                    data.map((partner) => <TableRow partner={partner} />)}
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
