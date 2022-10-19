import React from "react";
import { Navbar } from "./Navbar";
import {Table} from '../Table'

export const Students = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-1">
        <div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
            <div className="xl:col-span-5 xl:border-r xl:border-gray-200 xl:pr-8 ">
              <section
                aria-labelledby="activity-title"
                className="mt-2 xl:mt-4"
              >
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className=" text-center">
                      <div>
                        <Table heading="Students" buttonName='Add student' buttonLink='/addStudent'/>
                      </div>
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
