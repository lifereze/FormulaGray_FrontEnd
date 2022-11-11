import React,{useState,useEffect,useMemo} from 'react'
import { useNavigate } from "react-router-dom";
import { updateRecruitmentDetails } from '../../../data/api/authenticatedRequests';
import Spinner from '../../utils/Spinner';
import Select from 'react-select';
import countryList from 'react-select-country-list'
function RecruitmentDetails() {
    const navigate = useNavigate();
    const [studentsFrom,setStudentsFrom]=useState([]);
    const [studentsTo,setStudentsTo]=useState([]);
    const [averageCharge,setAverageCharge]=useState()
    const [averageStudentsAnnually,setAverageStudentsAnnually]=useState();
    const [loading,setLoading]=useState(false);
    const countries = useMemo(() => countryList().getData(), [])
    const onChangeHandler=(e)=>{
        if(e.target.name=='charge'){
          setAverageCharge(e.target.value)
       
        }
        if(e.target.name=='students'){
          setAverageStudentsAnnually(e.target.value)
        
        }
        
      
          }
    const getStudentsFrom =(students)=>{
        const countries=[];
        students.map((student)=>{
            countries.push(student.value);
        })
        setStudentsFrom(countries)

    }
    const getStudentsTo =(students)=>{
        const countries=[];
        students.map((student)=>{
            countries.push(student.value);
        })
        setStudentsTo(countries)

    }
    const onSubmitHandler=async ()=>{
        setLoading(true);
        const res=await updateRecruitmentDetails({'studentsFrom':studentsFrom,'studentsTo':studentsTo,'averageCharge':averageCharge,'averageStudentsAnnually':averageStudentsAnnually});
        console.log(res)
        navigate("/dashboard");
        setLoading(false);


    }
    
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
            Which countries do you primarily recruit students from? 
            </div>
         
                <div className=' '>
                <Select

    isMulti
    onChange={(e)=>getStudentsFrom(e)}
    name="country"
    options={countries}
    className="basic-multi-select"
    classNamePrefix="select"
  />
          </div>
               
       
        
            </div>
            <div className='mt-10'>
            <div className=' text-left py-1 '>
            Which countries do you send students to? 
            </div>
            <div className='  '>
            <Select

isMulti
name="country"
onChange={(e)=>getStudentsTo(e)}
options={[
    {value:'USA',label:'USA'},
    {value:'UK',label:'UK'}
]}
className="basic-multi-select"
classNamePrefix="select"
/>
            </div>
            </div>
            <div className=' mt-3'>
<div className=' text-sm text-left py-1 text-gray-700 font-medium'>What is the average charge per student?</div>
<div className=''>
<input
                      type="number"
                      name="charge"
                      id="charge"
                      value={averageCharge}
                      onChange={(e)=>onChangeHandler(e)}
                      autoComplete="given-name"
                      placeholder="Charge per student"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
</div>
            </div>
            <div className=' mt-3'>
<div className=' text-sm text-left py-1 text-gray-700 font-medium'>What is the average number of students you get anually?</div>
<div className=''>
<input
                      type="number"
                      name="students"
                      id="students"
                  value={averageStudentsAnnually}
                  onChange={(e)=>onChangeHandler(e)}
                      autoComplete="given-name"
                      placeholder="Students anually"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
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
          {!loading&&<button
            type="submit"
            onClick={onSubmitHandler}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>||<button
   
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <Spinner />
          </button>}
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecruitmentDetails
