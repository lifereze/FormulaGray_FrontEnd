import { useEffect, useRef, useState } from "react";
import { getAllApplications } from "../../../data/api/authenticatedRequests";
import PageLoader from "../../utils/PageLoader";
import moment from "moment";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
export const Table = () => {
  const [students, setStudents] = useState();

  const [loading, setLoading] = useState(false);
  const { currentStage } = useParams();
  useEffect(() => {
    const getStudents = async () => {
      try {
        setLoading(true);
        if (currentStage) {
          const res = await getAllApplications({ currentStage: currentStage });
          console.log("LOOK", res.data.applications);
          setStudents(res.data.applications);
        } else {
          const res = await getAllApplications();
          console.log("LOOK", res.data.applications);
          setStudents(res.data.applications);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);
  const handleChange = async (e) => {
    setLoading(true);
    try {
      const res = await getAllApplications({
        currentStage: e.target.value,
      });
      console.log("LOOK", res.data);
      setStudents(res.data.applications);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-xl font-bold text-blue-500">Applications</h1>
        </div>
        <div className="mt-4 sm:mt-0 ">
          <div className="">
            <div className="col-span-6 sm:col-span-3">
              <select
                id="status"
                name="status"
                onChange={(e) => handleChange(e)}
                autoComplete="status"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">All Applications</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
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
                      Application status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {!loading &&
                    students &&
                    students?.map((student) => (
                      <tr>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {moment(student?.createdAt).format("L")}
                        </td>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {student.studentId.email}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-left text-sm font-medium">
                          {student.studentId.firstName}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-left text-sm font-medium">
                          {student.studentId.lastName}
                        </td>
                        <td className="whitespace-nowrap px-3 capitalize text-left py-4 text-sm text-blue-500">
                          {student?.programmeId?.title}
                        </td>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-blue-500">
                          {student?.programmeId?.schoolId?.name}
                        </td>

                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {student?.currentStage}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3  text-left text-sm font-medium sm:pr-6">
                          <div
                            className=" cursor-pointer p-1 hover:bg-gray-100 rounded-full "
                            onClick={() => {}}
                          >
                            <AiOutlineDelete className="text-xl text-red-500" />
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
    </div>
  );
};
