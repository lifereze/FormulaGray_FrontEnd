import React from "react";
import { Navbar } from "./Navbar";
import {colors} from '../../constants/colors'
import {Card} from '../Card'
export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-1">
        <div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
            <div className="xl:col-span-5 xl:border-r xl:border-gray-200 xl:pr-8 ">
              <section aria-labelledby="activity-title" className="mt-2">
                <div>
                  <div className="divide-y flex flex-col justify-between divide-gray-200 md:flex-row">
                    <div className="flex my-2 ml-4 shadow text-center p-2 items-center justify-center">
                      <div className="text-xl">Total members</div>
                      <div>
                        <button
                          type="button"
                          className="inline-flex ml-2 items-center rounded border border-transparent px-2.5 py-1.5 text-xs font-medium text-red-500 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          20
                        </button>
                      </div>
                    </div>
                    <div className=" flex ml-4 my-2 shadow text-center p-2 items-center justify-center ">
                      <div className="text-xl">Active application</div>
                      <div>
                        <button
                          type="button"
                          className="inline-flex ml-2 items-center rounded border border-transparent px-2.5 py-1.5 text-xs font-medium text-red-500 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          8
                        </button>
                      </div>
                    </div>
                    <div className=" flex ml-4 my-2 shadow text-center p-2 items-center justify-center ">
                      <div className="text-xl">Accepted</div>
                      <div>
                        <button
                          type="button"
                          className="inline-flex ml-2 items-center rounded border border-transparent px-2.5 py-1.5 text-xs font-medium text-red-500 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          12
                        </button>
                      </div>
                    </div>
                    <div className=" flex ml-4 shadow text-center p-2 items-center justify-center ">
                      <div className="text-xl">Rejected</div>
                      <div>
                        <button
                          type="button"
                          className="inline-flex ml-2 items-center rounded border border-transparent px-2.5 py-1.5 text-xs font-medium text-red-500 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          0
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="flex  border-b border-[#0092D2] pb-2  flex-col ml-4">
                <div className="text-gray-500 mt-6">Programs</div>
              </div>
              <div className="grid grid-col-1 md:grid-cols-3 space-x-4 mt-3">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
