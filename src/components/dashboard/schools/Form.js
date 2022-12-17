import React, { useState, useEffect, useMemo } from "react";
import FileUpload from "../../uploads/FileUpload";
import { firebaseUploadImg, firebaseUploadDoc } from "../../../data/api/upload";
import { getDownloadURL } from "firebase/storage";
import Spinner from "../../utils/Spinner";
import { uploadSchool } from "../../../data/api/authenticatedRequests";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Form = (props) => {
  const initialize = {
    name: "",
    about: "",
    country: "",

    city: "",
    street: "",
  };
  const [{ name, about, country, city, street }, setSchool] =
    useState(initialize);
  const [isLoading, setIsLoading] = useState();

  const handleChange = (input) => {
    setSchool((prevState) => ({
      ...prevState,
      [input.target.name]: input.target.value,
    }));
    console.log(name, about, country, city, street);
  };
  const onSubmitHandler = async () => {
    setIsLoading(true);
    const res = await uploadSchool({
      name,
      about,
      country,
      city,
      street,
    });
    setIsLoading(false);
    console.log(res);
    if (res && res.status == 200) {
      toast("School uploaded  successfully!");
      setSchool(initialize);
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
                    School Details
                  </h3>
                  <div className="col-span-6 ">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      School name
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      autoComplete="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About School
                    </label>
                    <textarea
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="about"
                      id="about"
                      value={about}
                      rows="4"
                      autoComplete="about"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      onChange={(e) => handleChange(e)}
                      autoComplete="country-name"
                      value={country}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>America</option>
                      <option>Canada</option>
                      <option>UK</option>
                      <option>Europe</option>
                      <option>Australia</option>
                    </select>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="city"
                      id="city"
                      value={city}
                      autoComplete="city"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="street"
                      id="street"
                      value={street}
                      autoComplete="street"
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
