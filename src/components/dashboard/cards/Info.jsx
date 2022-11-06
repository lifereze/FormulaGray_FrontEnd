import React from 'react'

function Info({icon,number,title}) {
  return (
    <div className=' w-full flex justify-between py-3 items-center px-4 bg-white text-black rounded-lg'>
<div className=''>
    <div className=' text-gray-500 uppercase'>
      {title}
    </div>
    <div className=' font-semibold'>
        {number}
    </div>
</div>
      <div className='p-2 bg-blue-600 rounded-full'>
     {icon}
      </div>
    </div>
  )
}

export default Info
