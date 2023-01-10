import React,{useState} from "react";
import { Navbar } from "./Navbar";
import SideBar from "./SideBar";
import Banner from "./Banner";
import Spinner from '../utils/Spinner';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Visa = () => {
  const initialize = {
    firstName:"",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    state: "",
    streetAddress:"",
    zipCode:"",
  
  };
  const [
    {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      state,
      streetAddress,
      zipCode,
    
    },
    setStudent,
  ] = useState(initialize);
const [isLoading,setIsLoading]=useState();
  const handleChange = (input) => {
    setStudent((prevState) => ({
      ...prevState,
      [input.target.name]: input.target.value,
    }));
    console.log(firstName,lastName,country)
  };
  const onSubmitHandler= async ()=>{
    console.log('hello')
    let templateParams={
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      state,
      streetAddress,
      zipCode,
    }
    setIsLoading(true);

    emailjs
    .send(
      "service_qma93p2",
      "template_kxr5ihm",
      templateParams,
      "nmjPxXXXXjhlOfznK"
    )
    .then(
      (result) => {
        setIsLoading(false);
        toast("Details sent successfully!");
        console.log(result.text);
      },
      (error) => {
        setIsLoading(false);
        console.log(error.text);
      }
    );
setIsLoading(false)

  }
  return (
    <div className=" grid bg-white grid-cols-12">

    <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
    <SideBar />
    </div>
    <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <Banner />
        <div>
       <div className=" text-center">
       <div className="text-2xl text-blue-700 font-bold">Visa</div>
                      <div className=" text-sm">Please upload the following details for visa application.</div>
       </div>
       <div className="">
       <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                  <h3 className="text-lg font-semibold leading-6 text-purple-900 col-span-6 ">
                Personal Information
              </h3>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
 onChange={(e)=>handleChange(e)}                       
  type="text"
                        name="firstName"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
 onChange={(e)=>handleChange(e)}                      
   type="text"
                        name="lastName"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
 onChange={(e)=>handleChange(e)}                       
  type="text"
                        name="email"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
 onChange={(e)=>handleChange(e)}                       
  type="tel"
                        name="phoneNumber"
                        id="phone-number"
                        autoComplete="phoneNumber"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        onChange={(e)=>handleChange(e)}
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>America</option>
                        <option>Canada</option>
                        <option>UK</option>
                        <option>Europe</option>
                        <option>Australia</option>
                      </select>
                    </div>

                   
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                     City
                      </label>
                      <input
 onChange={(e)=>handleChange(e)}                       
  type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                   State
                      </label>
                      <input
 onChange={(e)=>handleChange(e)} 
 type="text"
                        name="state"
                        id="state"
                        autoComplete="state"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="streetAddress"
                        className="block text-sm font-medium text-gray-700"
                      >
                   Street Address
                      </label>
                      <input
 onChange={(e)=>handleChange(e)}                       
  type="text"
                        name="streetAddress"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                   Zip Code
                      </label>
                      <input
 onChange={(e)=>handleChange(e)}                     
                        type="text"
                        name="zipCode"
                        id="zip-code"
                        autoComplete="zip-code"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                  
     
                { !isLoading&& <button

onClick={onSubmitHandler}
className="ml-3 mt-6  inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
Submit
</button>||<button


className="ml-3 mt-6 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
<Spinner />
</button>}
                  </div>
                  </div>
                
                </div>
             
              </div>
       </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
