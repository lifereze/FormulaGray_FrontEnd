import React from "react";

function TopPrrograms() {
  return (
    <div className=" w-full overflow-x-scroll">
      <table className="w-full overflow-x-scroll divide-y divide-gray-300">
        <thead className="bg-[#184061]">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6"
            >
              Rank
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
            >
              Applications
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
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              001
            </td>
            <td className="whitespace-nowrap   text-left px-3 py-4 text-sm text-gray-500">
              Electrical Engineering
            </td>
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              106
            </td>
            <td className="whitespace-nowrap text-center text-indigo-600 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              View
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              002
            </td>
            <td className="whitespace-nowrap   text-left px-3 py-4 text-sm text-gray-500">
              Medicine And Surgery
            </td>
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              54
            </td>
            <td className="whitespace-nowrap text-center text-indigo-600 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              View
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              003
            </td>
            <td className="whitespace-nowrap    text-left px-3 py-4 text-sm text-gray-500">
              Telecommunications
            </td>
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              24
            </td>
            <td className="whitespace-nowrap text-center text-indigo-600 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              View
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              004
            </td>
            <td className="whitespace-nowrap    text-left px-3 py-4 text-sm text-gray-500">
              Software Engineering
            </td>
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              106
            </td>
            <td className="whitespace-nowrap text-center text-indigo-600 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              View
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              005
            </td>
            <td className="whitespace-nowrap    text-left px-3 py-4 text-sm text-gray-500">
              Psychology
            </td>
            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              16
            </td>
            <td className="whitespace-nowrap text-center text-indigo-600 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
              View
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TopPrrograms;
