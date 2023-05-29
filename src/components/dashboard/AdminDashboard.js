import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Card } from "../Card";
import Banner from "./Banner";
import SideBar from "./SideBar";
import Info from "./cards/Info";
import { HiDocumentText } from "react-icons/hi";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { MdCancelPresentation, MdCastForEducation } from "react-icons/md";
import { userStore, schoolsStore, studentsStore } from "../../stores";
import { getAllRecruitmentPartners } from "../../data/api/authenticatedRequests";
import { adminGetAllApplications } from "../../data/api/authenticatedRequests";
import StudentUpload from "../modals/StudentUpload";
import { refreshSession } from "../../data/api/authenticatedRequests";
import { getAllSchools } from "../../data/api/authenticatedRequests";
import { SchoolsCard } from "./schools/SchoolsCard";
import { Link } from "react-router-dom";
import { CountryDistribution } from "../charts/CountryDistribution";
import TopSchools from "../featuredComponents/TopSchools";
import TopPrograms from "../featuredComponents/TopPrograms";
export const AdminDashboard = () => {
  const user = userStore((state) => state.user);
  const setUser = userStore((state) => state.storeUser);
  const schools = schoolsStore((state) => state.schools);
  const setSchools = schoolsStore((state) => state.storeSchools);
  const students = studentsStore((state) => state.students);
  const setStudents = studentsStore((state) => state.storeStudents);
  const [studentUpload, setStudentUpload] = useState(false);
  const [studentCount, setStudentCount] = useState();

  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState();
  const [acceptedApplications, setAcceptedApplications] = useState();
  const [rejectedApplications, setRejectedApplications] = useState();

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await adminGetAllApplications();

        setApplications(res?.data?.length);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);
  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await adminGetAllApplications({ currentStage: "accepted" });

        setAcceptedApplications(res?.data?.length);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);
  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await adminGetAllApplications({ currentStage: "rejected" });

        setRejectedApplications(res?.data?.length);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);
  useEffect(() => {
    const getUser = async () => {
      const res = await refreshSession();
      setUser(res.data.user);
    };

    getUser();
  }, []);
  useEffect(() => {
    const fetchSchools = async () => {
      setLoading(true);
      const res = await getAllSchools();
      setSchools(res.data);
      setLoading(false);
    };
    if (!schools) {
      fetchSchools();
    }
  }, [schools]);
  useEffect(() => {
    const getStudents = async () => {
      const res = await getAllRecruitmentPartners({
        role: "student",
      });
      setStudents(res?.data?.students);
    };
    if (!students) {
      getStudents();
    }
  }, []);
  return (
    <>
      <div className=" grid grid-cols-12 ">
        <div className="md:col-span-2 hidden md:block ">
          <SideBar />
        </div>

        <div className=" md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <div>
            <div className="w-full   ">
              <div className="xl:col-span-5 xl:border-r xl:border-gray-200  ">
                <div className=" ">
                  <Banner />
                  <div className=" flex md:px-10 px-4 justify-between items-center"></div>
                  <div className="md:px-10 px-4   pb-10 ">
                    <div className="grid    grid-cols-12 gap-x-4 gap-y-2 ">
                      <div className=" md:col-span-3 col-span-6">
                        <Link to="/adminApplications">
                          <Info
                            icon={
                              <HiDocumentText className=" text-4xl text-white" />
                            }
                            number={applications ? applications : 0}
                            title="Applications"
                            color="#123A5C"
                            iconBg="#657CEE"
                            text="white"
                          />
                        </Link>
                      </div>
                      <div className=" md:col-span-3 col-span-6">
                        <Link to="/adminApplications/accepted">
                          <Info
                            icon={
                              <BsFillCheckSquareFill className=" text-4xl text-white" />
                            }
                            number={
                              acceptedApplications ? acceptedApplications : 0
                            }
                            title="Accepted"
                            color="#FFF"
                            iconBg="#00AF80"
                          />
                        </Link>
                      </div>
                      <div className=" md:col-span-3 col-span-6">
                        <Link to="/adminApplications/rejected">
                          <Info
                            icon={
                              <MdCancelPresentation className=" text-4xl text-white" />
                            }
                            number={
                              rejectedApplications ? rejectedApplications : 0
                            }
                            title="Rejected"
                            color="#FFF"
                            iconBg="#DC7B7B"
                          />
                        </Link>
                      </div>
                      <div className=" md:col-span-3 col-span-6">
                        <Link to="/adminStudents">
                          <Info
                            icon={
                              <MdCastForEducation className=" text-4xl text-white" />
                            }
                            number={students?.length ? students.length : 0}
                            title="Students"
                            color="#FFF"
                            iconBg="#657CEE"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-12  gap-x-4 gap-y-2 px-4 md:px-10 ">
                    <div className="  col-span-12 md:col-span-4 bg-white rounded-lg shadow-md">
                      <div className=" font-semibold p-2">Top Schools</div>
                      <TopSchools />
                    </div>
                    <div className="col-span-12 md:col-span-4 bg-white rounded-lg  shadow-lg">
                      <div className="font-semibold p-2">Top Programs</div>
                      <TopPrograms />
                    </div>
                    <div className="col-span-12 md:col-span-4  bg-white rounded-lg shadow-md">
                      <div className=" text-center py-1 font-semibold">
                        {" "}
                        Country Application Distribution
                      </div>
                      <CountryDistribution />
                    </div>
                  </div>
                </div>
                <div className="flex   pb-2 flex-col md:px-10 px-4 m-6">
                  <div className="text-black font-semibold text-lg mt-6">
                    Featured Schools
                  </div>
                </div>

                <div className="grid  gap-x-4 gap-y-3 md:px-10 px-4 m-6 pb-20 grid-cols-1 md:grid-cols-3">
                  {!loading &&
                    schools &&
                    schools.map((institution) => (
                      <SchoolsCard institution={institution} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {studentUpload && <StudentUpload setStudentUpload={setStudentUpload} />}
    </>
  );
};
