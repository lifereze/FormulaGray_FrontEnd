import React, { useState, useEffect } from "react";
import Search from "../../inputs/Search";
import { searchStore } from "../../../stores/index";
import Filter from "../../filter/Filter";
import FilterModal from "../../filter/FilterModal";
import { MdFilterListAlt } from "react-icons/md";
import { AiOutlineUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { userStore } from "../../../stores";
function TopSection() {
  const [filterModal, setFilterModal] = useState(false);
  const user = userStore((state) => state.user);
  return (
    <div>
      <div className=" w-full my-4 flex justify-between">
        <div className="text-xl font-bold text-blue-500 ">Schools</div>
        <div className=" flex gap-x-4">
          <div className="">
            <Search />
          </div>

          <div
            className=" bg-white flex rounded-md gap-x-2 cursor-pointer px-4 items-center
                     "
            onClick={() => setFilterModal(true)}
          >
            <div className="">
              <MdFilterListAlt className="" />
            </div>
            <div className="">Filter</div>
          </div>
          {user && user.role == "admin" && (
            <Link
              to={"/schools/addSchool"}
              className=" bg-white flex rounded-md gap-x-2 cursor-pointer px-4 items-center
                     "
            >
              <div className="">
                <AiOutlineUpload className="" />
              </div>
              <div className="">Upload</div>
            </Link>
          )}
        </div>
      </div>
      {filterModal && <FilterModal setFilterModal={setFilterModal} />}
    </div>
  );
}

export default TopSection;
