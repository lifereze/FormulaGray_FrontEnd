import React from 'react'
import Logo from "../../../constants/images/formulargray_03.png";
import Campus1 from "../../../constants/images/uni.jpg";
import Campus2 from "../../../constants/images/moi.jpg";
import SideBar from "../SideBar";
import Banner from "../Banner";
import ProgramsCard from '../programs/ProgramsCard';
import {FaFlagUsa,FaDonate,FaRegCalendarAlt} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {AiOutlineHome,AiOutlineDollar} from 'react-icons/ai'
import {GrDocumentText} from 'react-icons/gr'
import {BsCheck2} from 'react-icons/bs'
import {MdOutlineSchool} from 'react-icons/md'
import {GiOpenBook} from 'react-icons/gi'
function School() {
  return (
    <div className=" grid grid-cols-12 ">

    <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
    <SideBar />
    </div>
    <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <Banner />
          <div className=' flex space-x-6 items-center pt-8 pb-8 px-20'>
            <img src={Logo} className=" w-40 object-cover h-20" />
            <div className=''>
            <div className=' text-4xl font-semibold text-white'>Cheshire College South and West - Ellesmere Port</div>
            <div className=' flex space-x-2 text-sm pt-2'>
                <div className='flex items-center space-x-1 border-r text-gray-400 pr-2 border-gray-500'>
                    <FaFlagUsa className=' text-base mt-1'/>
<div className=''>Ellesmere Port, North West, GB</div>
                </div>
                <div className='flex items-center space-x-1  text-gray-400  '>
                    <IoLocationSharp className=' text-lg'/>
<div className=''>Off Sutton Way</div>
                </div>
            </div>
            </div>
          </div>
          <div className='  grid grid-rows-2 h-80 px-10 grid-flow-col gap-4 '>
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
          </div>
          <div className=' flex w-full space-x-10 mt-10 px-10 pb-10 bg-blue-100'>
<div className=' w-2/3 px-2'>
<div className=' flex items-center py-4 space-x-4'>
    <div className=' p-2 bg-blue-200 rounded-full'>
<AiOutlineHome className=' text-blue-600 text-2xl' />
</div>
<div className=' text-4xl font-semibold'>About</div>
</div>
<div className=' p-4 bg-white rounded-lg'>
Cheshire College – South & West offers exciting opportunities for their 11,000 learners and 
1,000 Apprentices to access high-quality teaching and learning at their modern Campuses in Crewe,
 Ellesmere Port and Chester. They aim to provide their learners with the skills, experience and 
 qualifications that will prepare them for their future career or higher-level study at the College
  or university. They encourage learners to become confident individuals who will
 make valuable contributions to businesses and the local economy in their future careers.
</div>
<div className=' flex items-center py-4 space-x-4'>
    <div className=' p-2 bg-blue-200 rounded-full'>
<GrDocumentText className=' text-blue-600 text-2xl' />
</div>
<div className=' text-4xl font-semibold'>Features</div>
</div>
<div className=' py-4 bg-white rounded-lg'>
<div className='flex space-x-3 px-6 py-4 items-center border-b border-gray-400'>
    <div className=' p-2 rounded-full bg-green-200 text-green-800 '>
        <BsCheck2 className=' font-semibold text-lg' />
    </div>
    <div className=' text-lg font-semibold'>
        Co-op/Internship participation
    </div>

</div>
<div className='flex space-x-3 px-6 py-4 items-center border-b border-gray-400'>
    <div className=' p-2 rounded-full bg-green-200 text-green-800 '>
        <BsCheck2 className=' font-semibold text-lg' />
    </div>
    <div className=' text-lg font-semibold'>
        Work While Studying
    </div>

</div>
<div className='flex space-x-3 px-6 py-4 items-center border-b border-gray-400'>
    <div className=' p-2 rounded-full bg-green-200 text-green-800 '>
        <BsCheck2 className=' font-semibold text-lg' />
    </div>
    <div className=' text-lg font-semibold'>
        Conditional Offer letter
    </div>

</div>
<div className='flex space-x-3 px-6 py-4 items-center border-b border-gray-400'>
    <div className=' p-2 rounded-full bg-green-200 text-green-800 '>
        <BsCheck2 className=' font-semibold text-lg' />
    </div>
    <div className=' text-lg font-semibold'>
       Accomoditions
    </div>

</div>
</div>
<div className=' flex justify-between items-center'>
<div className=' flex items-center py-4 space-x-4'>
    <div className=' p-2 bg-blue-200 rounded-full'>
<GiOpenBook className=' text-blue-600 text-2xl' />
</div>
<div className=' text-4xl font-semibold'>Programs</div>
</div>
<div className=' mr-4  text-blue-600 p-2 cursor-pointer'>
    <a href='/programs'>
    View All
    </a>
</div>
</div>
<div className=' space-y-6'>
    <ProgramsCard 
    name= "Design, Surveying and Planning for Construction"
    campus= "University of Toronto"
    location= "Ellesmere Port"
    intake='July 2023'
    deadline='September 2023'
    fees= "$14,250.00"
    applicationFees='free'
    commision="$250.00"
    />
    <ProgramsCard 
    name= "Design, Surveying and Planning for Construction"
    campus= "University of Toronto"
    location= "Ellesmere Port"
    intake='July 2023'
    deadline='September 2023'
    fees= "$14,250.00"
    applicationFees='free'
    commision="$250.00"
    />
    <ProgramsCard 
    name= "Design, Surveying and Planning for Construction"
    campus= "University of Toronto"
    location= "Ellesmere Port"
    intake='July 2023'
    deadline='September 2023'
    fees= "$14,250.00"
    applicationFees='free'
    commision="$250.00"
    />
</div>
</div>
<div className='w-1/3'>
   <div className=' py-2 text-lg'> Institution details</div>
   <div className=' bg-white text-gray-500 space-y-4 rounded-lg p-4'>
<div className=' flex justify-between items-center'>
    <div className=''>Founded</div>
    <div className=''>2017</div>
</div>
<div className=' flex justify-between items-center'>
    <div className=''>School ID</div>
    <div className=''>2007</div>
</div>
<div className=' flex justify-between items-center'>
    <div className=''>Provider ID number
</div>
    <div className=''>10005972</div>
</div>
<div className=' flex justify-between items-center'>
    <div className=''>Institution type
</div>
    <div className=''>Public</div>
</div>
   </div>
   <div className=' py-2 text-lg mt-4'> Cost and Duration</div>
   <div className=' bg-white  space-y-4 rounded-lg p-4'>
<div className=' flex items-center space-x-6'>
    <div className=' text-blue-500'>
        <FaDonate className=' text-4xl' />
    </div>
<div className=''>
    <div className=' text-lg'>£ 0.00 GPB </div>
    <div className=' text-sm text-gray-500'>Application fee</div>
</div>
</div>
<div className=' flex items-center space-x-6'>
    <div className=' text-blue-500'>
        <FaRegCalendarAlt className=' text-4xl' />
    </div>
<div className=''>
    <div className=' text-lg'>No Data Available  </div>
    <div className=' text-sm text-gray-500'>Average graduate program</div>
</div>
</div>
<div className=' flex items-center space-x-6'>
    <div className=' text-blue-500'>
        <FaRegCalendarAlt className=' text-4xl' />
    </div>
<div className=''>
    <div className=' text-lg'>2 Years </div>
    <div className=' text-sm text-gray-500'>Average undergraduate program</div>
</div>
</div>
<div className=' flex items-center space-x-6'>
    <div className=' text-blue-500'>
        <AiOutlineDollar className=' text-4xl' />
    </div>
<div className=''>
    <div className=' text-lg'>£9,207.00 GBP / Year </div>
    <div className=' text-sm text-gray-500'>Cost of Living</div>
</div>
</div>
<div className=' flex items-center space-x-6'>
    <div className=' text-blue-500'>
        <MdOutlineSchool className=' text-4xl' />
    </div>
<div className=''>
    <div className=' text-lg'>£11,383.33 GBP / Year </div>
    <div className=' text-sm text-gray-500'>Tuition</div>
</div>
</div>
    </div>
    <div className='py-2 text-lg mt-4'>Average Time to Receive Letter of Acceptance</div>
    <div className=' bg-white text-gray-500 space-y-4 rounded-lg p-4'>
<div className=' flex justify-between items-center'>
    <div className=''>January - April</div>
    <div className=''>N/A</div>
</div>
<div className=' flex justify-between items-center'>
    <div className=''>May - August</div>
    <div className=''>N/A</div>
</div>
<div className=' flex justify-between items-center'>
    <div className=''>September - December
</div>
    <div className=''>N/A</div>
</div>

   </div>
   <div className='py-2 text-lg mt-4'>Top Disciplines</div>
   <div className=' bg-white text-gray-500 space-y-4 rounded-lg p-4'>
   <div className=''>Engineering and Technology</div>
   <div className=''>Business, Management and Economics</div>
   <div className=''>Arts</div>
   <div className=''>Education</div>
   </div>
</div>
          </div>
          </div>
          </div>
  )
}

export default School
