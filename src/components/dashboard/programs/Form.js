import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../utils/Spinner";
import { uploadProgram } from "../../../data/api/authenticatedRequests";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Form = (props) => {
  const initialize = {
    title: "",
    description: "",
    country: "",
    applicationFee: "",
    tuitionFees: "",
  };
  const { schoolId } = useParams();
  const [
    { title, description, country, applicationFees, tuitionFees },
    setProgram,
  ] = useState(initialize);
  const [isLoading, setIsLoading] = useState();

  const handleChange = (input) => {
    setProgram((prevState) => ({
      ...prevState,
      [input.target.name]: input.target.value,
    }));
    console.log(title, description, country, applicationFees, tuitionFees);
  };
  const onSubmitHandler = async () => {
    setIsLoading(true);
    const res = await uploadProgram({
      title,
      description,
      country,
      applicationFees,
      tuitionFees,
      schoolId: schoolId,
      currency: "USD",
    });
    setIsLoading(false);
    console.log(res);
    if (res && res.status == 200) {
      toast("Program uploaded  successfully!");
      setProgram(initialize);
    }
  };

  return (
    <div className="">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:col-span-1"></div>
          <div className="mt-5 md:col-span-4 md:mt-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 text-left gap-6">
                  <h3 className="text-lg font-semibold text-center leading-6 text-purple-900 col-span-6 ">
                    Program Details
                  </h3>
                  <div className="col-span-6 ">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Program Title
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      autoComplete="title"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Program description
                    </label>
                    <textarea
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="description"
                      id="description"
                      value={description}
                      rows="4"
                      autoComplete="description"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="applicationFees"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Application Fee
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="number"
                      name="applicationFees"
                      id="applicationFees"
                      value={applicationFees}
                      autoComplete="applicationFees"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="tuitionFees"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tuition Fee
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="number"
                      name="tuitionFees"
                      id="tuitionFees"
                      value={tuitionFees}
                      autoComplete="tuitionFees"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1"></div>
        </div>
      </div>
      {(!isLoading && (
        <button
          onClick={onSubmitHandler}
          className="ml-3 mt-6  inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      )) || (
        <button className="ml-3 mt-6 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <Spinner />
        </button>
      )}
      <ToastContainer />
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
};
