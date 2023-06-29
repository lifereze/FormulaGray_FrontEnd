import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { useAdminCreateCounsellorMutation } from "../counsellorApiSlice";
import Spinner from "../../../../utils/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateCounsellor({ setShowCreateCounsellor }) {
  const initialize = {
    email: "",

    firstName: "",
    lastName: "",
    role: "counselor",
  };
  const [adminCreateCounsellor, { isLoading, error }] =
    useAdminCreateCounsellorMutation();
  const [loading, setLoading] = useState(false);
  const [counsellor, setCounsellor] = useState(initialize);
  const handleChange = (input) => {
    setCounsellor((prevState) => ({
      ...prevState,
      [input.target.name]: input.target.value,
    }));
  };
  const uploadCounsellor = async () => {
    if (
      counsellor.email.length > 0 &&
      counsellor.firstName.length > 0 &&
      counsellor.lastName.length > 0
    ) {
      setLoading(true);
      try {
        const res = await adminCreateCounsellor(counsellor).unwrap();
        if (!error) {
          toast.success("Counsellor created successfully.");
          setShowCreateCounsellor(false);
        } else {
          console.log("This error", error.data.message);
          //   toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error.data.message);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div
        className="fixed w-full inset-0 z-75 overflow-hidden flex justify-center items-end md:items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.6)" }}
      >
        <div className="shadow-xl modal-container bg-white text-black w-full md:w-3/5 lg:w-3/5 xl:w-1/3 mx-auto rounded-t-lg md:rounded-lg z-100 overflow-y-auto max-h-full">
          <div className="modal-content text-left">
            <div className="flex w-full flex-row-reverse">
              <div
                className=" mt-1 mr-4 p-2 hover:bg-gray-200 hover:text-black rounded-lg cursor-pointer"
                onClick={() => setShowCreateCounsellor(false)}
              >
                <AiOutlineClose className="" />
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="  text-center font-semibold text-[#184061] ">
                Create a new Counsellor
              </div>

              <div className="py-1">
                <label
                  htmlFor="email"
                  className="text-xs 
         "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={counsellor.email}
                  onChange={handleChange}
                  className="w-full rounded-md text-black bg-transparent placeholder-white text-sm border focus:outline-none focus:ring-0 focus:border-bloow-blue "
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="py-1">
                <label
                  htmlFor="firstName"
                  className="text-xs 
         "
                >
                  First Name
                </label>
                <input
                  type="text"
                  value={counsellor.firstName}
                  onChange={handleChange}
                  name="firstName"
                  className="w-full rounded-md text-black border placeholder-white text-sm  focus:outline-none focus:ring-0 focus:border-bloow-blue bg-transparent"
                  placeholder="Enter First Name"
                  required
                />
              </div>
              <div className="py-1">
                <label
                  htmlFor="lastName"
                  className="text-xs 
         "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={counsellor.lastName}
                  onChange={handleChange}
                  className="w-full rounded-md text-black border placeholder-white text-sm  focus:outline-none focus:ring-0 focus:border-bloow-blue bg-transparent"
                  placeholder="Enter Last Name"
                  required
                />
              </div>

              <button
                className=" bg-[#184061] text-white mt-4 w-1/2 mx-auto text-center flex justify-center items-center rounded-md px-4 py-1"
                onClick={() => uploadCounsellor()}
              >
                {(loading && <Spinner />) || <div className="">Create</div>}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default CreateCounsellor;
