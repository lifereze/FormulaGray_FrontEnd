import React from "react";
import { Navbar } from "./Navbar";
import { Table } from "../Table";

export const Applications = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-1">
        <div>
          <div className="ml-2 lg:ml-36">
            <section aria-labelledby="activity-title" className="mt-6 xl:mt-8">
              <div>
                <div className="divide-y divide-gray-200">
                  <div className="text-center">
                    <div className="text-xl font-bold text-indigo-500">
                      <div>
                        <Table
                          heading="Applications"
                          buttonName="Add application"
                          buttonLink="/addStudent"
                          editLink="/viewEditStudent"
                        />
                      </div>
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
