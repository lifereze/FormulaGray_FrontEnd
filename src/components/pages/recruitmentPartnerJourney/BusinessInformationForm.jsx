import React,{useState,useEffect, useMemo} from 'react'
import { useRecruiter, userStore } from "../../../stores";
import { updateBusinessDetails } from "../../../data/api/authenticatedRequests";
import Spinner from "../../utils/Spinner";
import ImageUpload from '../../uploads/ImageUpload';
import FileUpload from '../../uploads/FileUpload';
import { firebaseUploadImg,firebaseUploadDoc } from "../../../data/api/upload";
import { getDownloadURL } from "firebase/storage";
import Select from 'react-select';
import countryList from 'react-select-country-list'
function BusinessInformationForm() {
  const user = userStore((state) => state.user);
  const storeUser = userStore((state) => state.storeUser);
    const [businessName,setBusinessName]=useState('');
const [businessNameError,setBusinessNameError]=useState('');
    const [country,setCountry]=useState('');
const [countryError,setCountryError]=useState('');
    const [city,setCity]=useState('');
const [cityError,setCityError]=useState('');
    const [streetAddress,setStreetAddress]=useState('');
const [streetAddressError,setStreetAddressError]=useState('');
const [loading,setLoading]=useState(false);
const [isImageLoading, setFileLoading] = useState();
const [isDocLoading, setDocLoading] = useState();
const [imageUrl, setImageUrl] = useState("");
const [docUrl, setDocUrl] = useState("");
const [docName,setDocName]=useState();
const [entity,setEntity]=useState('');
    const setRecruiter = useRecruiter((state) => state.storeRecruiter);
    const options = useMemo(() => countryList().getData(), [])
    useEffect(()=>{
console.log(options)
    },[options])
    useEffect(()=>{
      setBusinessName(user?.business?.name)
      setCountry(user?.business?.location?.country)
      setCity(user?.business?.location?.city)
      setStreetAddress(user?.business?.location?.streetAddress)
      setImageUrl(user?.business?.image)
      setDocUrl(user?.business?.businessCertificate)
        },[user])
    const uploadImage = (input) => {
        const files = input.target.files || [];
        if (files.length === 0) {
          return false;
        }
        const reader = new FileReader();
    
        reader.readAsDataURL(files[0]);
    
        reader.onload = (e) => {
          setFileLoading(true);
          const uploadTask = firebaseUploadImg(files[0]);
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
                setFileLoading(false);
                setImageUrl(url);
              });
            }
          );
    
          return true;
        };
    
        reader.onprogress = function (e) {
          //Loader
        };
      };
      const uploadDoc = (input) => {
        const files = input.target.files || [];
        setDocName(input.target.files[0].name)
        if (files.length === 0) {
          return false;
        }
        const reader = new FileReader();
    
        reader.readAsDataURL(files[0]);
    
        reader.onload = (e) => {
            console.log(e)
            setDocLoading(true);
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
                setDocLoading(false);
                setDocUrl(url);
              });
            }
          );
    
          return true;
        };
    
        reader.onprogress = function (e) {
          //Loader
        };
      };
    const onChangeHandler=(e)=>{
        if(e.target.name=='businessName'){
          setBusinessName(e.target.value)
          setBusinessNameError('')
        }
        if(e.target.name=='country'){
          setCountry(e.target.value)
          setCountryError('')
        }
        
        if(e.target.name=='city'){
          setCity(e.target.value)
          setCityError('')
        }
        if(e.target.name=='streetAddress'){
          setStreetAddress(e.target.value)
          setStreetAddressError('')
        }
          }
          const onSubmitHandler=async ()=>{
       
            if(businessName==''||country==''||city==''||streetAddress==''){
              if(businessName==''){
                setBusinessNameError('Business Name cannot be empty')
              }
              if(country==''){
                setCountryError('Country cannot be empty')
              }
              if(city==''){
                setCityError('City cannot be empty')
              }
              if(streetAddress==''){
                setStreetAddressError('Street Address cannot be empty')
              }
              return;
            }
            setLoading(true)
            const res=await updateBusinessDetails({'name':businessName,'country':country,'city':city,'streetAddress':streetAddress,'identityDocument':docUrl,'businessCertificate':imageUrl})
        setLoading(false)
         console.log(res);
         return setRecruiter({step:'recruitment-details'})

          }
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
                    name="businessName"
                    id="business-name"
                    value={businessName}
                    onChange={(e)=>onChangeHandler(e)}
                    autoComplete="given-name"
                    placeholder="Business name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {businessNameError&&<div className='text-sm text-red-500'>{businessNameError}</div>}
               
              </div>

           
            
            </div>
            <div>
      <div
        className=" my-1 text-left pb-1 text-sm font-medium text-gray-700"
      >
        What entity are you?
      </div>
      <select
        name={'entity'}
        className="w-full rounded-md border focus:outline-none focus:ring-0 focus:border-bloow-blue"
        onChange={(e)=>{setEntity(e.target.value)}}
      > 
        <option value="">
               Choose Entity
                </option>
      
        <option value="business">
               Company
                </option>
                <option value="individual">
               Individual
                </option>
      </select>
    </div>
 


            {entity=='individual'&&<ImageUpload uploadImage={uploadImage} isImageLoading={isImageLoading} imageUrl={imageUrl}  />}
{   entity=='business'&&         <FileUpload uploadDoc={uploadDoc} isDocLoading={isDocLoading} docName={docName} docUrl={docUrl} title="Business Certificate"  />

}            <div className="mt-3">
              <div 
                  className=" text-left pb-1 text-sm font-medium text-gray-700"
                >
                  Country
                  </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    autoComplete="given-country"
                    value={country}
                    onChange={(e)=>onChangeHandler(e)}
                    placeholder="Country"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               {countryError&&<div className='text-sm text-red-500'>{countryError}</div>}
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
                    value={city}
                    onChange={(e)=>onChangeHandler(e)}
                    autoComplete="given-name"
                    placeholder="City"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                              {cityError&&<div className='text-sm text-red-500'>{cityError}</div>}

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
                    name="streetAddress"
                    id="street-adress"
                    value={streetAddress}
                    onChange={(e)=>onChangeHandler(e)}
                    autoComplete="given-name"
                    placeholder="Street Adress"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
               {streetAddressError&&<div className='text-sm text-red-500'>{streetAddressError}</div>}
              </div>           
            </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={()=>setRecruiter({step:'contact'})}
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back
          </button>
         {!loading&& <button
            
            onClick={onSubmitHandler}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>||
          <button
        
          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <Spinner />
        </button>
          }
        </div>
      </div>
    </div>
  </div>
  )
}

export default BusinessInformationForm
