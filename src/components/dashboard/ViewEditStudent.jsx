import React from "react";
import { Navbar } from "./Navbar";
import {EditStudent} from './EditStudent'
export const ViewEditStudent = (props) => {
  return (
    <div>
      <Navbar />
      <main className="flex-1">
        <div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
            <div className="xl:col-span-6 xl:border-r xl:border-gray-200 xl:pr-8 ">
              <section aria-labelledby="activity-title" className="">
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className="pt-6 text-center">
                      <EditStudent />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
