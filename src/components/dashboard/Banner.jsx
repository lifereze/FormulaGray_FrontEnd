import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {IoNotificationsOutline} from 'react-icons/io5'
import Info from './cards/Info'
import {HiDocumentText} from 'react-icons/hi'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import {MdCancelPresentation,MdCastForEducation} from 'react-icons/md'

function Banner() {
  return (
    <div className=' w-full bg-blue-500 pb-10 px-10 text-white '>
<div className=' flex flex-row-reverse pb-10 pt-4'>
<div className=' flex space-x-6 items-center'>
<div className=''>
    <IoNotificationsOutline className=' text-2xl' />
</div>
<div className=' bg-gray-100 p-2 rounded-full text-gray-600'>
    <FaUserAlt className=' text-2xl' />
</div>
</div>
</div>
      <div className=' flex justify-between'>
        <div className=' text-2xl font-semibold'>
        Welcome, Uchenna.
        </div>
<div className='p-2 bg-white text-black rounded-lg cursor-pointer'>
    Add new student
</div>
      </div>
<div className='grid grid-cols-12 gap-x-4 pt-10'>
    <div className=' col-span-3'>
    <Info icon={   <HiDocumentText className=' text-xl text-white' />}
    number={7}
    title='Applications'
    />
    </div>
    <div className=' col-span-3'>
    <Info icon={   <BsFillCheckSquareFill className=' text-xl text-white' />}
    number={0}
    title='Accepted'
    />
    </div>
    <div className=' col-span-3'>
    <Info icon={   <MdCancelPresentation className=' text-xl text-white' />}
    number={0}
    title='Rejected'
    />
    </div>
    <div className=' col-span-3'>
    <Info icon={   <MdCastForEducation className=' text-xl text-white' />}
    number={7}
    title='Students'
    />
    </div>

</div>
    </div>
  )
}

export default Banner
