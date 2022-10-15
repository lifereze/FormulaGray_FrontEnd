import React from "react";
import { colors } from "../../constants/colors";

export const Hero3 = () => {
  return (
    <div className="items-center mt-10">
      <div className="w-full flex flex-col px-4 sm:px-6 py-8 lg:px-8">
        <div className="w-full m-2 mb-10 font-bold tracking-tight text-center text-3xl lg:text-5xl">
          Why Formulagray?
        </div>
        <div className="flex m-3 items-center mb-20">
          <div>
            <img
              className="h-24 w-48 md:h-48 md:w-48 rounded-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Image"
            />
          </div>
          <div className="text-normal font-bold pl-4">
            <span>
              Our <span style={{ color: colors.primary }}>Support team</span>{" "}
              and <br />
            </span>{" "}
            institutions attend to your burning questions in less than 10
            minutes.
          </div>
        </div>
        <div className="flex flex-row-reverse w-full">
          <div className="flex m-3 items-center mb-20">
            <div className="text-normal font-bold pl-4">
              Get admitted to the{" "}
              <span style={{ color: colors.primary }}>
                World Class Universities.
              </span>
            </div>
            <div>
              <img
                className="h-24 w-48 ml-4 md:h-48 md:w-48 rounded-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1661717876697-1c47186f54fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Image"
              />
            </div>
          </div>
        </div>

        <div className="flex m-3 items-center">
          <div>
            <img
              className="h-24 w-48 md:h-48 md:w-48 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
              alt="Image"
            />
          </div>
          <div className="text-normal font-bold pl-4">
            <span style={{ color: colors.primary }}>Focus</span> on your studies
            and leave the rest to us
          </div>
        </div>
      </div>
    </div>
  );
};
