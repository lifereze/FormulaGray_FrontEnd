import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { education } from "../../data/data";
function StudentFilter() {
  const countries = useMemo(() => countryList().getData(), []);
  return (
    <div className=" w-full text-left border-b pb-6 border-gray-500 ">
      <div className=" text-white text-left text-lg pb-4  ">Eligibility</div>
      <div className="  ">
        <div className=" pb-2">Select Student</div>
        <div className="">
          <Select
            isMulti
            name="student"
            onChange={(e) => {}}
            options={[]}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
      <div className=" pt-4  ">
        <div className=" pb-2">Do you have a valid Study Permit / Visa?</div>
        <div className="">
          <Select
            isMulti
            name="visa"
            onChange={(e) => {}}
            options={[
              { value: "", label: "I don't have this" },
              { value: "USA F1 Visa", label: "USA F1 Visa" },
              {
                value: "Canadian Study Permit or Visitor Visa",
                label: "Canadian Study Permit or Visitor Visa",
              },
              {
                value: "UK Student Visa (Tier 4) or Short Term Study Visa",
                label: "UK Student Visa (Tier 4) or Short Term Study Visa",
              },
              {
                value: "Australian Student Visa",
                label: "Australian Student Visa",
              },
              {
                value: "Irish Stamp 2",
                label: "Irish Stamp 2",
              },
            ]}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
      <div className=" pt-4">
        <div className=" pb-2">Nationality</div>
        <div className=" ">
          <Select
            isMulti
            onChange={(e) => {}}
            name="country"
            options={countries}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
      <div className=" pt-4  ">
        <div className=" pb-2">Education Level</div>
        <div className="">
          <Select
            isMulti
            name="education"
            onChange={(e) => {}}
            options={education}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <div className=" bg-blue-700 rounded-lg mt-4 cursor-pointer px-3 py-2 text-white">
          Apply Filters
        </div>
      </div>
    </div>
  );
}

export default StudentFilter;
