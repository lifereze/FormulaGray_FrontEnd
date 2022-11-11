import React from "react";
import { Navbar } from "./Navbar";
import {EditStudent} from './EditStudent'
import SideBar from "./SideBar";
import Banner from "./Banner";
export const ViewEditStudent = (props) => {
  return (

      <div className=" grid grid-cols-12">

<div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
<SideBar />
</div>
<div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
      <Banner />
        <div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
            <div className="xl:col-span-6 xl:border-r xl:border-gray-200 xl:pr-8 ">
              <section aria-labelledby="activity-title" className="">
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className="pt-6 text-center">
                      <EditStudent />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
