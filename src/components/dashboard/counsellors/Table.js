import React, { useEffect, useState, useRef } from "react";
import { GrFormEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { getAllRecruitmentPartners } from "../../../data/api/authenticatedRequests";
import { deleteUser } from "../../../data/api/authenticatedRequests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowMenu from "../../buttons/ShowMenu";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { Link } from "react-router-dom";
import CreateCounsellor from "../../modals/CreateCounsellor";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Table = () => {
  const tableRef = useRef(null);
  const [partners, setPartners] = useState();
  const [loading, setLoading] = useState(false);
  const [showCreateCounsellor, setShowCreateCounsellor] = useState(false);
  useEffect(() => {
    const getPartners = async () => {
      try {
        setLoading(true);
        const res = await getAllRecruitmentPartners({
          role: "counselor",
        });
        if (res.status == 200) {
          setPartners(res?.data?.counselors);
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPartners();
  }, []);
  const deleteOnePartner = async (partner) => {
    const confirmer = window.confirm(
      "Are you sure you want to delete this counsellor? You can not undo this action."
    );
    if (confirmer) {
      const res = await deleteUser(partner.counselor._id);
      setPartners((prev) =>
        prev.filter((item) => item.counselor._id !== partner.counselor._id)
      );
      if (res && res.status == 200) {
        toast("Partner deleted successfully!");
      }
    }
  };

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
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Partners
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Students
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Applications
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Pending
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Accepted
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Rejected
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Approval status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    ></th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {!loading &&
                    partners &&
                    partners?.map((partner) => (
                      <tr key={partner?.counselor?.email}>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {partner?.counselor?.email}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.counselor?.firstName}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.counselor?.lastName}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.numberOfRecruitmentPartners}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.numberOfStudents}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.numberOfApplications}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.numberOfPendingApplications}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.numberOfAcceptedApplications}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.numberOfRejectedApplications}
                        </td>

                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {partner?.counselor?.approvalStatus}
                        </td>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          <Link
                            to={`/assignPartners/${partner?.counselor?._id}`}
                            className=" bg-blue-500 rounded-md cursor-pointer text-white px-2 py-1.5"
                          >
                            Assign Partner
                          </Link>
                        </td>
                        <td className="whitespace-nowrap py-4 px-2  text-left text-sm font-medium sm:pr-6">
                          <div className=" flex space-x-2 items-center">
                            <div
                              className=" cursor-pointer p-1 hover:bg-gray-100 rounded-full "
                              onClick={() => deleteOnePartner(partner)}
                            >
                              <AiOutlineDelete className="text-xl text-red-500" />
                            </div>
                            <ShowMenu id={partner?.counselor?._id} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  {loading && <div className=" text-lg">Loading </div>}
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
