import React,{useEffect,useState} from "react";
import { Navbar } from "../Navbar";
import { Table } from "./Table";
import { AdminTable } from "./AdminTable";
import SideBar from "../SideBar";
import Banner from "../Banner";
import { getAllStudents } from "../../../data/api/authenticatedRequests";
import PageLoader  from "../../utils/PageLoader";
import Search from "../../inputs/Search";
import { userStore } from "../../../stores";
export const Students = () => {
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
              <section
                aria-labelledby="activity-title"
                className="mt-2 xl:mt-4"
              >
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className=" text-center">
                      <div className="px-4 sm:px-6  mr-2 no-scrollbar ">
                      <div className="flex items-center gap-2 flex-wrap justify-between">
        <div className="">
          <h1 className="md:text-xl font-bold text-blue-500">Students</h1>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-2 items-center ">
          <div className="">
            <Search/>
          </div>
          <a href="/addStudent">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-2 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add student
            </button>
          </a>
        </div>
      </div>
                        <Table
                   
                       
                          buttonLink="/addStudent"
                     
                        />
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
