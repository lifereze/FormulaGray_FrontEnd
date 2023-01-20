import React,{useState,useEffect} from 'react'
import Logo from "../../../constants/images/formulargray_03.png";
import Campus1 from "../../../constants/images/uni.jpg";
import Campus2 from "../../../constants/images/moi.jpg";
import SideBar from "../SideBar";
import Banner from "../Banner";
import ProgramCard from '../programs/ProgramCard';
import {FaFlagUsa,FaDonate,FaRegCalendarAlt} from 'react-icons/fa'
import {IoLocationSharp,IoSchoolSharp} from 'react-icons/io5'
import {AiOutlineHome,AiOutlineDollar,AiOutlineRead} from 'react-icons/ai'
import {GrDocumentText} from 'react-icons/gr'
import {BsCheck2} from 'react-icons/bs'
import {FaBookReader} from 'react-icons/fa'
import {GiOpenBook} from 'react-icons/gi'
import {TbWorldDownload} from 'react-icons/tb'
import { getSpecificSchool } from '../../../data/api/authenticatedRequests';
import { getSchoolPrograms } from '../../../data/api/authenticatedRequests';
import { useParams } from 'react-router-dom';
import PageLoader  from "../../utils/PageLoader";
import { Link } from "react-router-dom";
import { userStore } from "../../../stores";
import {AiOutlineUpload} from 'react-icons/ai'
function School() {
    const [loading,setLoading]=useState(false)
    const [loadingPrograms,setLoadingPrograms]=useState(false)
    const [schoolInfo,setSchoolInfo]=useState()
    const [programs,setPrograms]=useState()
    const user = userStore((state) => state.user);
    const {id}=useParams()
    useEffect(()=>{
        const getSchool=async ()=>{
            setLoading(true);
            const res=await getSpecificSchool(id);
            console.log(res);
            setSchoolInfo(res.data)
            console.log('School',res.data)
            setLoading(false)

        }
        getSchool();
    },[])
    useEffect(()=>{
        const getPrograms=async ()=>{
            setLoadingPrograms(true);
            const res=await getSchoolPrograms(id);
            console.log(res);
            setPrograms(res.data)
            setLoadingPrograms(false)

        }
        getPrograms();
    },[])
  return (
    <div className=" grid grid-cols-12 ">

    <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
    <SideBar />
    </div>
    <div className="md:col-span-10 bg-gray-300 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <Banner />
         {!loading&&schoolInfo&&<div>
       <div className='mt-0 mb-2   relative'>

        <img                 src={schoolInfo?.images[0]&&schoolInfo.images[0]||Campus1}
 style={{height:'450px'}} className=' w-full ' />
        <div className='absolute  inset-0 bg-black opacity-70'>
        <div className=' flex space-x-6 items-center flex-wrap pt-8 pb-8 px-20'>
            <img src={Logo} className=" w-40 object-cover h-20" />
            <div className=''>
            <div className=' text-4xl font-semibold text-white'>{schoolInfo.name} - {schoolInfo.city}</div>
            <div className=' flex space-x-2 text-sm pt-2'>
                <div className='flex items-center space-x-1 border-r text-gray-400 pr-2 border-gray-500'>
                    <FaFlagUsa className=' text-base mt-1'/>
<div className=''>{schoolInfo.street}</div>
                </div>
                <div className='flex items-center space-x-1  text-gray-400  '>
                    <IoLocationSharp className=' text-lg'/>
<div className=''>Off Sutton Way</div>
                </div>
            </div>
            </div>
          </div>
        </div>
       </div>
       
          {/* <div className='  grid grid-rows-2 h-80 px-10 grid-flow-col gap-4 '>
<div className=' row-span-2'>
<img src={Campus1} className=" h-full w-full rounded-lg" />
</div>
<div className=' row-span-1  '>
<img src={Campus2} className="h-full w-full rounded-lg" />
</div>
<div className=' row-span-1 '>
<img src={Campus1} className="h-full w-full rounded-lg" />
</div>
<div className=' row-span-1 '>
<img src={Campus1} className="h-full w-full rounded-lg" />
</div>
<div className=' row-span-1 '>
<img src={Campus2} className="h-full w-full rounded-lg" />
</div>
          </div> */}
          <div className='flex pt-10 justify-evenly flex-wrap gap-2'>
<div className=' flex  flex-col justify-center bg-[#E6F2E2] rounded-md py-2 px-12 shadow-lg items-center'>
    <div className=''><FaBookReader className='  text-6xl' /></div>
    <div className='font-semibold text-2xl'>{schoolInfo?.numberOfStudents?schoolInfo?.numberOfStudents:0}</div>
    <div className=' text-l '>Students</div>
 

</div>
<div className=' flex  flex-col justify-center bg-[#F9E8E8] rounded-md py-2 px-12 shadow-lg items-center'>
    <div className=''><TbWorldDownload className='  text-6xl' /></div>
    <div className='font-semibold text-black text-2xl'>{schoolInfo?.nationalities?schoolInfo?.nationalities:0}</div>
    <div className=' text-l '>Nationalities</div>
 

</div>
<div className=' flex  flex-col justify-center bg-[#F8F0E7] rounded-md py-2 px-12 shadow-lg items-center'>
    <div className=''><AiOutlineRead className='  text-6xl' /></div>
    <div className='font-semibold text-2xl'>{schoolInfo?.programmeIds?.length}</div>
    <div className=' text-l '>Programs</div>
 

</div>
{/* <div className=' flex  flex-col justify-center bg-[#EEF0F8] rounded-md py-2 px-12 shadow-lg items-center'>
    <div className=''><IoSchoolSharp className='  text-6xl' /></div>
    <div className='font-semibold text-2xl'>20</div>
    <div className=' text-l '>Schools</div>
 

</div> */}
    </div>
        <div className='  w-full space-x-10 mt-10 px-10 pb-10 bg-gray-100'>
<div className='  px-2'>
    
<div className=' flex items-center py-4 space-x-4'>
    <div className=' p-2  rounded-full'>
<AiOutlineHome className=' text-blue-600 text-2xl' />
</div>
<div className=' text-4xl font-semibold'>About</div>
</div>
<div className=' p-4 bg-white  w-full rounded-lg'>
{schoolInfo?.about}
</div>
<div className=' flex items-center py-4 space-x-4'>
    <div className=' p-2 bg-blue-200 rounded-full'>
<GrDocumentText className=' text-blue-600 text-2xl' />
</div>
<div className=' text-4xl font-semibold'>Features</div>
</div>
<div className=' py-4 bg-white rounded-lg'>
{schoolInfo?.features&&schoolInfo.features.map((feature)=>(<div className='flex space-x-3 px-6 py-4 items-center border-b border-gray-400'>
    <div className=' p-2 rounded-full bg-green-200 text-green-800 '>
        <BsCheck2 className=' font-semibold text-lg' />
    </div>
    <div className=' text-lg font-semibold'>
       {feature}
    </div>

</div>))}

</div>
<div className=' flex justify-between items-center'>
<div className=' flex items-center py-4 space-x-4'>
    <div className=' p-2 bg-blue-200 rounded-full'>
<GiOpenBook className=' text-blue-600 text-2xl' />
</div>
<div className=' text-4xl font-semibold'>Programs</div>
</div>
<div className=' w-2/3 flex items-center space-x-2'>
<div className=' mr-4  text-blue-600 p-2 cursor-pointer'>
    <a href='/programs'>
    View All
    </a>
</div>
{user&& user.role=='admin' &&<Link to={`/schools/${id}/addProgram`} className=" bg-white text-blue-600 flex rounded-md gap-x-2 cursor-pointer px-4 items-center
                     ">
                  
                      <div className="" >
<AiOutlineUpload className="" />
</div>
<div className="">
  Upload

                    </div>
                    </Link>}
</div>
</div>
<div className=' space-y-6 md:w-2/3 w-full'>
    {programs&&programs.length>0&&!loadingPrograms&&programs.map((program)=>  <ProgramCard 
    program={program}
    />)}
  
    
</div>
</div>

          </div>
          </div>||<PageLoader />}
          </div>
          </div>
  )
}

export default School
