import React from 'react'
import { useRecruiter } from "../../../stores";
function BusinessInformationForm() {
    const setRecruiter = useRecruiter((state) => state.storeRecruiter);
  return (
    <div className="flex text-center justify-center m-8">
    <div className="space-y-8 divide-y divide-gray-200 lg:w-1/2 w-10/12">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
                Business Information
            </h3>
          </div>
          <div className="pt-4">
          </div>
            <div className="mt-2">

              <div 
                
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  Business name
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="business-name"
                    id="business-name"
                    autoComplete="given-name"
                    placeholder="Business name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
              </div>

           
            
            </div>
            <div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  Street Adress
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-adress"
                    id="street-adress"
                    autoComplete="given-name"
                    placeholder="Street Adress"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
              </div>

           
            
            </div>
            <div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  City
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="given-name"
                    placeholder="City"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
              </div>

           
            
            </div>
            <div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  State/Province
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="given-name"
                    placeholder="State/Province"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
              </div>

           
            
            </div>
            <div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  Postal Code
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="given-name"
                    placeholder="Postal Code"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
              </div>

           
            
            </div>
            <div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  Website URL
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    autoComplete="given-name"
                    placeholder="Website URL (Optional)"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
              </div>

           
            
            </div>
<div className=' font-semibold mt-5'>
    Business Socials
</div>
<div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  Facebook
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="facebook"
                    id="facebook"
                    autoComplete="given-name"
                    placeholder="Facebook (Optional)"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
              </div>

           
            
            </div> 
<div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  Instagram
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="instagram"
                    id="instagram"
                    autoComplete="given-name"
                    placeholder="Instagram (Optional)"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
              </div>

           
            
            </div> 
<div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  Linkedin
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="linkedin"
                    id="linkedin"
                    autoComplete="given-name"
                    placeholder="Linkedin (Optional)"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
              </div>

           
            
            </div> 
<div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  Twitter
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="twitter"
                    id="twitter"
                    autoComplete="given-name"
                    placeholder="Twitter (Optional)"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               
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
            onClick={()=>setRecruiter({step:'recruitment-details'})}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BusinessInformationForm
