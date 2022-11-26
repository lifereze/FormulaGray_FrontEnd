import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import {GoLocation} from 'react-icons/go'
import {AiOutlineArrowRight} from 'react-icons/ai'
const projects = [
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

export const ProgramsSection = () => {
  return (
    <div>
  
        {projects.map((project) => (
          <div className="p-2 border text-left mb-2 border-gray-500 rounded-lg ">
                <div className=" text-blue-600 font-semibold">{project.name}</div>
            <div className=" flex  justify-between items-center py-4">
            <div className="">
            <div className=" ">{project.campus}</div>
        
            </div>
            <div className="flex space-x-2  items-center">
              <div className=" text-blue-600">
                <GoLocation className="" />
                </div>
              <div className="">
              {project.location}
              </div>
          </div>
        
          </div>
          <div className=" flex px-4 justify-between w-3/4">
<div className="">
  <div className=" text-gray-500">Tuition</div>
  <div className="">
    {project.fees}
  </div>
  </div>
  <div className="">
  <div className="text-gray-500">Application fees</div>
  <div className="">
    {project.applicationFee}
  </div>
  </div>
          </div>
          <div className=" flex space-x-16 items-center pt-4">
<div className=" p-2 border cursor-pointer border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white text-blue-600">
Select Student
</div>
<div className=" flex  items-center space-x-2 cursor-pointer text-blue-600">
  <div className="">
    See Program Details
    </div>
<div className="">
  <AiOutlineArrowRight className=" text-xl" />
  </div>
</div>
            </div>
          </div>
        ))}
      
    </div>
  );
};
