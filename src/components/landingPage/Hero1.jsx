import React,{useState} from "react";
import SchoolDetails from "../modals/SchoolDetails";
import {IoSchool} from 'react-icons/io5'
import {FaSchool} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
export const Hero1 = () => {
  const [students,setStudents]=useState(false)
  const [schoolUpload,setSchoolUpload]=useState(false)
  const [agents,setAgents]=useState(false)
  const [institutions,setInstitutions]=useState(false)
  return (
    <div className="flex mt-20 justify-center">
      <div className="flex flex-col md:flex-row  md:flex-wrap md:w-10/12 text-lg">
        <div className="flex  px-2  md:w-1/3">
          <div className="flex flex-col space-y-10 items-center  shadow p-4 m-3 bg-[#DBDEFF] rounded-3xl ">
            <div className=" rounded-full p-6 bg-[#5956E9]">
           <IoSchool className=" text-5xl md:text-7xl text-gray-100"/>
            </div>
            <div className=" bg-white rounded-xl p-2">
            <div className="font-semibold text-2xl text-left pb-2">Students</div>
            <div className={!students?"line-clamp-5 text-md text-gray-500":' text-md'}>
              <p>The journey of selecting, applying and transitioning to an institution abroad can be overwhelming. We have created an intuitive, user-friendly platform to make this process very simple for our students.</p>
              <p>We are committed to supporting you through this journey from start to finish. We provide over 100,000 programmes from a network of universities across over 6 countries. Our team of experts are available to walk you through each process; course selection, application, visa processing, etc</p>
              <p>We connect you to quality education, globally.
</p>
<a href="/signin" className="text-blue-500 hover:underline">Start your journey today</a>
            </div>
            <div>
           {  !students&& <button
                type="button" onClick={()=>setStudents(true)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5   text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Show more
              </button>||<button
                type="button" onClick={()=>setStudents(false)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5   text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               Show less
              </button>}
            </div>
            </div>
           
         
          </div>
        </div>
        <div className="flex  px-2  md:w-1/3">
          <div className="flex flex-col space-y-10 items-center  shadow p-4 m-3 bg-[#DBF8FF]  rounded-3xl ">
            <div className=" rounded-full p-6 bg-[#5956E9]">
           <HiOutlineUsers className=" text-5xl md:text-7xl text-white"/>
            </div>
            <div className=" bg-white rounded-xl p-2">
            <div className="font-semibold text-2xl text-left pb-2">Agents</div>
            <div className={!agents?"line-clamp-5 text-md text-gray-500":' text-md'}>
            <p>We have partnered with thousands of agents over the last decade, providing a platform to expand their reach and grow their businesses. We offer a fully-functional search feature, an easy-to-use interface and streamlined processes to allow you meet your business needs with easy to follow steps.</p>
            <p>Our objective is to collaborate with you as you support your students through the process of making the right choices in order to fulfill their education goals and life aspirations. We aim to convert applications within 72 hours – the best within the industry.</p>
            <p>We want you to consider us not just as a platform for submitting applications but a committed partner for growth.</p>
            <a href="/signin" className="text-blue-500 hover:underline">Become a part of our community today.</a>
            </div>
            <div>
            {  !agents&& <button
                type="button" onClick={()=>setAgents(true)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5   text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Show more
              </button>||<button
                type="button" onClick={()=>setAgents(false)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5   text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               Show less
              </button>}
            </div>
            </div>
           
         
          </div>
        </div>
        <div className="flex  px-2  md:w-1/3">
          <div className="flex flex-col space-y-10 items-center  shadow p-4 m-3 bg-[#FFEDDC] rounded-3xl ">
            <div className=" rounded-full p-6 bg-[#5956E9]">
           <FaSchool className=" text-5xl md:text-7xl text-white"/>
            </div>
            <div className=" bg-white rounded-xl p-2">
            <div className="font-semibold text-2xl text-left pb-2">Institutions</div>
            <div className={!institutions?"line-clamp-5 text-md text-gray-500":' text-md'}>
            <p>We have partnered with thousands of agents over the last decade, providing a platform to expand their reach and grow their businesses. We offer a fully-functional search feature, an easy-to-use interface and streamlined processes to allow you meet your business needs with easy to follow steps.</p>
            <p>Our objective is to collaborate with you as you support your students through the process of making the right choices in order to fulfill their education goals and life aspirations. We aim to convert applications within 72 hours – the best within the industry.</p>
            <p>We want you to consider us not just as a platform for submitting applications but a committed partner for growth.</p>
            <a href="/signin" className="text-blue-500 hover:underline">Become a part of our community today.</a>
            </div>
            <div>
            {  !institutions&& <button
                type="button" onClick={()=>setInstitutions(true)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5   text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Show more
              </button>||<button
                type="button" onClick={()=>setInstitutions(false)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5   text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               Show less
              </button>}
            </div>
            </div>
           
         
          </div>
        </div>
   
      </div>
      {schoolUpload&&<SchoolDetails setSchoolUpload={setSchoolUpload}/>}
    </div>
  );
};
