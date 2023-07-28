
import { userStore } from "../../../../stores";
import { useDeleteSchoolMutation } from "./schoolsApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
export const SchoolsCard = ({institution}) => {
  const user = userStore((state) => state.user);
  const [deleteSchool,{isLoading,error}] = useDeleteSchoolMutation();
  const delete_School = async () => {
    try {
      const confirmer = window.confirm(
        "Are you sure you want to delete this School? You cannot undo this action."
      );
      if (confirmer) {
        const res = await deleteSchool(institution._id).unwrap()
        if(!error){
          toast.warn("School deleted successfully!");

        }
        else{
          console.log(error)
        }
     
      }
    } catch (error) {
      console.log(error)

    }
  };
  return (
    <div
      className="bg-white rounded-md shadow"
    >
      
        <Link to={`/schools/${institution._id}`}>
          <div className="">
          <div
            key={institution.name}
            className=" flex flex-col rounded-lg bg-white text-center "
          >
            <div>
           
              <img
                className="mx-auto h-48 w-full flex-shrink-0 object-cover rounded-md"
                src={institution?.images[0]&&institution.images[0]||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYESPV6q_MWDslES3T3kQ7b0LKfuGdVT6kTw&usqp=CAU'}
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col p-2">
              <h3 className="mt-2 text-base font-medium text-gray-900">
                {institution.name}
              </h3>
              <div className=" text-midnight text-sm">{institution.country}</div>
            
            </div>
    
          </div>
         
          </div>

        </Link>
       { user?.role=="admin"&&<div className="w-full pr-2 flex flex-row-reverse ">
        <div className=" flex space-x-2 items-center">

        <Link to={`/schools/editSchool/${institution._id}`}>
        <div className=" text-blue-500 text-sm px-4 py-2">
        Edit
        </div>
       </Link>
       <div className=" text-sm p-1 cursor-pointer text-red-500" onClick={delete_School}>
        Delete
       </div>
       </div>
       </div>}
       <ToastContainer />
    </div>
  );
}
