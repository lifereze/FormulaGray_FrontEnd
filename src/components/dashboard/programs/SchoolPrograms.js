import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { SchoolProgramsSection } from "./SchoolProgramsSection";
import { MdFilterListAlt } from "react-icons/md";
import SideBar from "../SideBar";
import Banner from "../Banner";
import FilterModal from "../../filter/FilterModal";

import Search from "../../inputs/Search";
export const SchoolPrograms = () => {
  const [filterModal, setFilterModal] = useState(false);

  return (
    <>
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
                  <div className="pt-2 ">
                    <div className=" w-full my-4 flex justify-between items-center gap-x-2">
                      <div className="text-xl font-bold text-[#184061] ">
                        Programs
                      </div>
                      <div className=" flex gap-x-4">
                        <div className="">
                          <Search />
                        </div>

                        <div
                          className=" bg-white flex rounded-md gap-x-2 cursor-pointer px-4 items-center
                     "
                          onClick={() => setFilterModal(true)}
                        >
                          <div className="">
                            <MdFilterListAlt className="" />
                          </div>
                          <div className="">Filter</div>
                        </div>
                      </div>
                    </div>

                    <div className="  grid grid-cols-10 ">
                      {/* <div className=" col-span-4 ">
                        <Filter />
                        </div> */}
                      <div className=" col-span-10">
                        <SchoolProgramsSection />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {filterModal && <FilterModal setFilterModal={setFilterModal} />}
    </>
  );
};
