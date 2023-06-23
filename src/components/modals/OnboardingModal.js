import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { userStore } from "../../stores";
import { sendCanadianEmail } from "../../data/api/authenticatedRequests";
import Spinner from "../utils/Spinner";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OnboardingModal({ setShowOnboardingModal }) {
  const initialize = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [student, setStudent] = useState(initialize);
  const user = userStore((state) => state.user);
  const handleChange = (input) => {
    setStudent((prevState) => ({
      ...prevState,
      [input.target.name]: input.target.value,
    }));
  };
  const uploadstudent = async () => {
    if (
      student.email.length > 0 &&
      student.firstName.length > 0 &&
      student.lastName.length > 0 &&
      student.phoneNumber.length > 0
    ) {
      setLoading(true);
      try {
        console.log(student.email);
        const res = await sendCanadianEmail({
          email: student.email,
          firstName: student.firstName,
          lastName: student.lastName,
          phoneNumber: student.phoneNumber,
        });

        if (res.status == 200) {
          toast.success("Details sent successfully.");

          setShowOnboardingModal(false);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }

      setShowOnboardingModal(false);
    } else {
      return setError(true);
    }

    setLoading(false);
    setShowOnboardingModal(false);
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
                onClick={() => setShowOnboardingModal(false)}
              >
                <AiOutlineClose className="" />
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="  text-center font-semibold text-[#184061] ">
                Earn a Canadian Qualification and Work Experience.
              </div>
              <div className=" text-center text-sm pt-2 w-full">
                Programs in Vancouver and Halifax.
              </div>
              {error && (
                <div className=" text-center text-red-500 text-sm pt-2 w-full">
                  Please fill in all the details
                </div>
              )}

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
                  value={student.email}
                  onChange={handleChange}
                  className="w-full rounded-md text-black bg-transparent  text-sm border focus:outline-none focus:ring-0 focus:border-bloow-blue "
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
                  value={student.firstName}
                  onChange={handleChange}
                  name="firstName"
                  className="w-full rounded-md text-black border  text-sm  focus:outline-none focus:ring-0 focus:border-bloow-blue bg-transparent"
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
                  value={student.lastName}
                  onChange={handleChange}
                  className="w-full rounded-md text-black border  text-sm  focus:outline-none focus:ring-0 focus:border-bloow-blue bg-transparent"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
              <div className="py-1">
                <label
                  htmlFor="phone"
                  className="text-xs 
         "
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={student.phoneNumber}
                  onChange={handleChange}
                  className="w-full rounded-md text-black border  text-sm  focus:outline-none focus:ring-0 focus:border-bloow-blue bg-transparent"
                  placeholder="Enter phone eg +234713799975"
                  required
                />
              </div>

              <button
                onClick={uploadstudent}
                className=" bg-[#184061] text-white mt-4 w-1/2 mx-auto text-center flex justify-center items-center rounded-md px-4 py-1"
              >
                {(loading && <Spinner />) || <div className="">Register</div>}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default OnboardingModal;
