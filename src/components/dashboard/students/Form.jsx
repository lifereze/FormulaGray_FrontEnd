import React,{useState,useEffect, useMemo} from 'react'
import FileUpload from '../../uploads/FileUpload';
import { firebaseUploadImg,firebaseUploadDoc } from "../../../data/api/upload";
import { getDownloadURL } from "firebase/storage";
import Spinner from '../../utils/Spinner';
import { uploadStudent } from '../../../data/api/authenticatedRequests';
import {useDropzone} from 'react-dropzone';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userStore } from "../../../stores";
import Approval from '../../modals/Approval';
export const Form = (props) => {
  const navigate=useNavigate();
  const user = userStore((state) => state.user);
  const [showApproval,setShowApproval]=useState(false)
  const initialize = {
    firstName:"",
    lastName: "",
    email: "",
    phoneNumber: "",
    educationLevel:'',
    countryOfInterest: "",
    country: "",
    city: "",
    state: "",
    streetAddress:"",
    zipCode:"",
    BACertificate:"",
    BATranscript:"",
    resume:"",
    recommendationLetter:"",
    statementOfPurpose:""
  };
  const [
    {
      firstName,
      lastName,
      email,
      phoneNumber,
      educationLevel,
      countryOfInterest,
      country,
      city,
      state,
      streetAddress,
      zipCode,
    
    },
    setStudent,
  ] = useState(initialize);
const [isLoading,setIsLoading]=useState();
const [loading,setLoading]=useState();

  const [isResumeLoading, setResumeLoading] = useState();
const [resumeUrl, setResumeUrl] = useState("");
const [resumeName,setResumeName]=useState();

  const [isDegreeLoading, setDegreeLoading] = useState();
const [degreeUrl, setDegreeUrl] = useState("");
const [degreeName,setDegreeName]=useState();

  const [isOrdinaryLoading, setOrdinaryLoading] = useState();
const [ordinaryUrl, setOrdinaryUrl] = useState("");
const [ordinaryName,setOrdinaryName]=useState();

  const [isTranscriptLoading, setTranscriptLoading] = useState();
const [transcriptUrl, setTranscriptUrl] = useState("");
const [transcriptName,setTranscriptName]=useState();

  const [isRecommendationLoading, setRecommendationLoading] = useState();
const [recommendationUrl, setRecommendationUrl] = useState("");
const [recommendationName,setRecommendationName]=useState();

  const [isStatementLoading, setStatementLoading] = useState();
const [statementUrl, setStatementUrl] = useState("");
const [statementName,setStatementName]=useState();
const [otherFiles,setOtherFiles] = useState([]);
const [otherFilesUrls,setOtherFilesUrls] = useState([]);


  const uploadDoc = (input) => {
    const files = input.target.files || [];
 
    
  
    if (files.length === 0) {
      return false;
    }
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
        if(input.target.name=='degree'){
         
          setDegreeLoading(true);
        }
        if(input.target.name=='ordinary'){
         
          setOrdinaryLoading(true);
        }
        if(input.target.name=='resume'){
          setResumeLoading(true);
        }
        if(input.target.name=='transcript'){
          setTranscriptLoading(true);
        }
        if(input.target.name=='recommendation'){
          setRecommendationLoading(true);
        }
        if(input.target.name=='statement'){
          setStatementLoading(true);
        }
       
      const uploadTask = firebaseUploadDoc(files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            if(input.target.name=='degree'){
              setDegreeName(input.target.files[0].name)
              setDegreeLoading(false);
              setDegreeUrl(url);
            }
            if(input.target.name=='ordinary'){
              setOrdinaryName(input.target.files[0].name)
              setOrdinaryLoading(false);
              setOrdinaryUrl(url);
            }
            if(input.target.name=='resume'){
              setResumeName(input.target.files[0].name)
              setResumeLoading(false);
              setResumeUrl(url);
            }
            if(input.target.name=='transcript'){
              setTranscriptName(input.target.files[0].name)
              setTranscriptLoading(false);
              setTranscriptUrl(url);
            }
            if(input.target.name=='recommendation'){
              setRecommendationName(input.target.files[0].name)
              setRecommendationLoading(false);
              setRecommendationUrl(url);
            }
            if(input.target.name=='statement'){
              setStatementName(input.target.files[0].name)
              setStatementLoading(false);
              setStatementUrl(url);
            }
           
          });
        }
      );

      return true;
    };

    reader.onprogress = function (e) {
      //Loader
    };
  };
 
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
      // Disable click and keydown behavior
      noClick: true,
      noKeyboard: true,
      multiple:true
    });
      useEffect(  ()=>{
        if(acceptedFiles.length>0){
         setLoading(true)
          const uploadTask = acceptedFiles.map((acceptedFile,index)=>{
           const uploadFile= firebaseUploadDoc(acceptedFile)
         uploadFile.on(
            "state_changed",
            (snapshot) => {
              const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
            },
            (err) => {},
            () => {
              getDownloadURL(uploadFile.snapshot.ref).then((url) => {
                setOtherFilesUrls(current=>[...current,url])
               console.log(url)
               if(index==acceptedFiles.length-1){
                setLoading(false)
                setOtherFiles(current=>[...current,...acceptedFiles]);
               }
                
                })})
          })
       
           
              
      
         }
      },[acceptedFiles])
      

    const files = otherFiles?.map(file => (
      <li key={file.path}>
        {console.log('These are other files',otherFilesUrls)}
        {file.path} 
      </li>
    ))
  const handleChange = (input) => {
    setStudent((prevState) => ({
      ...prevState,
      [input.target.name]: input.target.value,
    }));
  };
  const onSubmitHandler= async ()=>{
    if(user?.approvalStatus!=='pending'){
      setIsLoading(true);

      const res= await uploadStudent({
        firstName,
        lastName,
        email,phoneNumber,countryOfInterest,country,city,educationLevel,
        state,streetAddress,zipCode,BACertificate:degreeUrl,BATranscript:transcriptUrl,resume:resumeUrl,recommendationLetter:recommendationUrl,statementOfPurpose:statementUrl,OLevelCertificate:ordinaryUrl,otherDocuments:otherFilesUrls
      })
      if(res.status==200){
        toast("Student uploaded successfully!");
      if ( user.role=='admin'){
        navigate('/adminStudents')
      }
      else{
        navigate('/students')
      }
        
      }
      else{
        
        const message=res.data.message;
        toast(message);
      }
      setIsLoading(false)
      
    }
else{
setShowApproval(true)
}

  }
  return (
    <div className="">
      

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-6 md:gap-6">
        <div className='md:col-span-1'></div>
          <div className="mt-5 md:col-span-4 md:mt-0">
         
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
                        htmlFor="countryOfInterest"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country of Interest
                      </label>
                      <select
                        id="countryOfInterest"
                        name="countryOfInterest"
                        onChange={(e)=>handleChange(e)}
                        autoComplete="countryOfInterest"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="America">America</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        <option value="Europe">Europe</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="educationLevel"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Highest Level of Education
                      </label>
                      <select
                        id="educationLevel"
                        name="educationLevel"
                        onChange={(e)=>handleChange(e)}
                        autoComplete="educationLevel"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="highSchool">High School</option>
                        <option value="diploma">Diploma</option>
                        <option value="bachelor">Bachelors</option>
                        <option value="masters">Masters</option>
                        <option value="phd">PHD</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <input
 onChange={(e)=>handleChange(e)}                       
  type="text"
                        name="country"
                        id="country"
                        autoComplete="country"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>America</option>
                        <option>Canada</option>
                        <option>UK</option>
                        <option>Europe</option>
                        <option>Australia</option>
                      </select>
                    </div> */}
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
                    <h3 className="text-lg font-semibold leading-6 text-purple-900">
                Document Uploads
              </h3>
                  <FileUpload uploadDoc={uploadDoc} isDocLoading={isOrdinaryLoading} docName={ordinaryName} docUrl={ordinaryUrl} name='ordinary' title="O level certificate"  />
                    <FileUpload uploadDoc={uploadDoc} isDocLoading={isDegreeLoading} docName={degreeName} docUrl={degreeUrl} name='degree' title="Bachelors degree certificate(For postGraduate application only)"  />
                <FileUpload uploadDoc={uploadDoc} isDocLoading={isTranscriptLoading} docName={transcriptName} docUrl={transcriptUrl} name='transcript' title="Bachelors degree transcript (For postGraduate application only)"  />
                <FileUpload uploadDoc={uploadDoc} isDocLoading={isResumeLoading} docName={resumeName} docUrl={resumeUrl} name='resume' title="Resume"  />
                <FileUpload uploadDoc={uploadDoc} isDocLoading={isRecommendationLoading} docName={recommendationName} docUrl={recommendationUrl} name='recommendation' title="Letter of recommendation (If required)"  />
                <FileUpload uploadDoc={uploadDoc} isDocLoading={isStatementLoading} docName={statementName} docUrl={statementUrl} name='statement' title="Statement of purpose(If required by country)"  />
                <div className="mb-4 mt-10 text-left text-sm text-gray-600 font-semibold">
          Other Files
          </div>
          <div className="flex justify-center ">
                <div className="p-8  w-10/12  border-2 border-dashed w-full">
      <div {...getRootProps({className: 'dropzone'})} onClick={open}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here</p>
        <button type="button" className='bg-midnight text-white rounded-full py-2 px-6'  >
          {loading?<Spinner/>:'Other Files'}
        </button>
      </div>
      <aside>
        <h4 className='text-midnight font-semibold'>Files</h4>
        <ul>{files}</ul>
      </aside>
    </div>
    </div>
                {!loading&& !isLoading&& <button

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
          <div className='md:col-span-1'></div>
        </div>
      </div>
    

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <ToastContainer />
      {showApproval&&<Approval setShowApproval={setShowApproval}/>}
    </div>
  );
};
