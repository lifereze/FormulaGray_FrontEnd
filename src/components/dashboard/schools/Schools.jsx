import React from "react";
import { Navbar } from "../Navbar";
import { SchoolsCard } from "./SchoolsCard";
import SideBar from "../SideBar";
import Banner from "../Banner";
import Filter from "../../filter/Filter";
export const Schools = () => {
  return (
    <div className=" grid grid-cols-12">

    <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
    <SideBar />
    </div>
    <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <Banner />
        <div>
          <div className="mx-auto  px-4 sm:px-6 lg:px-8 xl:grid  xl:grid-cols-3">
            <div className="xl:col-span-5  ">
           
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className="pt-3 text-center">
                      <div className="text-xl font-bold text-blue-600 mb-3 border-b p-2">
                        Schools
                      </div>
                      <div className=" grid grid-cols-10">
                        <div className=" col-span-4">
                          <Filter />
                        </div>
                      <div className="col-span-6">
                      <SchoolsCard />
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
