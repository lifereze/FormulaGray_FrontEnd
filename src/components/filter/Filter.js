import React from "react";
import StudentFilter from "./StudentFilter";
import SchoolFilter from "./SchoolFilter";
import ProgramFilter from "./ProgramFilter";
function Filter() {
  return (
    <div className="pr-8 text-gray-400 ">
      <StudentFilter />
      <SchoolFilter />
      <ProgramFilter />
    </div>
  );
}

export default Filter;
