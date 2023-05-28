import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { CounsellorTable } from "./CounsellorTable";
import { AdminTable } from "./AdminTable";
import SideBar from "../SideBar";
import Banner from "../Banner";
import { getAllStudents } from "../../../data/api/authenticatedRequests";
import PageLoader from "../../utils/PageLoader";
import Approval from "../../modals/Approval";
import Search from "../../inputs/Search";
import { userStore } from "../../../stores";
export const CounsellorStudents = () => {
  const [showApproval, setShowApproval] = useState(false);
  const user = userStore((state) => state.user);
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
                        <div className="">
                          <h1 className="md:text-xl font-bold text-blue-500">
                            Students
                          </h1>
                        </div>
                        <div className="mt-4 sm:mt-0 flex space-x-2 items-center ">
                          <div className="">
                            <Search />
                          </div>
                        </div>
                      </div>
                      <CounsellorTable />
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
