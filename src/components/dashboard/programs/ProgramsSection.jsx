import React, {useState,useEffect,useRef} from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import {GoLocation} from 'react-icons/go'
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import { getAllPrograms,searchPrograms,filterPrograms } from "../../../data/api/authenticatedRequests";
import PageLoader  from "../../utils/PageLoader";
import Spinner from "../../utils/Spinner";
import { Link } from "react-router-dom";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useQuery } from "react-query";
import { useInView } from 'react-intersection-observer';
import ProgramCard from "./ProgramCard";
import CardLoader from "../../utils/CardLoader";
import { searchStore,filterStore,programsStore } from "../../../stores/index";
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
  const tableRef=useRef(null);
  const [loading,setLoading]=useState();
  const [loadingMore,setLoadingMore]=useState();
  const [page, setPage] = useState(1);
  const [count,setCount]=useState()
  const search = searchStore((state) => state.search);
  const filter = filterStore((state) => state.filter);
  // const programs = programsStore((state) => state.programs);
  // const setPrograms = programsStore((state) => state.storePrograms);
  const [programs,setPrograms]=useState()
  const [items, setItems] = useState([
    "Bachelors",
    "Doctorate",
    "Masters",
    "Diploma",
  ]);
  const getPrograms=async ()=>{
  
    if(search){
      setLoading(true);
      const res = await searchPrograms({query:search});
      console.log(res)
      setLoading(false);
     return  setPrograms(res.data)
      
    }
    if(filter){
      setLoading(true);
      const res = await filterPrograms(filter);
       
      setLoading(false);
     return  setPrograms(res.data) 
    }
else{

  if(programs?.length>0){
    setLoadingMore(true);
    const res = await getAllPrograms(page);
    console.log(page)
    setPrograms((programs)=>[...programs,...res.data.programmes])
    
  }
  else{
    setLoading(true);
    const res = await getAllPrograms(page);
    setCount(res.data.count)
    console.log('hello')
    setPrograms((programs)=>[...res.data.programmes])
  }
  
  setLoadingMore(false)
  setLoading(false);
}
setLoadingMore(false)
return setLoading(false);
      
 
}

useEffect(()=>{
  getPrograms()
},[page,search,filter])
// const {
//   isLoading,
//   isError,
//   error,
//   data,
//   isFetching,
//   isPreviousData
// } = useQuery(['programmes', page], () => getPrograms(), { keepPreviousData: true });

  return (
    <div className="">
      <div className=" flex justify-between items-center mb-2">
        <div className="  text-[#184061]">
          {/* {programs?.length} Programs Available */}
        </div>
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
{/* {isPreviousData&&data?.data?.programmes?.map((program) => (
        <ProgramCard program={program} />
        ))} */}
         {!loading&&programs&&
         <div className="">
         <div className="grid grid-cols-10 gap-4">
       {  programs?.map((program) => (
        <ProgramCard program={program} />
        ))||programs?.map((program) => (
          <ProgramCard program={program} />
          ))
        
        }
        </div>
        <div className=" w-full flex items-center justify-between  mb-10" >
       <div className=""> {page*10} of {count} programs</div>
      {!filter&&!search&& <div className="flex items-center">
        {/* <div className="bg-blue-600 items-center px-2.5 flex rounded-md text-white cursor-pointer  py-1  mr-2" onClick={()=>setPage(page=>page>1?page-1:page)}>
        <AiOutlineLeft className="  "/>
        <div className=""> Prev</div>
         
          
          </div> */}
          <div className=" bg-blue-600 px-2 rounded-md flex items-center cursor-pointer text-white  py-1 ml-2" onClick={()=>setPage(page=>page+1)}>
        <div className="">{loadingMore?<Spinner/>:'Show more'}</div>
         {!loadingMore&& <AiOutlineRight className=" "/>}
        
          
        </div>
        </div>}
          </div>
        </div>
        ||
        <div className="grid grid-cols-10 gap-4">
        <CardLoader />
        </div>
        }
      
    </div>
    {!loading&&programs&& 

      
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
                    programs?.programmes?.map((program) => (
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
            
              
              }
    </div>
  );
};
