import React,{useState,useEffect} from "react";
import { useRecruiter, userStore } from "../../../stores";
import { editUser } from "../../../data/api/authenticatedRequests";
import Spinner from "../../utils/Spinner";
export const ContactInformation = () => {
  const user = userStore((state) => state.user);
  const storeUser = userStore((state) => state.storeUser);
const [firstName,setFirstName]=useState('');
const [firstNameError,setFirstNameError]=useState('');
const [lastName,setLastName]=useState('');
const [lastNameError,setLastNameError]=useState('');
const [email,setEmail]=useState(user?.email);
const [emailError,setEmailError]=useState('');
const [phone,setPhone]=useState('');
const [phoneError,setPhoneError]=useState('');
const [loading,setLoading]=useState(false);
  const setRecruiter = useRecruiter((state) => state.storeRecruiter);
  useEffect(()=>{
setEmail(user?.email)
setPhone(user?.phone)
setFirstName(user?.firstName)
setLastName(user?.lastName)
  },[user])
  const onChangeHandler=(e)=>{
if(e.target.name=='firstName'){
  setFirstName(e.target.value)
  setFirstNameError('')
}
if(e.target.name=='lastName'){
  setLastName(e.target.value)
  setLastNameError('')
}

if(e.target.name=='phone'){
  setPhone(e.target.value)
  setPhoneError('')
}
  }
  const onSubmitHandler=async ()=>{
    
    if(firstName==''||lastName==''||phone==''){
      if(firstName==''){
        setFirstNameError('First name cannot be empty')
      }
      if(lastName==''){
        setLastNameError('Last name cannot be empty')
      }
      if(phone==''){
        setPhoneError('Phone cannot be empty')
      }
      if(phone.length>1&&phone.length<12){
        setPhoneError('Please use the appropriate phone format')
      }
      return;
    }
    setLoading(true)
    if(user?.email==email){
      const res=await editUser({'firstName':firstName,'lastName':lastName})
      setLoading(false)
      
      if(res.status==200){
        const updatedDetails=res.data.user
      storeUser({...user,updatedDetails})
      
      }
    }
    if(user?.email==email&&user?.phone!=phone){
      const res=await editUser({'firstName':firstName,'lastName':lastName,'phone':phone})
      setLoading(false)
      
      if(res.status==200){
        const updatedDetails=res.data.user
      storeUser({...user,updatedDetails})
      
      }
    }
    if(user?.email!=email&&user?.phone==phone){
      const res=await editUser({'firstName':firstName,'lastName':lastName,'email':email})
      setLoading(false)
      
      if(res.status==200){
        const updatedDetails=res.data.user
      storeUser({...user,updatedDetails})
      
      }
    }

return setRecruiter({step:'business'})
  
  }
  return (
    <div className="flex text-center justify-center m-8">

      <div className="space-y-8 divide-y divide-gray-200 lg:w-1/2 w-10/12">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Contact Information
              </h3>
            </div>
            <div className="pt-4">
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      value={firstName}
                      onChange={(e)=>onChangeHandler(e)}
                      autoComplete="given-name"
                      placeholder="First name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                   {firstNameError&& <div className=" text-red-500 text-sm">{firstNameError}</div>}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      value={lastName}
                      onChange={(e)=>onChangeHandler(e)}
                      autoComplete="family-name"
                      placeholder="Last name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                                       {lastNameError&& <div className=" text-red-500 text-sm">{lastNameError}</div>}

                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      type="email"
                      autoComplete="email"
                      placeholder="example@gmail.com"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e)=>onChangeHandler(e)}

                      autoComplete="given-phone"
                      placeholder="+254 0111000000"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                                       {phoneError&& <div className=" text-red-500 text-sm">{phoneError}</div>}

                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo
                </label>
                <div className="mt-1 flex items-center">
                  <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business certificate
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business logo
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
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
          { !loading&& <button

              onClick={onSubmitHandler}
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Next
            </button>||<button


className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
<Spinner />
</button>}
          </div>
        </div>
      </div>
    </div>
  );
};
