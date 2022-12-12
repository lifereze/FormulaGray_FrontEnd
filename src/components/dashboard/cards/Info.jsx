import React from 'react'

function Info({icon,number,title,color,iconBg}) {
  return (
    <div style={{backgroundColor:color}} className={` w-full flex  flex-col  justify-between items-start py-3  px-4  text-black rounded-lg`}>
 <div style={{backgroundColor:iconBg}} className='p-3 rounded-md'>
     {icon}
      </div>
      <div className=' pt-2 text-lg font-bold'>
        {number}
    </div>
    <div className=' text-gray-600  text-sm uppercase'>

      {title}
    </div>
    

     
    </div>
  )
}

export default Info
