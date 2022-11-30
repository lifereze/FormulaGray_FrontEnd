import React from "react";
import { Navbar } from "../Navbar";
import { ProgramsSection } from "./ProgramsSection";
import StudentFilter from "../../filter/StudentFilter";
import Filter from "../../filter/Filter";
import SideBar from "../SideBar";
import Banner from "../Banner";
export const Programs = () => {
  return (
    <div className=" grid grid-cols-12">

    <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
    <SideBar />
    </div>
    <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <Banner />
        <div>
          <div className="mx-auto max-w-sceen px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-screen  xl:grid-cols-3">
            <div className="xl:col-span-5 ">
            <div className="">
                    <div className="pt-2 text-center">
                      <div className="text-xl font-bold text-blue-500 mb-3  p-2">
                        Programs
                      </div>
                      <div className="  grid grid-cols-10 ">
                        <div className=" col-span-4 ">
                        <Filter />
                        </div>
                     <div className=" col-span-6">
                     <ProgramsSection />
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
