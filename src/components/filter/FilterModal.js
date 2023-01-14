import React, { useState, useEffect, useMemo } from "react";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { userStore } from "../../stores";
import countryList from "react-select-country-list";
import Select from "react-select";
function FilterModal({ setFilterModal }) {
  const user = userStore((state) => state.user);
  const countries = useMemo(() => countryList().getData(), []);
  return (
    <>
      <div
        className="fixed w-full inset-0 z-100 overflow-hidden flex justify-center items-end md:items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.6)" }}
      >
        {console.log(countries)}
        <div className="shadow-xl modal-container bg-white text-black w-full md:w-3/5 lg:w-3/5 xl:w-1/3 mx-auto rounded-t-lg md:rounded-lg z-100 overflow-y-auto max-h-full">
          <div className="modal-content text-left">
            <div className="flex w-full justify-between ">
              <div className="  text-center font-semibold pl-4 pt-2 text-lg text-blue-800 ">
                Select Options
              </div>
              <div
                className=" mt-1 mr-4 p-2 hover:bg-gray-200 hover:text-black rounded-lg cursor-pointer"
                onClick={() => setFilterModal(false)}
              >
                <AiOutlineClose className="" />
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className=" pt-4">
                <div className=" pb-2">Country</div>
                <div className=" ">
                  <Select
                    isMulti
                    onChange={(e) => {}}
                    name="country"
                    options={[
                      { value: "America", label: "America" },
                      { value: "Canada", label: "Canada" },
                      { value: "Europe", label: "Europe" },
                      { value: "Australia", label: "Australia" },
                      { value: "UK", label: "UK" },
                    ]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="pt-4 ">
                <div className=" pb-2">Post-Secondary Discipline</div>

                <div className="">
                  <Select
                    isMulti
                    name="country"
                    onChange={(e) => {}}
                    options={[
                      { value: "America", label: "Engineering And Technology" },
                      { value: "Europe", label: "Sciences" },
                    ]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className=" pt-4 ">
                <div className=" pb-2">Program Levels</div>
                <div className="">
                  <Select
                    isMulti
                    name="country"
                    onChange={(e) => {}}
                    options={[
                      { value: "America", label: "Bachelors Degree" },
                      { value: "Europe", label: "Postgraduate Diploma" },
                      { value: "Canada", label: "Masters Degree" },
                      { value: "Australia", label: "Doctoral/PHD" },
                    ]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="pt-4">
                <div className="pb-2">Application fees</div>
                <div className="flex space-x-4">
                  <div className="">
                    <label
                      htmlFor="LowestPrice"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Lowest
                    </label>
                    <input
                      onChange={(e) => {}}
                      type="number"
                      defaultValue={0}
                      name="application-fees"
                      id="application-fees"
                      autoComplete="application-fees"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="LowestPrice"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Highest
                    </label>
                    <input
                      onChange={(e) => {}}
                      type="number"
                      name="application-fees"
                      defaultValue={1000000}
                      id="application-fees"
                      autoComplete="application-fees"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="pb-2">Tuition fees</div>
                <div className="flex space-x-4">
                  <div className="">
                    <label
                      htmlFor="LowestPrice"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Lowest
                    </label>
                    <input
                      onChange={(e) => {}}
                      type="number"
                      defaultValue={0}
                      name="application-fees"
                      id="application-fees"
                      autoComplete="application-fees"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="LowestPrice"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Highest
                    </label>
                    <input
                      onChange={(e) => {}}
                      type="number"
                      name="application-fees"
                      defaultValue={1000000}
                      id="application-fees"
                      autoComplete="application-fees"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4   ">
                <div className=" pb-2">Intakes</div>
                <div className="">
                  <Select
                    isMulti
                    name="country"
                    onChange={(e) => {}}
                    options={[]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <button
                className=" bg-blue-800 text-white mt-4 w-full flex justify-between items-center rounded-md px-4 py-1"
                onClick={() => setFilterModal(false)}
              >
                <div className="">Search</div>
                <div className="">
                  <AiOutlineArrowRight className="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterModal;
