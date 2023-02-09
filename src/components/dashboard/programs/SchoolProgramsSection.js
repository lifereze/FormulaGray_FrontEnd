import React, { useState, useEffect, useRef } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { GoLocation } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  getSchoolPrograms,
  searchPrograms,
  filterPrograms,
} from "../../../data/api/authenticatedRequests";
import PageLoader from "../../utils/PageLoader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ProgramCard from "./ProgramCard";
import { searchStore, filterStore } from "../../../stores/index";
const programss = [
  {
    name: "Design, Surveying and Planning for Construction",
    campus: "University of Toronto",
    initials: "UOT",
    school: "Rotman School of Management",
    country: "Canada",
    location: "Ellesmere Port, North West, GB",
    href: "#",
    duration: "1 year",
    fees: "$14,250.00",
    applicationFee: "$0.00",
    commission: "$1,710.00",
    bgColor: "bg-pink-600",
  },
  {
    name: "Design, Surveying and Planning for Construction",
    campus: "University of Toronto",
    initials: "UOT",
    school: "Rotman School of Management",
    country: "Canada",
    location: "Ellesmere Port, North West, GB",
    href: "#",
    duration: "1 year",
    fees: "$14,250.00",
    applicationFee: "$0.00",
    commission: "$1,710.00",
    bgColor: "bg-purple-600",
  },
  {
    name: "Design, Surveying and Planning for Construction",
    campus: "University of Toronto",
    initials: "UOT",
    school: "Rotman School of Management",
    country: "Canada",
    location: "Ellesmere Port, North West, GB",
    href: "#",
    duration: "1 year",
    fees: "$14,250.00",
    applicationFee: "$0.00",
    commission: "$1,710.00",
    bgColor: "bg-yellow-500",
  },
  {
    name: "Design, Surveying and Planning for Construction",
    campus: "University of Toronto",
    initials: "UOT",
    school: "Rotman School of Management",
    country: "Canada",
    location: "Ellesmere Port, North West, GB",
    href: "#",
    duration: "1 year",
    fees: "$14,250.00",
    applicationFee: "$0.00",
    commission: "$1,710.00",
    bgColor: "bg-green-500",
  },
  {
    name: "Design, Surveying and Planning for Construction",
    campus: "University of Toronto",
    initials: "UOT",
    school: "Rotman School of Management",
    country: "Canada",
    location: "Ellesmere Port, North West, GB",
    href: "#",
    duration: "1 year",
    fees: "$14,250.00",
    applicationFee: "$0.00",
    commission: "$1,710.00",
    bgColor: "bg-pink-600",
  },
  {
    name: "Design, Surveying and Planning for Construction",
    campus: "University of Toronto",
    initials: "UOT",
    school: "Rotman School of Management",
    country: "Canada",
    location: "Ellesmere Port, North West, GB",
    href: "#",
    duration: "1 year",
    fees: "$14,250.00",
    applicationFee: "$0.00",
    commission: "$1,710.00",
    bgColor: "bg-purple-600",
  },
  {
    name: "Design, Surveying and Planning for Construction",
    campus: "University of Toronto",
    initials: "UOT",
    school: "Rotman School of Management",
    country: "Canada",
    location: "Ellesmere Port, North West, GB",
    href: "#",
    duration: "1 year",
    fees: "$14,250.00",
    applicationFee: "$0.00",
    commission: "$1,710.00",
    bgColor: "bg-yellow-500",
  },
  {
    name: "Design, Surveying and Planning for Construction",
    campus: "University of Toronto",
    initials: "UOT",
    school: "Rotman School of Management",
    country: "Canada",
    location: "Ellesmere Port, North West, GB",
    href: "#",
    duration: "1 year",
    fees: "$14,250.00",
    applicationFee: "$0.00",
    commission: "$1,710.00",
    bgColor: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const SchoolProgramsSection = () => {
  const tableRef = useRef(null);
  const { schoolId } = useParams();
  const [programs, setPrograms] = useState();
  const [loading, setLoading] = useState();
  const search = searchStore((state) => state.search);
  const filter = filterStore((state) => state.filter);
  const [items, setItems] = useState([
    "Bachelors",
    "Doctorate",
    "Masters",
    "Diploma",
  ]);

  useEffect(() => {
    const getPrograms = async () => {
      setLoading(true);
      if (search) {
        const res = await searchPrograms({ query: search });
        console.log(res);
        setLoading(false);
        return setPrograms(res.data);
      }
      if (filter) {
        const res = await filterPrograms(filter);
        console.log(res);
        setLoading(false);
        return setPrograms(res.data);
      } else {
        const res = await getSchoolPrograms(schoolId);
        setPrograms(res.data);
        setLoading(false);
        console.log(res);
      }
    };
    getPrograms();
  }, [search, filter]);
  return (
    <div className="">
      <div className=" flex flex-row-reverse mb-2">
        <div>
          <DownloadTableExcel
            filename="programs table"
            sheet="programs"
            currentTableRef={tableRef.current}
          >
            <div className="bg-white shadow-md rounded-md cursor-pointer px-2 py-1">
              Generate report
            </div>
          </DownloadTableExcel>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4">
        {(!loading &&
          programs &&
          programs.map((program) => <ProgramCard program={program} />)) || (
          <PageLoader />
        )}
      </div>
      {!loading && programs && (
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
            {!loading &&
              programs &&
              programs.map((program) => (
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
