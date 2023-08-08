import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CounsellorTable } from "./CounsellorTable";
import { CounsellorPartnerStudentsTable } from "./CounsellorPartnerStudentsTable";
import { CounsellorPartnersStudentsTable } from "./CounsellorPartnersStudentsTable";
import SideBar from "../../../SideBar";
import Banner from "../../../Banner";
import Approval from "../../../../modals/Approval";
import Search from "../../../../inputs/Search";
import { useGetCounsellorPartnerQuery } from "./counsellorStudentsApiSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCounsellor, setPartner } from "./studentsTypeSlice";

export const CounsellorStudents = () => {
  const [showApproval, setShowApproval] = useState(false);
  const { partnerId } = useParams();
  const { data, isLoading } = useGetCounsellorPartnerQuery(partnerId);
  const dispatch = useDispatch();
  const studentsType = useSelector(
    (state) => state.counsellorStudentsType.studentsType
  );
  return (
    <div className=" grid grid-cols-12">
      <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
        <SideBar />
      </div>
      <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
        <Banner />
        <div className=" flex-grow">
          <div className="ml-2 ">
            <section aria-labelledby="activity-title" className="mt-2 xl:mt-4">
              <div>
                <div className="divide-y divide-gray-200">
                  <div className=" text-center">
                    <div className="px-4 sm:px-6  mr-2 no-scrollbar ">
                      <div className="flex items-center gap-2 flex-wrap justify-between">
                        <div className=" flex flex-col items-start">
                          <h1 className="md:text-xl font-bold text-blue-500">
                            Counsellor Students
                          </h1>
                          {!partnerId && (
                            <div className=" flex space-x-2 mt-4">
                              <div
                                className={
                                  studentsType == "counsellor"
                                    ? " bg-white py-1 px-2  text-blue-600 rounded-md cursor-pointer text-sm"
                                    : "bg-white py-1 px-2  rounded-md cursor-pointer text-sm"
                                }
                                onClick={() => dispatch(setCounsellor())}
                              >
                                Your Students
                              </div>
                              <div
                                className={
                                  studentsType == "partner"
                                    ? " bg-white py-1 px-2  text-blue-600 rounded-md cursor-pointer text-sm"
                                    : "bg-white py-1 px-2  rounded-md cursor-pointer text-sm"
                                }
                                onClick={() => dispatch(setPartner())}
                              >
                                Your Partners' Students
                              </div>
                            </div>
                          )}
                          {partnerId && (
                            <div className=" flex space-x-2">
                              <div className=""> Partner's Email:</div>
                              <div className="">
                                {partnerId && !isLoading && (
                                  <div>{data?.email}</div>
                                )}
                              </div>
                            </div>
                          )}
                          {partnerId && (
                            <div className=" flex space-x-2">
                              <div className=""> Partner's Name:</div>
                              <div className="">
                                {partnerId && !isLoading && (
                                  <div>
                                    {data?.firstName} {data?.lastName}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="mt-4 sm:mt-0 flex space-x-2 items-center ">
                          <div className="">
                            <Search />
                          </div>
                          <Link
                            to="/counsellor/student/create"
                            className="px-2 py-2 bg-blue-500 rounded-md text-white "
                          >
                            Create Student
                          </Link>
                        </div>
                      </div>
                      {partnerId ? (
                        <CounsellorPartnerStudentsTable />
                      ) : (
                        (studentsType == "counsellor" && (
                          <CounsellorTable />
                        )) || <CounsellorPartnersStudentsTable />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {showApproval && <Approval setShowApproval={setShowApproval} />}
    </div>
  );
};
