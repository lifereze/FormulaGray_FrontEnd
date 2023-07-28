import React from "react";
import { Form } from "./Form";
import SideBar from "../../../SideBar";
import Banner from "../../../Banner";
import { useNavigate } from "react-router-dom";

export const CreateStudent = (props) => {
  const navigate = useNavigate();

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
                <div className="flex justify-start">
                  <div
                    className=" bg-white py-0.5 cursor-pointer px-3 rounded-md"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </div>
                </div>

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
