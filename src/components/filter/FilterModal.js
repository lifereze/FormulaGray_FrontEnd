import React, { useState, useEffect, useMemo } from "react";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { userStore, filterStore } from "../../stores";
import countryList from "react-select-country-list";
import Select from "react-select";
function FilterModal({ setFilterModal }) {
  const storeFilter = filterStore((state) => state.storeFilter);
  const user = userStore((state) => state.user);
  const countries = useMemo(() => countryList().getData(), []);
  const [level, setLevel] = useState("");
  const [intakes, setIntakes] = useState("");
  const [applicationFeesFloor, setApplicationFeesFloor] = useState(0);
  const [applicationFeesCeil, setApplicationFeesCeil] = useState(10000);
  const [tuitionFeesFloor, settuitionFeesFloor] = useState(0);
  const [tuitionFeesCeil, settuitionFeesCeil] = useState(10000);

  const onSubmitHandler = () => {
    storeFilter({
      level: level,
      intakes: intakes,
      applicationFeesFloor: applicationFeesFloor,
      applicationFeesCeil: applicationFeesCeil,
      tuitionFeesFloor: tuitionFeesFloor,
      tuitionFeesCeil: tuitionFeesCeil,
    });
    setFilterModal(false);
  };

  return (
    <>
      <div
        className="fixed w-full inset-0 z-100 overflow-hidden flex justify-center items-end md:items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.6)" }}
      >
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
              <div className=" pt-4 ">
                <div className=" pb-2">Program Levels</div>
                <div className="">
                  <Select
                    name="levels"
                    onChange={(e) => setLevel(e.value)}
                    options={[
                      { value: "highSchool", label: "High School" },
                      { value: "diploma", label: "Diploma" },
                      { value: "bachelor", label: "Bachelor" },
                      { value: "masters", label: "Masters" },
                      { value: "phd", label: "Doctoral/PHD" },
                    ]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className=" pt-4 ">
                <div className=" pb-2">Program Intakes</div>
                <div className="">
                  <Select
                    name="intakes"
                    onChange={(e) => setIntakes(e.value)}
                    options={[
                      { value: "summer", label: "Summer" },
                      { value: "winter", label: "Winter" },
                      { value: "autumn", label: "Autumn" },
                      { value: "spring", label: "Spring" },
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
                      onChange={(e) => setApplicationFeesFloor(e.target.value)}
                      type="number"
                      value={applicationFeesFloor}
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
                      onChange={(e) => setApplicationFeesCeil(e.target.value)}
                      type="number"
                      name="application-fees"
                      value={applicationFeesCeil}
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
                      onChange={(e) => settuitionFeesFloor(e.target.value)}
                      type="number"
                      value={tuitionFeesFloor}
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
                      onChange={(e) => settuitionFeesCeil(e.target.value)}
                      type="number"
                      name="application-fees"
                      value={tuitionFeesCeil}
                      id="application-fees"
                      autoComplete="application-fees"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <button
                className=" bg-blue-800 text-white mt-4 w-full flex justify-between items-center rounded-md px-4 py-1"
                onClick={() => onSubmitHandler()}
              >
                <div className="">Apply</div>
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
