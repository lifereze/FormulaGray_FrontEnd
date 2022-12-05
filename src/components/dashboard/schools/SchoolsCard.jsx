import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import {AiOutlineArrowRight} from 'react-icons/ai'


export const SchoolsCard = ({institution}) => {
  return (
    <div
      className=""
    >
      
        <a href="/schools/school">
          <div className="">
          <div
            key={institution.name}
            className=" flex flex-col rounded-lg bg-white text-center shadow"
          >
            <div>
              <img
                className="mx-auto h-48 w-full flex-shrink-0 object-cover rounded-md"
                src={institution.imageUrl}
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col p-2">
              <h3 className="mt-2 text-base font-medium text-gray-900">
                {institution.name}
              </h3>
              <div className=" text-midnight text-sm">Nigeria</div>
            
            </div>
       
          </div>
         
          </div>

        </a>
    
    </div>
  );
}
