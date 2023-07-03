import React, { useState, useRef } from "react";
import { useGetSearchedProgramsQuery } from "./programsApiSlice";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ProgramCard from "./ProgramCard";
import CardLoader from "../../../utils/CardLoader";
import { searchStore } from "../../../../stores/index";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const SearchedProgramsSection = () => {
  const tableRef = useRef(null);
  const search = searchStore((state) => state.search);
  const [items, setItems] = useState([
    "Bachelors",
    "Doctorate",
    "Masters",
    "Diploma",
  ]);
  const { data, isLoading, isSuccess, isFetching, refetch, isError, error } =
    useGetSearchedProgramsQuery({
      query: search,
    });

  return (
    <div className="">
      <div className=" flex justify-between items-center mb-2">
        <div className="  text-[#184061]"></div>
        <div>
          <DownloadTableExcel
            filename="Admin programs table"
            sheet="Adminprograms"
            currentTableRef={tableRef.current}
          >
            <div className="bg-white shadow-md rounded-md text-[#184061] cursor-pointer px-2 py-1.5 ">
              Generate report
            </div>
          </DownloadTableExcel>
        </div>
      </div>
      <div className=" ">
        {(!isLoading && !isFetching && data && (
          <div className="">
            <div className="grid grid-cols-10 gap-4">
              {data?.map((program) => (
                <ProgramCard program={program} />
              ))}
            </div>
            <div className=" w-full flex items-center justify-between  mb-10"></div>
          </div>
        )) || (
          <div className="grid grid-cols-10 gap-4">
            <CardLoader />
          </div>
        )}
      </div>
      {!isLoading && !isFetching && data && (
        <table
          className="min-w-full hidden table-fixed divide-y divide-gray-300"
          ref={tableRef}
        >
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Name
              </th>
              <th
                scope="col"
                className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                School
              </th>
              <th
                scope="col"
                className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                Tuition Fee
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Application Fee
              </th>

              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Level
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {!isLoading &&
              data &&
              data?.map((program) => (
                <tr key={program.email}>
                  <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                    {program?.title}
                  </td>
                  <td
                    className={classNames(
                      "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                      "text-gray-900"
                    )}
                  >
                    University of Califonia
                  </td>
                  <td
                    className={classNames(
                      "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                      "text-gray-900"
                    )}
                  >
                    {program?.tuitionFees}
                  </td>
                  <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                    {program?.applicationFees}
                  </td>
                  <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                    {items[Math.floor(Math.random() * items.length)]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
