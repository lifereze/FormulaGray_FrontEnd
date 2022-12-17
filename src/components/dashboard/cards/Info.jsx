import React from 'react'

function Info({icon,number,title,text,color,iconBg}) {
  return (
    <div style={{backgroundColor:color}} className={` w-full flex  flex-col  justify-between items-start py-3 shadow-md px-4  text-black rounded-lg`}>
 <div style={{backgroundColor:iconBg}} className='p-3 rounded-md'>
     {icon}
      </div>
      <div className={` pt-2 text-lg font-bold text-${text?text:''}`}>
        {number}
    </div>
    <div className={`   text-sm uppercase text-${text?text:'gray-600'}`}>

      {title}
    </div>
    

     
    </div>
  )
}

export default Info
