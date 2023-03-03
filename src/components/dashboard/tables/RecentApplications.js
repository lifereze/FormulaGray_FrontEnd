import React from "react";
import { deleteStudentApplication } from "../../../data/api/authenticatedRequests";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function RecentApplications({ applications, setApplications }) {
  const deleteApplication = async (application) => {
    const confirmer = window.confirm(
      "Are you sure you want to delete this song? You can not undo this action."
    );
    if (confirmer) {
      const res = await deleteStudentApplication(application._id);
      setApplications((prev) =>
        prev.filter((item) => item._id !== application._id)
      );
      if (res && res.status == 200) {
        toast("Student deleted successfully!");
      }
    }
  };
  return (
    <div className=" w-full pb-4 overflow-x-scroll">
      <table className="w-full overflow-x-scroll divide-y divide-gray-300">
        <thead className="bg-[#184061]">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6"
            >
              School
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
            >
              Program
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {applications?.map((application) => (
            <tr>
              <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                University of Cambrige
              </td>
              <td className="whitespace-nowrap  capitalize  text-left px-3 py-4 text-sm text-gray-500">
                {application?.programmeId?.title}
              </td>
              <td className="whitespace-nowrap capitalize text-left px-3 py-4 text-sm text-gray-500">
                {application?.currentStage}
              </td>
              <td
                className="whitespace-nowrap text-left text-red-500 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer"
                onClick={() => deleteApplication(application)}
              >
                Cancel
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentApplications;
