import { useLayoutEffect, useRef, useState } from "react";
import moment from "moment";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Table = ({ students }) => {
  // useLayoutEffect(() => {
  //   const isIndeterminate =
  //     selectedPeople.length > 0 && selectedPeople.length < people.length;
  //   setChecked(selectedPeople.length === people.length);
  //   setIndeterminate(isIndeterminate);
  //   checkbox.current.indeterminate = isIndeterminate;
  // }, [selectedPeople]);

  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-xl font-bold text-blue-500">Applications</h1>
        </div>
        <div className="mt-4 sm:mt-0 ">
          <a href="/addStudent">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Application
            </button>
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Apply Date
                    </th>
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
                      Program
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      School
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
                      Recruitment partner
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Recruitment type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Education
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Applications
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Refferal source
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Lead status
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
                  {students.map((student) => (
                    <tr key={student.email}>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                        {moment(student.createdAt).format("L")}
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                        {student.email}
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                          "text-gray-900"
                        )}
                      >
                        {student.firstName}
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                          "text-gray-900"
                        )}
                      >
                        {student.lastName}
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-blue-500">
                        Master of Social Work (Field Practicum Option)
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-blue-500">
                        University of Regina
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                        {student.location.country}
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                        FormularGray
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                        Refferal
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                        Bachelors
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                        {student.previousApplications?.length}
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                        Walk In
                      </td>
                      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                        {(student.applicationDetails.status && "Complete") ||
                          "Pending"}
                      </td>
                      <td className="whitespace-nowrap py-4 px-3  text-left text-sm font-medium sm:pr-6">
                        <a
                          href={`/student/edit/${student._id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                          <span className="sr-only">, {student.firstName}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
