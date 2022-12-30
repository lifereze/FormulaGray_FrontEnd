import React from "react";
import { Navbar } from "../Navbar";
import { Form } from "./Form";
import SideBar from "../SideBar";
import Banner from "../Banner";
export const AddProgram = (props) => {
  return (
    <>
      <div className=" grid grid-cols-12">
        <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
          <SideBar />
        </div>
        <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <Banner />
          <div className="mx-auto   px-4 sm:px-6 lg:px-8 ">
            <div className="xl:col-span-6 xl:border-r xl:border-gray-200  xl:pr-8 ">
              <div className="mt-2 xl:mt-4">
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className="pt-6 text-center">
                      <div className="text-xl font-bold">{props.heading}</div>
                      <Form />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
