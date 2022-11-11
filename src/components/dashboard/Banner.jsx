import  React,{ useEffect,useState } from "react";
import Logo from "../../constants/images/formulargray_03.png";

import {refreshSession} from '../../data/api/authenticatedRequests'
import {FaUserAlt} from 'react-icons/fa'
import {IoNotificationsOutline} from 'react-icons/io5'
import Drawer from "./Drawer";
import {GiHamburgerMenu} from 'react-icons/gi'
import {userStore} from '../../stores'
function Banner() {
    const [showDrawer,setShowDrawer]=useState(false);
    const user = userStore((state) => state.user);
    const setUser = userStore((state) => state.storeUser);
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
    <div className=' w-full bg-blue-500 pb-1 md:px-10 px-4 text-white '>
<div className=' flex flex-row md:flex-row-reverse justify-between items-center pb-2 pt-4'>
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
<div className=" text-white hidden md:block capitalize font-semibold text-lg">Hello {user && user.email && user.email.split("@")[0]},</div>
</div>  
    </div>
    {showDrawer&&<Drawer setShowDrawer={setShowDrawer} />}
    </>
  )
}

export default Banner
