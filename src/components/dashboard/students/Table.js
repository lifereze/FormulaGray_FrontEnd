import React, { useEffect, useState, useRef } from "react";
import { GrFormEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { getAllStudents } from "../../../data/api/authenticatedRequests";
import { deleteStudent } from "../../../data/api/authenticatedRequests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DownloadTableExcel } from "react-export-table-to-excel";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Table = () => {
  const tableRef = useRef(null);
  const [students, setStudents] = useState();
  const [items, setItems] = useState([
    "Bachelors",
    "Doctorate",
    "Masters",
    "Diploma",
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getStudents = async () => {
      try {
        setLoading(true);
        const res = await getAllStudents();
        setStudents(res.data.students);
        setLoading(false);
        console.log(res.data.students);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);
  const deleteOneStudent = async (student) => {
    const confirmer = window.confirm(
      "Are you sure you want to delete this application? You can not undo this action."
    );
    if (confirmer) {
      setStudents((prev) => prev.filter((item) => item._id !== student._id));

      const res = await deleteStudent(student._id);

      console.log(res);
      if (res && res.status == 200) {
        toast("Student deleted successfully!");
      }
    }
  };

  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar ">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-xl font-bold text-blue-500">Students</h1>
        </div>
        <div className="mt-4 sm:mt-0 ">
          <a href="/addStudent">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add student
            </button>
          </a>
        </div>
      </div>
      <div className=" flex mt-2 flex-row-reverse">
        <div>
          <DownloadTableExcel
            filename="students table"
            sheet="applications"
            currentTableRef={tableRef.current}
          >
            <div className="bg-white shadow-md rounded-md cursor-pointer px-2 py-1">
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
                      Level of Education
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
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {!loading &&
                    students &&
                    students.map((student) => (
                      <tr key={student.email}>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {student?.email}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {student?.firstName || "Peter"}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {student?.lastName || "Mbiriri"}
                        </td>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {student?.location?.country || "Nigeria"}
                        </td>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          FormularGray
                        </td>

                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {items[Math.floor(Math.random() * items.length)]}
                        </td>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {student?.previousApplications?.length ||
                            Math.floor(Math.random() * 10)}
                        </td>

                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          Walk In
                        </td>
                        <td className="whitespace-nowrap py-4 px-2  text-left text-sm font-medium sm:pr-6">
                          <div className=" flex space-x-2 items-center">
                            <div className="p-1 hover:bg-gray-100 rounded-full">
                              <a
                                href={`/student/edit/${student?._id}`}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                <GrFormEdit className=" text-2xl" />
                              </a>
                            </div>
                            <div
                              className=" cursor-pointer p-1 hover:bg-gray-100 rounded-full "
                              onClick={() => deleteOneStudent(student)}
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
