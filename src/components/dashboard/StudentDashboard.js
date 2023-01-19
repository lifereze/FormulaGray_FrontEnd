import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Card } from "../Card";
import Banner from "./Banner";
import SideBar from "./SideBar";
import Info from "./cards/Info";
import { HiDocumentText } from "react-icons/hi";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { MdCancelPresentation, MdCastForEducation } from "react-icons/md";
import { userStore } from "../../stores";
import { getAllStudents } from "../../data/api/authenticatedRequests";
import StudentUpload from "../modals/StudentUpload";
import { refreshSession } from "../../data/api/authenticatedRequests";
import {
  getAllSchools,
  getStudentApplications,
} from "../../data/api/authenticatedRequests";
import { SchoolsCard } from "./schools/SchoolsCard";
import { Link } from "react-router-dom";
import { CountryDistribution } from "../charts/CountryDistribution";
import TopSchools from "../featuredComponents/TopSchools";
import TopPrograms from "../featuredComponents/TopPrograms";
import RecentApplications from "./tables/RecentApplications";

export const StudentDashboard = () => {
  const user = userStore((state) => state.user);
  const setUser = userStore((state) => state.storeUser);

  const [studentUpload, setStudentUpload] = useState(false);
  const [studentCount, setStudentCount] = useState();
  const [schools, setSchools] = useState();
  const [applications, setApplications] = useState();
  const [accepted, setAccepted] = useState();
  const [pending, setPending] = useState();
  const [rejected, setRejected] = useState();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      const res = await refreshSession();
      console.log(res);
      setUser(res.data.user);
    };

    getUser();
  }, []);
  useEffect(() => {
    const getApplications = async () => {
      const res = await getStudentApplications();
      console.log(res);
      if (res && res.status == 200) {
        setApplications(res.data);
      }
    };
    getApplications();
  }, []);
  useEffect(() => {
    const getApplications = async () => {
      const res = await getStudentApplications({ currentStage: "accepted" });
      console.log(res);
      if (res && res.status == 200) {
        setAccepted(res.data);
      }
    };
    getApplications();
  }, []);
  useEffect(() => {
    const getApplications = async () => {
      const res = await getStudentApplications({ currentStage: "pending" });
      console.log(res);
      if (res && res.status == 200) {
        setPending(res.data);
      }
    };
    getApplications();
  }, []);
  useEffect(() => {
    const getApplications = async () => {
      const res = await getStudentApplications({ currentStage: "rejected" });
      console.log(res);
      if (res && res.status == 200) {
        setRejected(res.data);
      }
    };
    getApplications();
  }, []);
  useEffect(() => {
    const fetchSchools = async () => {
      setLoading(true);
      const res = await getAllSchools();
      setSchools(res.data);
      setLoading(false);
      console.log(schools);
    };
    fetchSchools();
  }, []);
  useEffect(() => {
    const getStudents = async () => {
      const res = await getAllStudents();
      setStudentCount(res?.data?.students?.length);
      console.log(res);
    };
    getStudents();
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
                        <Link to="/applications">
                          <Info
                            icon={
                              <HiDocumentText className=" text-4xl text-white" />
                            }
                            number={applications ? applications.length : 0}
                            title="Applications"
                            color="#123A5C"
                            iconBg="#657CEE"
                            text="white"
                          />
                        </Link>
                      </div>
                      <div className=" md:col-span-3 col-span-6">
                        <Link to="/applications">
                          <Info
                            icon={
                              <BsFillCheckSquareFill className=" text-4xl text-white" />
                            }
                            number={accepted ? accepted.length : 0}
                            title="Accepted"
                            color="#FFF"
                            iconBg="#00AF80"
                          />
                        </Link>
                      </div>
                      <div className=" md:col-span-3 col-span-6">
                        <Link to="/students">
                          <Info
                            icon={
                              <MdCastForEducation className=" text-4xl text-white" />
                            }
                            number={pending ? pending.length : 0}
                            title="Pending"
                            color="#FFF"
                            iconBg="#657CEE"
                          />
                        </Link>
                      </div>
                      <div className=" md:col-span-3 col-span-6">
                        <Link to="/applications">
                          <Info
                            icon={
                              <MdCancelPresentation className=" text-4xl text-white" />
                            }
                            number={rejected ? rejected.length : 0}
                            title="Rejected"
                            color="#FFF"
                            iconBg="#DC7B7B"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="px-10">
                    <div className=" font-semibold p-2 text-[#184061]">
                      User Applications
                    </div>
                    <RecentApplications
                      applications={applications}
                      setApplications={setApplications}
                    />
                  </div>
                  <div className=" grid grid-cols-12  gap-x-4 gap-y-2 px-4 md:px-10">
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

                <div className="grid  gap-x-4 gap-y-3 md:px-10 px-4 m-6 pb-20 grid-cols-2 md:grid-cols-4">
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
