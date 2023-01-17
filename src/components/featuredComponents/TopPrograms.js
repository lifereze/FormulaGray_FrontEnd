import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { TopPrograms } from "../../data/api/authenticatedRequests";
import { Link } from "react-router-dom";
function TopPrrograms() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPrograms = async () => {
      setLoading(true);
      const res = await TopPrograms();
      if (res.status == 200) {
        setPrograms(res.data);
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);
  return (
    <div className=" w-full overflow-x-scroll">
      <table className="w-full overflow-x-scroll divide-y divide-gray-300">
        <thead className="bg-[#184061]">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6"
            >
              Rank
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
            >
              Applications
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {!loading &&
            programs &&
            programs.map((program, index) => (
              <tr>
                <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap capitalize   text-left px-3 py-4 text-sm text-gray-500">
                  {program?.programme[0].title}
                </td>
                <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                  {program.count}
                </td>
                <td className="whitespace-nowrap text-center text-indigo-600 hover:text-indigo-900 px-3 py-4 text-sm  cursor-pointer">
                  <Link
                    to={`/programs/${program?.programme[0]._id}`}
                    className="px-2 py-1"
                  >
                    Apply
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopPrrograms;
