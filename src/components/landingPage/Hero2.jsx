import React from "react";
import { colors } from "../../constants/colors";
export const Hero2 = () => {
  return (
    <main className="mt-1">
      <div>
        {/* Hero card */}
        <div
          className="w-full flex items-center justify-center"
          style={{ backgroundColor: colors.primary }}
        >
          <div className="w-full md:w-1/2 flex flex-col items-center px-4 sm:px-6 py-16 lg:px-8 ">
            <div className="w-full flex flex-col items-center text-white font-bold tracking-tight text-3xl lg:text-5xl">
              <span className="block">Want to study overseas?</span>
              <span className="text-xl md:text-2xl lg:text-3xl font-normal">
                We make sure you're admitted
              </span>
            </div>
            <div className="w-full text-[white] text-lg text-justify mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="flex flex-col gap-y-3">
                <div className="flex">
                  <div className="mt-1.5 md:mt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 border rounded-full mr-1.5"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>We make sure your documents are right & up to date.</div>
                </div>
                <div className="flex flex-row ">
                  <div className="mt-1.5 md:mt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 border rounded-full mr-1.5 bg-[#07443f]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    Our education experts will do the negotiation on your
                    behalf.
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mt-1.5 md:mt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 border rounded-full mr-1.5 bg-[#07443f]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>We provide VISA application assistant.</div>
                </div>
                <div className="flex flex-row ">
                  <div className="mt-1.5 md:mt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 border rounded-full mr-1.5 bg-[#07443f]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    Give us your interests and our system will suggest the best
                    program for you.
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mt-1.5 md:mt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 border rounded-full mr-1.5 bg-[#07443f]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>Get matched with the best scholarship deals.</div>
                </div>
                <div className="flex flex-row">
                  <div className="mt-1.5 md:mt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 border rounded-full mr-1.5 bg-[#07443f]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    Our advisors will review your documents and give you expert
                    advise before we submit your application.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
