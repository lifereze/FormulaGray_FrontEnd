import React, { useEffect, useState } from "react";
import { createApplication } from "../../../../data/api/authenticatedRequests";
import {
  getAllStudents,
  getSpecificProgram,
  getAllRecruitmentPartners,
} from "../../../../data/api/authenticatedRequests";
import { useParams } from "react-router-dom";
import { userStore } from "../../../../stores";
import ProgramStudents from "./ProgramStudents";
import Search from "../../../inputs/Search";
import { Link } from "react-router-dom";
export const Table = () => {
  const [isLoading, setIsLoading] = useState();
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(false);
  const [program, setProgram] = useState();
  const [loadingProgram, setLoadingProgram] = useState(false);
  const user = userStore((state) => state.user);
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

  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar ">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-xl font-bold text-blue-500">
            Students- <span className=" capitalize">{program?.title}</span>
          </h1>
        </div>
        <div className=" flex items-center gap-x-2">
          <Search />
          <div className="mt-4 sm:mt-0 ">
            <Link
              to={
                user?.role == "admin"
                  ? "/adminapplications"
                  : user?.role == "recruitmentPartner"
                  ? "/applications"
                  : "/counsellorApplications"
              }
            >
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Applications
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <ProgramStudents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
