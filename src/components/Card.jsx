import React from "react";
import Campus from "../constants/images/campus.png";

export const Card = () => {
  return (
    <div className="space-y-2 mb-3">
      <div className="relative">
        <div className="absolute top-0 left-1 text-white">
          T Level - Education
          <br />
          and Childcare <br />
          (Occupational) Specialism (Assisting Teaching)
        </div>
        <img className="w-full h-48" src={Campus} />
      </div>

      <div>Cheshire Collage South and West - Ellesmere Port</div>
      <div className="flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <div>Ellesmere Port, North West, United Kingdom</div>
      </div>
      <div className="flex">
        <div className="font-bold mr-2">Tiution</div>
        <div>$4500 </div>
      </div>
      <div className="flex">
        <div className="font-bold mr-2">Application fee </div>
        <div>$4500 </div>
      </div>
      <div className="w-full flex justify-center m-2">
        <button
          type="button"
          className="w-3/4 py-2 rounded-2xl bg-indigo-500 text-white font-bold hover:bg-indigo-700"
        >
          Select student
        </button>
      </div>
    </div>
  );
};
