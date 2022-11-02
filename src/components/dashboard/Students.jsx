import React from "react";
import { Navbar } from "./Navbar";
import { Table } from "../Table";

export const Students = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-1">
        <div>
          <div className="ml-2 lg:ml-36">
              <section
                aria-labelledby="activity-title"
                className="mt-2 xl:mt-4"
              >
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className=" text-center">
                      <div>
                        <Table
                          heading="Students"
                          buttonName="Add student"
                          buttonLink="/addStudent"
                          editLink="/viewEditStudent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </div>
      </main>
    </div>
  );
};
