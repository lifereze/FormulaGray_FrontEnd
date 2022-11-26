import React from 'react'
import Logo from "../../../constants/images/formulargray_03.png";
import Campus1 from "../../../constants/images/uni.jpg";
import Campus2 from "../../../constants/images/moi.jpg";
import SideBar from "../SideBar";
import Banner from "../Banner";
import {FaFlagUsa} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {AiOutlineHome} from 'react-icons/ai'
import {GrDocumentText} from 'react-icons/gr'
import {BsCheck2} from 'react-icons/bs'
function School() {
  return (
    <div className=" grid grid-cols-12">

    <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
    <SideBar />
    </div>
    <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <Banner />
          <div className=' flex space-x-6 items-center pt-8 pb-8 px-20'>
            <img src={Logo} className=" w-40 object-cover h-20" />
            <div className=''>
            <div className=' text-4xl font-semibold'>Cheshire College South and West - Ellesmere Port</div>
            <div className=' flex space-x-2 text-sm pt-2'>
                <div className='flex items-center space-x-1 border-r text-gray-500 pr-2 border-gray-500'>
                    <FaFlagUsa className=' text-base mt-1'/>
<div className=''>Ellesmere Port, North West, GB</div>
                </div>
                <div className='flex items-center space-x-1  text-gray-500  '>
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
          <div className=' flex w-full mt-10 px-10 bg-blue-100'>
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
        Work While Studying
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
        Work While Studying
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
</div>
</div>
          </div>
          </div>
          </div>
  )
}

export default School
