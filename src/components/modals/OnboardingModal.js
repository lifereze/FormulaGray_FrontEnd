import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { sendCanadianEmail } from "../../data/api/authenticatedRequests";
import Spinner from "../utils/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineCheck } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
function OnboardingModal({ setShowOnboardingModal }) {
  const initialize = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [student, setStudent] = useState(initialize);
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
        className="fixed w-full inset-0 z-75 pt-6 overflow-hidden flex justify-center items-end md:items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.6)" }}
      >
        <div className="shadow-xl modal-container bg-white text-black w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mx-auto rounded-t-lg md:rounded-lg z-100 overflow-y-auto max-h-full">
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
              <div className=" text-center  pt-2 w-full block  md:flex justify-evenly">
                <div className=" border-[#184061] flex space-x-2 md:mb-0 mb-2 items-center border text-gray-700 rounded-lg text-sm  py-1 px-2">
                  <div className=" text-xl">
                    <IoSchoolOutline className="" />
                  </div>
                  <div className="">Continuous Care Assistant-Halifax</div>
                </div> 
                <div className="border-[#184061] border  flex space-x-2 items-center   rounded-lg text-sm text-gray-700  py-1 px-2">
                  <div className=" text-xl">
                    <IoSchoolOutline className="" />
                  </div>
                  <div className="">Hospitality management- Vancouver</div>
                </div>
              </div>
              {error && (
                <div className=" text-center text-red-500 text-sm pt-2 w-full">
                  Please fill in all the details
                </div>
              )}
              <div className=" md:flex  justify-evenly block">
                <div className=" pt-6 hidden md:flex md:flex-col space-y-2">
                  <div className=" flex items-center space-x-2">
                    <div className=" text-xl  rounded-full bg-green-500 text-white p-1">
                      <AiOutlineCheck className="" />
                    </div>
                    <div className=" text-green-600 ">
                      Career pathway to PR in Canada
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" text-xl  rounded-full bg-green-500 text-white p-1">
                      <AiOutlineCheck className="" />
                    </div>
                    <div className=" text-green-600 ">
                      Pay Tuition after visa approval
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" text-xl  rounded-full bg-green-500 text-white p-1">
                      <AiOutlineCheck className="" />
                    </div>
                    <div className=" text-green-600 ">9 Months Program</div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" text-xl  rounded-full bg-green-500 text-white p-1">
                      <AiOutlineCheck className="" />
                    </div>
                    <div className=" text-green-600 ">
                      Guaranteed work placement after studies
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" text-xl  rounded-full bg-green-500 text-white p-1">
                      <AiOutlineCheck className="" />
                    </div>
                    <div className=" text-green-600 ">
                      Average annual salary- 40k CAD
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" text-xl  rounded-full bg-green-500 text-white p-1">
                      <AiOutlineCheck className="" />
                    </div>
                    <div className=" text-green-600 ">
                      Must be 21 years old - no other certificate required.
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" text-xl  rounded-full bg-green-500 text-white p-1">
                      <AiOutlineCheck className="" />
                    </div>
                    <div className=" text-green-600 ">
                      Partial scholarships available!
                    </div>
                  </div>
                </div>
                <div className="">
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
                    {(loading && <Spinner />) || (
                      <div className="">Register</div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default OnboardingModal;
