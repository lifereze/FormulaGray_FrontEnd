import React, { useEffect, useRef, useState } from "react";
import { createApplication } from "../../../data/api/authenticatedRequests";
import Spinner from "../../utils/Spinner";
import {
  getAllStudents,
  getSpecificProgram,
  getAllRecruitmentPartners,
  searchStudents,
} from "../../../data/api/authenticatedRequests";
import { useParams } from "react-router-dom";
import ApplyButton from "../../buttons/ApplyButton";
import PageLoader from "../../utils/PageLoader";
import { userStore, searchStore } from "../../../stores";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ProgramStudents() {
  const [isLoading, setIsLoading] = useState();
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(false);
  const [program, setProgram] = useState();
  const [loadingProgram, setLoadingProgram] = useState(false);
  const user = userStore((state) => state.user);
  const search = searchStore((state) => state.search);
  const { id } = useParams();
  const onApply = async (id) => {
    setIsLoading(true);
    const res = await createApplication({
      studentId: id,
      programmeId: program._id,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    const getProgram = async () => {
      setLoadingProgram(true);
      const res = await getSpecificProgram(id);
      setLoadingProgram(false);
      setProgram(res.data[0]);
    };
    getProgram();
  }, []);
  useEffect(() => {
    const getStudents = async () => {
      if (search) {
        try {
          setLoading(true);
          const res = await searchStudents({ query: search });
          setStudents(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      } else if (user.role == "recruitmentPartner") {
        try {
          setLoading(true);
          const res = await getAllStudents();
          setStudents(res.data.students);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      } else if (user.role == "admin") {
        try {
          setLoading(true);
          const res = await getAllRecruitmentPartners({ role: "student" });
          setStudents(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getStudents();
  }, [user, search]);
  return (
    <div>
      <table className="min-w-full table-fixed divide-y divide-gray-300">
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
              Highest Education
            </th>

            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        {(!loading && (
          <tbody className="divide-y divide-gray-200 bg-white">
            {students &&
              students.length &&
              students.length > 0 &&
              students.map((student) => (
                <tr key={student.email}>
                  <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                    {student.email}
                  </td>
                  <td
                    className={classNames(
                      "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                      "text-gray-900"
                    )}
                  >
                    {student?.firstName}
                  </td>
                  <td
                    className={classNames(
                      "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                      "text-gray-900"
                    )}
                  >
                    {student?.lastName}
                  </td>
                  <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                    {student?.location?.country}
                  </td>

                  <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                    {student?.educationLevel}
                  </td>

                  <td className="whitespace-nowrap py-4 px-3  text-left text-sm font-medium sm:pr-6">
                    <ApplyButton
                      programId={id}
                      students={students}
                      student={student}
                      setStudents={setStudents}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        )) || <PageLoader />}
      </table>
    </div>
  );
}

export default ProgramStudents;
