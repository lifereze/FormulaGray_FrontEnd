import { useState } from "react";

import { useGetCounsellorSpecificPartnerApplicationsQuery } from "./counsellorApplicationsApiSlice";
import { useParams } from "react-router-dom";
import { userStore } from "../../../../../stores";

import TableRow from "./TableRow";
export const SpecificPartnerTable = () => {
  const [status, setStatus] = useState();

  const { currentStage, partnerId } = useParams();
  const { data, isLoading, isSuccess, isFetching, refetch, isError, error } =
    useGetCounsellorSpecificPartnerApplicationsQuery(
      status
        ? {
            stage: { currentStage: status },
            partnerId: partnerId,
          }
        : currentStage
        ? {
            stage: { currentStage: status },
            partnerId: partnerId,
          }
        : {
            stage: undefined,
            partnerId: partnerId,
          },
      {
        refetchOnMountOrArgChange: true,
      }
    );

  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-xl font-bold text-blue-500">Applications</h1>
        </div>
        {isFetching && (
          <div className="">
            <h1 className=" text-blue-700 text-sm">Updating Applications</h1>
          </div>
        )}
        <div className="mt-4 sm:mt-0 ">
          <div className="">
            <div className="col-span-6 sm:col-span-3">
              <select
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                autoComplete="status"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">All Applications</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Apply Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      First name
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Last name
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Recruitment Partner
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Program
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      School
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Application status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {!isLoading &&
                    isSuccess &&
                    data.map((application) => (
                      <TableRow
                        key={application._id}
                        application={application}
                      />
                    ))}
                </tbody>
                {isLoading && <div className=" text-lg p-2">Loading</div>}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
