import React,{useEffect,useState} from "react";
import { Navbar } from "../Navbar";
import { Table } from "./Table";
import SideBar from "../SideBar";
import Banner from "../Banner";
import { getAllStudents } from "../../../data/api/authenticatedRequests";
import PageLoader  from "../../utils/PageLoader";
export const Students = () => {
  const [students,setStudents]=useState();
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
const getStudents=async ()=>{
try {
  setLoading(true)
  const res= await getAllStudents();
  setStudents(res.data.students)
  setLoading(false)
console.log(res.data.students);

} catch (error) {
 console.log(error) 
}


}
getStudents();
  },[])
  return (
    <div className=" grid grid-cols-12">

    <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
    <SideBar />
    </div>
    <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <Banner />
        {!loading &&<div className=" flex-grow">
          <div className="ml-2 ">
              <section
                aria-labelledby="activity-title"
                className="mt-2 xl:mt-4"
              >
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className=" text-center">
                      <div>
                       { students&& <Table
                   
                          students={students}
                       
                          buttonLink="/addStudent"
                     
                        />}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </div>|| <PageLoader/>}
      </div>
    </div>
  );
};
