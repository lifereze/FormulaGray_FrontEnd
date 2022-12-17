import React, {useState,useEffect} from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import {GoLocation} from 'react-icons/go'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { getAllPrograms } from "../../../data/api/authenticatedRequests";
import PageLoader  from "../../utils/PageLoader";
import { Link } from "react-router-dom";
import ProgramCard from "./ProgramCard";
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

export const ProgramsSection = () => {
  const [programs,setPrograms]=useState();
  const [loading,setLoading]=useState();
  useEffect(()=>{
const getPrograms=async ()=>{
  setLoading(true);
  const res = await getAllPrograms();
  setLoading(false);
  setPrograms(res.data)
  console.log(res)
}
getPrograms();
  },[])
  return (
    <div className="grid grid-cols-10 gap-4">
  
        {!loading&&programs&&programs.map((program) => (
        <ProgramCard program={program} />
        ))||<PageLoader />}
      
    </div>
  );
};
