import React, { useEffect, useState, useRef } from "react";
import { GrFormEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { counsellorGetAllRecruitmentPartners } from "../../../data/api/authenticatedRequests";
import { deleteUser } from "../../../data/api/authenticatedRequests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowMenu from "../../buttons/ShowMenu";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { userStore } from "../../../stores";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Table = () => {
  const tableRef = useRef(null);
  const user = userStore((state) => state.user);
  const [partners, setPartners] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPartners = async () => {
      try {
        setLoading(true);

        const res = await counsellorGetAllRecruitmentPartners();
        setPartners(res?.data?.assignedRecruitmentPartners);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPartners();
  }, []);
  const deleteOnePartner = async (partner) => {
    const confirmer = window.confirm(
      "Are you sure you want to delete this partner? You can not undo this action."
    );
    if (confirmer) {
      const res = await deleteUser(partner._id);
      setPartners((prev) => prev.filter((item) => item._id !== partner._id));
      if (res && res.status == 200) {
        toast("Partner deleted successfully!");
      }
    }
  };

  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar ">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-xl font-bold text-blue-500">Partners</h1>
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
                    ></th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {!loading &&
                    partners &&
                    partners.map((partner) => (
                      <tr key={partner.email}>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {partner?.email}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.firstName}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.lastName}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.business?.location?.country}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          <Link
                            to={`/counsellorStudents/${partner?._id}`}
                            className="bg-blue-500 shadow-md rounded-md text-white cursor-pointer px-2 py-1.5 "
                          >
                            View Students
                          </Link>
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          <Link
                            to={`/counsellorapplications/stage/${partner?._id}`}
                            className="bg-blue-500 shadow-md rounded-md text-white cursor-pointer px-2 py-1.5 "
                          >
                            View Applications
                          </Link>
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
