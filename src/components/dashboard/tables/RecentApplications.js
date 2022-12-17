import React from "react";

function RecentApplications() {
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
          <tr>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              University of Cambrige
            </td>
            <td className="whitespace-nowrap   text-left px-3 py-4 text-sm text-gray-500">
              Electrical Engineering
            </td>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              Pending
            </td>
            <td className="whitespace-nowrap text-left text-red-500 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              Cancel
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              University of Oxford
            </td>
            <td className="whitespace-nowrap   text-left px-3 py-4 text-sm text-gray-500">
              Medicine and Surgery
            </td>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-green-500">
              Accepted
            </td>
            <td className="whitespace-nowrap text-left text-indigo-600 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              View
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              Imperial College
            </td>
            <td className="whitespace-nowrap    text-left px-3 py-4 text-sm text-gray-500">
              Psychology
            </td>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              Pending
            </td>
            <td className="whitespace-nowrap text-left text-red-500 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              Cancel
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              The University of Manchester
            </td>
            <td className="whitespace-nowrap    text-left px-3 py-4 text-sm text-gray-500">
              Software Engineering
            </td>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              Pending
            </td>
            <td className="whitespace-nowrap text-left text-red-500 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              Cancel
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              Durham University
            </td>
            <td className="whitespace-nowrap    text-left px-3 py-4 text-sm text-gray-500">
              Structural Engineering
            </td>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              Pending
            </td>
            <td className="whitespace-nowrap text-left text-indigo-600 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              Cancel
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentApplications;
