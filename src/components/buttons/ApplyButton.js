import React, { useState, useEffect } from "react";
import { createApplication } from "../../data/api/authenticatedRequests";
import Spinner from "../utils/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ApplyButton({ student, programId, setStudents }) {
  const [isLoading, setIsLoading] = useState();
  const onApply = async () => {
    setIsLoading(true);
    const res = await createApplication({
      studentId: student._id,
      programmeId: programId,
    });
    console.log(res);
    setIsLoading(false);
    if (res && res.status == 200) {
      toast("Application went through successfully!");
      setStudents((prev) => prev.filter((item) => item._id !== student._id));
    }
  };
  return (
    <div>
      {(!isLoading && (
        <button
          onClick={() => onApply()}
          className="  inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Apply
        </button>
      )) || (
        <button className=" inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <Spinner />
        </button>
      )}
      <ToastContainer />
    </div>
  );
}

export default ApplyButton;
