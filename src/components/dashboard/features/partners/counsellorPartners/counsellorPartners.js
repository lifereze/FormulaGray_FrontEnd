import React, { useEffect, useState } from "react";
import { Table } from "./Table";
import SideBar from "../../../SideBar";
import Banner from "../../../Banner";

export const CounsellorPartners = () => {
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
                    <div>
                      <Table buttonLink="/addStudent" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
