import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../../utils/Spinner";
import {
  uploadProgram,
  getSpecificProgram,
} from "../../../../data/api/authenticatedRequests";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
export const DuplicateForm = (props) => {
  const navigate = useNavigate();
  const initialize = {
    title: "",
    description: "",
  };
  const { id } = useParams();
  const [{ title, description }, setProgram] = useState(initialize);
  const [isLoading, setIsLoading] = useState();
  const [intakesArray, setIntakesArray] = useState([]);
  const [level, setLevel] = useState("");
  const [applicationFees, setApplicationFees] = useState(0);
  const [tuitionFees, setTuitionFees] = useState(0);
  const [school, setSchool] = useState();
  useEffect(() => {
    const getProgram = async () => {
      const res = await getSpecificProgram(id);
      if (res && res.status == 200) {
        setProgram((prevState) => ({
          ...prevState,
          title: res.data[0].title,
          description: res.data[0].description,
        }));
        setSchool(res.data[0].schoolId._id);
        setApplicationFees(res.data[0].applicationFees);
        setTuitionFees(res.data[0].tuitionFees);
        setLevel(res.data[0].level);
        setIntakesArray(res.data[0].intakes);
      }
    };
    getProgram();
  }, []);

  const handleChange = (input) => {
    setProgram((prevState) => ({
      ...prevState,
      [input.target.name]: input.target.value,
    }));
  };
  const onSubmitHandler = async () => {
    setIsLoading(true);
    const res = await uploadProgram({
      title,
      description,

      applicationFees,
      tuitionFees,
      schoolId: school,
      currency: "USD",
      intakes: intakesArray,
      level,
    });

    setIsLoading(false);
    if (res && res.status == 200) {
      toast("Program edited  successfully!");
      setProgram(initialize);
      navigate("/programs");
    }
  };
  const setIntakes = (kIntakes) => {
    const keyIntakes = [];
    kIntakes.map((kIntake) => {
      keyIntakes.push(kIntake.value);
    });
    setIntakesArray(keyIntakes);
  };
  return (
    <div className="">
      <div className="mt-10  sm:mt-0">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:col-span-1"></div>
          <div className="mt-5 md:col-span-4 md:mt-0">
            <div className=" shadow sm:rounded-md">
              <div className="bg-white pb-10  px-4 py-5 sm:p-6">
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
                    <label className="block text-sm font-medium text-gray-700">
                      Application Fee
                    </label>
                    <input
                      value={applicationFees}
                      onChange={(e) => {
                        setApplicationFees(e.target.value);
                      }}
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Tuition Fee
                    </label>
                    <input
                      value={tuitionFees}
                      onChange={(e) => {
                        setTuitionFees(e.target.value);
                      }}
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <div className=" my-1 text-left pb-1 text-sm font-medium text-gray-700">
                      Program Intakes
                    </div>
                    <Select
                      isMulti
                      name="intakes"
                      onChange={(e) => setIntakes(e)}
                      options={[
                        {
                          value: "winter",
                          label: "winter",
                        },
                        {
                          value: "summer",
                          label: "summer",
                        },
                        {
                          value: "autumn",
                          label: "autumn",
                        },
                        {
                          value: "spring",
                          label: "spring",
                        },
                      ]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                  <div className="col-span-6">
                    <div className=" my-1 text-left pb-1 text-sm font-medium text-gray-700">
                      Program Level
                    </div>
                    <select
                      name={"level"}
                      value={level}
                      className="w-full rounded-md border focus:outline-none focus:ring-0 focus:border-bloow-blue"
                      onChange={(e) => {
                        setLevel(e.target.value);
                      }}
                    >
                      {" "}
                      <option value="">Select Level</option>
                      <option value="highSchool">High School</option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelor">Bachelor</option>
                      <option value="masters">Masters</option>
                      <option value="phd">PHD</option>
                    </select>
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
