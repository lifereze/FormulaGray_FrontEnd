import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { intakes } from "../../data/data";
function ProgramFilter() {
  const countries = useMemo(() => countryList().getData(), []);
  return (
    <div className=" w-full text-left border-b pb-6 pt-10 border-gray-500 ">
      <div className=" text-blue-500 text-left text-lg pb-4  ">
        Program Filters
      </div>
      <div className="  ">
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

      <div className="pt-4   ">
        <div className=" pb-2">Intakes</div>
        <div className="">
          <Select
            isMulti
            name="country"
            onChange={(e) => {}}
            options={intakes}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
      <div className="pt-4   ">
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
      <div className="flex flex-row-reverse">
        <div className=" bg-blue-700 rounded-lg mt-4 cursor-pointer px-3 py-2 text-white">
          Apply Filters
        </div>
      </div>
    </div>
  );
}

export default ProgramFilter;
