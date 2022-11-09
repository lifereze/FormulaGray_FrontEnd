import { Fragment,useEffect,useState } from "react";
import Logo from "../../constants/images/formulargray_03.png";
import {userStore} from '../../stores'
import {refreshSession} from '../../data/api/authenticatedRequests'
import {FaUserAlt} from 'react-icons/fa'
import {IoNotificationsOutline} from 'react-icons/io5'
import Info from './cards/Info'
import {HiDocumentText} from 'react-icons/hi'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import {MdCancelPresentation,MdCastForEducation} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import Drawer from "./Drawer";
function Banner() {
    const user = userStore((state) => state.user);
    const setUser = userStore((state) => state.storeUser);
    const [showDrawer,setShowDrawer]=useState(false);
    useEffect(()=>{
        const getUser= async ()=>{
           const res=await refreshSession();
           console.log(res)
           setUser(res.data.user)
         
         }
        
         getUser();
           },[])
  return (
    <>
    <div className=' w-full bg-blue-500 pb-10 md:px-10 px-4 text-white '>
<div className=' flex flex-row md:flex-row-reverse justify-between items-center pb-10 pt-4'>
    <div className=" cursor-pointer md:hidden block p-2 rounded-full hover:bg-gray-200 hover:text-gray-900"
     onClick={()=>setShowDrawer(true)}>
<GiHamburgerMenu className=" text-2xl" />
    </div>
<div className=' flex space-x-6 items-center'>
<div className=''> 
    <IoNotificationsOutline className=' text-2xl' />
</div>
<div className=' bg-gray-100 p-2 rounded-full text-gray-600'>
    <FaUserAlt className=' text-2xl' />
</div>
</div>
</div>
      <div className=' flex justify-between items-center'>
        <div className=' md:text-2xl font-semibold'>
        Welcome, {user && user.email && user.email.split("@")[0]}
        </div>
<div className='p-2 bg-white text-black rounded-lg cursor-pointer'>
    Add new student
</div>
      </div>
<div className='grid grid-cols-12 gap-x-4 gap-y-4 pt-10'>
    <div className=' md:col-span-3 col-span-6'>
    <Info icon={   <HiDocumentText className=' text-xl text-white' />}
    number={7}
    title='Applications'
    />
    </div>
    <div className=' md:col-span-3 col-span-6'>
    <Info icon={   <BsFillCheckSquareFill className=' text-xl text-white' />}
    number={0}
    title='Accepted'
    />
    </div>
    <div className=' md:col-span-3 col-span-6'>
    <Info icon={   <MdCancelPresentation className=' text-xl text-white' />}
    number={0}
    title='Rejected'
    />
    </div>
    <div className=' md:col-span-3 col-span-6'>
    <Info icon={   <MdCastForEducation className=' text-xl text-white' />}
    number={7}
    title='Students'
    />
    </div>

</div>
    </div>
    {showDrawer&&<Drawer setShowDrawer={setShowDrawer} />}
    </>
  )
}

export default Banner
