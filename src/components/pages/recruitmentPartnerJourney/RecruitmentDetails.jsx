import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
function RecruitmentDetails() {
  return (
    <div className="flex text-center justify-center m-8">
    <div className="space-y-8 divide-y divide-gray-200 lg:w-1/2 w-10/12">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
            Recruitment Details
            </h3>
          </div>
          <div className="pt-4">
           
            <div className=''>
            <div className=' text-left py-1'>
            Which countries do you primarily recruit students from? Please indicate the yearly volume for each.
            </div>
            <div className=' grid grid-cols-11 gap-x-2 '>
                <div className='  col-span-5'>
            <select
        name='country'
        className="w-full rounded-md cursor-pointer border focus:outline-none focus:ring-0 focus:border-blue-500"
   
      >
        <option value=''>Country</option>
        <option value='Kenya'>Kenya</option>
        <option value='Tanzania'>Tanzania</option>
        <option value='Rwanda'>Rwanda</option>
        <option value='Djibouti'>Djibouti</option>
        </select></div>
                <div className='  col-span-5'>
            <select
        name='volume'
        className="w-full rounded-md cursor-pointer border focus:outline-none focus:ring-0 focus:border-blue-500"
   
      >
        <option value=''>Volume</option>
        <option value='1-5'>1-5</option>
        <option value='6-20'>6-20</option>
        <option value='21-50'>21-50</option>
        <option value='51-100'>51-100</option>
        </select></div>
        <div className=' col-span-1 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-200'>
            <AiFillDelete className=' text-red-500 text-2xl' />
        </div>
            </div>
            </div>
            <div className='mt-10'>
            <div className=' text-left py-1 '>
            Which countries do you send students to? Please indicate the yearly volume for each.
            </div>
            <div className=' grid grid-cols-11 gap-x-2 '>
                <div className='  col-span-5'>
            <select
        name='country'
        className="w-full rounded-md cursor-pointer border focus:outline-none focus:ring-0 focus:border-blue-500"
   
      >
        <option value=''>Country</option>
        <option value='Kenya'>Kenya</option>
        <option value='Tanzania'>Tanzania</option>
        <option value='Rwanda'>Rwanda</option>
        <option value='Djibouti'>Djibouti</option>
        </select></div>
                <div className='  col-span-5'>
            <select
        name='volume'
        className="w-full rounded-md cursor-pointer border focus:outline-none focus:ring-0 focus:border-blue-500"
   
      >
        <option value=''>Volume</option>
        <option value='1-5'>1-5</option>
        <option value='6-20'>6-20</option>
        <option value='21-50'>21-50</option>
        <option value='51-100'>51-100</option>
        </select></div>
        <div className=' col-span-1 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-200'>
            <AiFillDelete className=' text-red-500 text-2xl' />
        </div>
            </div>
            </div>
            <div className=' mt-10'>
<div className=' text-sm text-left py-1 text-gray-700 font-medium'>What types of marketing methods do you use for your business?</div>
<select
        name='marketing-methods'
        className="w-full rounded-md cursor-pointer border focus:outline-none focus:ring-0 focus:border-blue-500"
   
      >
        <option value=''>What types of marketing methods do you use for your business?</option>
        <option value='Education Fairs, Workshops And Seminars'>Education Fairs, Workshops And Seminars</option>
        <option value='Newspapers, Magazines And Pamphlet Advertisement'>Newspapers, Magazines And Pamphlet Advertisement</option>
        <option value='Facebook, Instagram And Google Ads'>Facebook, Instagram And Google Ads</option>
        <option value='B2B Agent Networks'>B2B Agent Networks</option>
        <option value='Other'>Other</option>
        </select>
            </div>
            <div className=' mt-3'>
<div className=' text-sm text-left py-1 text-gray-700 font-medium'>What is the average fee you charge to Students?</div>
<select
        name='marketing-methods'
        className="w-full rounded-md cursor-pointer border focus:outline-none focus:ring-0 focus:border-blue-500"
   
      >
        <option value=''>What is the average fee you charge to Students?</option>
        <option value='0-200'>$0-$200</option>
        <option value='200-500'>$200-$500</option>
        <option value='500-1000'>$500-$1000</option>
        <option value='1000-2000'>$1000-$2000</option>
        <option value='above 2000'>$2000 +</option>
        </select>
            </div>
            <div className=' mt-3'>
<div className=' text-sm text-left py-1 text-gray-700 font-medium'>Why did you choose apply Formulagray over the competitors?</div>
<select
        name='marketing-methods'
        className="w-full rounded-md cursor-pointer border focus:outline-none focus:ring-0 focus:border-blue-500"
   
      >
        <option value=''>Why did you choose apply Formulagray over the competitors?</option>
        <option value='Covers More Schools Globally'>Covers More Schools Globally</option>
        <option value='Unified Platform For All Needs'>Unified Platform For All Needs</option>
        <option value='Transparent And Faster Payments'>Transparent And Faster Payments</option>
        <option value='Better Industry Insights And Training'>Better Industry Insights And Training</option>
        <option value='other'>Other</option>
        </select>
            </div>
            <div className=' mt-3'>
<div className=' text-sm text-left py-1 text-gray-700 font-medium'>How can we help you grow your business?</div>
<select
        name='marketing-methods'
        className="w-full rounded-md cursor-pointer border focus:outline-none focus:ring-0 focus:border-blue-500"
   
      >
        <option value=''>How can we help you grow your business?</option>
        <option value='Bring More Student Leads To My Business'>Bring More Student Leads To My Business</option>
        <option value='Help Me Manage My Offices And Employees'>Help Me Manage My Offices And Employees</option>
        <option value='Keep Me Updated On Industry News'>Keep Me Updated On Industry News</option>
        <option value='Provide Services Such As SoP Review, Pre And Post Landing Services'>Provide Services Such As SoP Review, Pre And Post Landing Services</option>
        <option value='Provide Destination Specific Training'>Provide Destination Specific Training</option>
        </select>
            </div>
            <div className='mt-3'>
            <div 
                
                className=" text-left pb-1 text-sm font-medium text-gray-700"
              >
                What will make your experience working at formulagray delightful?
                </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="experience"
                  id="experience"
                  autoComplete="given-name"
                  placeholder="What will make your experience working at formulagray delightful?"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
             
            </div>
            </div>
            <div className='mt-3'>
            <div 
                
                className=" text-left pb-1 text-sm font-medium text-gray-700"
              >
                What educational associations or groups do yo belong to /represent?
                </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="experience"
                  id="experience"
                  autoComplete="given-name"
                  placeholder="What educational associations or groups do yo belong to /represent?"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
             
            </div>
            </div>
            <div className='mt-10'>
                <div className=' text-left text-gray-700 font-medium'>
                Reference
                </div>
                <div className=' text-left italic'>
                (Optional but recommended)
                </div>
                <div className='mt-3'>
            <div 
                
                className=" text-left pb-1 text-sm font-medium text-gray-700"
              >
                Reference school name
                </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="school-name"
                  id="school-name"
                  autoComplete="given-name"
                  placeholder="Reference school name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
             
            </div>
            </div>
                <div className='mt-3'>
            <div 
                
                className=" text-left pb-1 text-sm font-medium text-gray-700"
              >
                Reference business name
                </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="business-name"
                  id="business-name"
                  autoComplete="given-name"
                  placeholder="Reference business name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
             
            </div>
            </div>
                <div className='mt-3'>
            <div 
                
                className=" text-left pb-1 text-sm font-medium text-gray-700"
              >
                Reference phone number
                </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="given-number"
                  placeholder="Reference phone number"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
             
            </div>
            </div>
            </div>
          </div>
 
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecruitmentDetails
