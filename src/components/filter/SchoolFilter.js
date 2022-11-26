import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { education } from "../../data/data";
function SchoolFilter() {
  const countries = useMemo(() => countryList().getData(), []);
  return (
    <div className=" w-full text-left border-b pb-6 pt-10 border-gray-500 ">
      <div className=" text-blue-500 text-left text-lg pb-4  ">
        School Filters
      </div>
      <div className="  ">
        <div className=" pb-2">Countries</div>
        <div className="">
          <Select
            isMulti
            name="country"
            onChange={(e) => {}}
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
      <div className="pt-4   ">
        <div className=" pb-2">Provinces / States</div>
        <div className="">
          <Select
            isMulti
            name="country"
            onChange={(e) => {}}
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
      <div className="pt-4   ">
        <div className=" pb-2">Campus City</div>
        <div className="">
          <Select
            isMulti
            name="country"
            onChange={(e) => {}}
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
      <div className="pt-4   ">
        <div className=" pb-2">Schools</div>
        <div className="">
          <Select
            isMulti
            name="country"
            onChange={(e) => {}}
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

      <div className="flex flex-row-reverse">
        <div className=" bg-blue-700 rounded-lg mt-4 cursor-pointer px-3 py-2 text-white">
          Apply Filters
        </div>
      </div>
    </div>
  );
}

export default SchoolFilter;
