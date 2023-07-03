import React, { useEffect, useState, useRef } from "react";
import { useAdminGetCounsellorsQuery } from "../counsellorApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentTableRow from "./StudentTableRow";
import PartnerTableRow from "./PartnerTableRow";
import CreateCounsellor from "../modals/CreateCounsellor";
import { useParams } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Table = () => {
  const tableRef = useRef(null);
  const [showCreateCounsellor, setShowCreateCounsellor] = useState(false);
  const { data, isLoading } = useAdminGetCounsellorsQuery({
    role: "counselor",
  });
  const { studentId, partnerId } = useParams();

  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar ">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-xl font-bold text-blue-500">Counsellors</h1>
        </div>
        <div>
          <div
            className="bg-white shadow-md rounded-md text-[#184061] cursor-pointer px-2 py-1.5 "
            onClick={() => setShowCreateCounsellor(true)}
          >
            Create Counsellor
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
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {!isLoading &&
                    data &&
                    data?.map((counselor) => {
                      return studentId ? (
                        <StudentTableRow counsellor={counselor} />
                      ) : partnerId ? (
                        <PartnerTableRow counsellor={counselor} />
                      ) : (
                        <></>
                      );
                    })}
                  {isLoading && <div className=" text-lg">Loading </div>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {showCreateCounsellor && (
        <CreateCounsellor setShowCreateCounsellor={setShowCreateCounsellor} />
      )}
    </div>
  );
};
