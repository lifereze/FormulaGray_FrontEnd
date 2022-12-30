import  React,{ useEffect,useState,useRef } from "react";
import Logo from "../../constants/images/formulargray_03.png";
import {AiOutlineLogout} from 'react-icons/ai';
import {refreshSession,logout} from '../../data/api/authenticatedRequests'
import {FaUserAlt} from 'react-icons/fa'
import {IoNotificationsOutline} from 'react-icons/io5'
import Drawer from "./Drawer";
import {GiHamburgerMenu} from 'react-icons/gi'
import {userStore} from '../../stores'
function Banner() {
    const [showDrawer,setShowDrawer]=useState(false);
    const [showLogout,setShowLogout]=useState(false);
    const user = userStore((state) => state.user);
    const setUser = userStore((state) => state.storeUser);
    const ref = useRef();
    UseOnClickOutside(ref, () => setShowLogout(false));
    useEffect(()=>{
        const getUser= async ()=>{
           const res=await refreshSession();
           console.log(res)
           setUser(res.data.user)
         
         }
        
         getUser();
           },[])
           const LogOut=async ()=>{
const res= await logout();
window.location.href = "/signin";
           }
  return (
    <>
    <div className=' w-full  bg-[#E6E9EF]   top-0 pb-1 md:px-10 px-4 text-black '>
<div className=' flex flex-row md:flex-row-reverse justify-between items-center pb-2 pt-4'>
    <div className=" cursor-pointer md:hidden block p-2 rounded-full hover:bg-gray-200 hover:text-gray-900"
     onClick={()=>setShowDrawer(true)}>
<GiHamburgerMenu className=" text-2xl" />
    </div>
    
<div className=' flex space-x-6 space-y-2 items-center'>
    <div className=" cursor-pointer">
<GiHamburgerMenu className=" text-2xl" onClick={()=>setShowLogout(!showLogout)} />
{showLogout&&<div ref={ref} onClick={()=>LogOut()} className="mt-2 bg-white p-2 cursor-pointer flex items-center  space-x-2 ">
<div className="">
  <AiOutlineLogout className="" />
</div>
<div className="">
  Logout
</div>
</div>}
</div>
</div>
<div className=" text-black hidden md:block capitalize font-semibold text-lg">Dashboard User</div>
</div>  
    </div>
    {showDrawer&&<Drawer setShowDrawer={setShowDrawer} />}
    </>
  )
}
function UseOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
export default Banner
