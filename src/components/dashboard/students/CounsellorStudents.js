import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { useParams } from "react-router-dom";
import { CounsellorTable } from "./CounsellorTable";
import { AdminTable } from "./AdminTable";
import SideBar from "../SideBar";
import Banner from "../Banner";
import { adminGetSpecificUser } from "../../../data/api/authenticatedRequests";
import PageLoader from "../../utils/PageLoader";
import Approval from "../../modals/Approval";
import Search from "../../inputs/Search";
import { userStore } from "../../../stores";
export const CounsellorStudents = () => {
  const [showApproval, setShowApproval] = useState(false);
  const [partner, setPartner] = useState();
  const user = userStore((state) => state.user);
  const { partnerId } = useParams();
  const getPartner = async () => {
    const resp = await adminGetSpecificUser(partnerId, {
      role: "counselor",
    });
    setPartner(resp.data);
    console.log(resp);
  };
  useEffect(() => {
    if (partnerId) {
      getPartner();
    }
  }, []);
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
                          {/* <div className=" ">
                            Name:{" "}
                            <span className="text-blue-500 text-sm">
                              {partner?.firstName} {partner?.lastName}
                            </span>
                          </div>
                          <div className="">
                            Email:{" "}
                            <span className="text-blue-500 text-sm">
                              {partner?.email}
                            </span>
                          </div> */}
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
