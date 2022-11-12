import { Fragment,useEffect,useState } from "react";
import { Navbar } from "../Navbar";
import { Table } from "./Table";
import SideBar from "../SideBar";
import Banner from "../Banner";

export const Applications = () => {
  
  return (
    <>
    <div className=" grid grid-cols-12">
    <div className="md:col-span-2 hidden md:block ">
  <SideBar />
</div>
    
        <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
         <Banner />
          <div className=" ">
            <section aria-labelledby="activity-title" className="mt-6 xl:mt-8">
              <div>
                <div className="divide-y divide-gray-200">
                  <div className="text-center">
                    <div className="text-xl font-bold text-indigo-500">
                      <div>
                        <Table
                          heading="Applications"
                          buttonName="Add application"
                          buttonLink="/addStudent"
                          editLink="/viewEditStudent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
     
    </div>

    </>
  );
};
