import React, { useEffect, useState } from "react";
import { GrFormEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { getAllRecruitmentPartners } from "../../../data/api/authenticatedRequests";
import { deleteUser } from "../../../data/api/authenticatedRequests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowMenu from "../../buttons/ShowMenu";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Table = () => {
  const [partners, setPartners] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPartners = async () => {
      try {
        setLoading(true);
        const res = await getAllRecruitmentPartners({
          role: "recruitmentPartner",
        });
        setPartners(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPartners();
  }, []);
  const deleteOnePartner = async (partner) => {
    setPartners((prev) => prev.filter((item) => item._id !== partner._id));
    const confirmer = window.confirm(
      "Are you sure you want to delete this song? You can not undo this action."
    );
    if (confirmer) {
      const res = await deleteUser(partner._id);

      console.log(res);
      if (res && res.status == 200) {
        toast("partner deleted successfully!");
      }
    }
  };

  return (
    <div className="px-4 sm:px-6  mr-2 no-scrollbar ">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-xl font-bold text-blue-500">partners</h1>
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
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Approval status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {!loading &&
                    partners &&
                    partners.map((partner) => (
                      <tr key={partner.email}>
                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {partner?.email}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.firstName}
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          {partner?.lastName}
                        </td>

                        <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                          {partner?.approvalStatus}
                        </td>
                        <td className="whitespace-nowrap py-4 px-2  text-left text-sm font-medium sm:pr-6">
                          <div className=" flex space-x-2 items-center">
                            <div
                              className=" cursor-pointer p-1 hover:bg-gray-100 rounded-full "
                              onClick={() => deleteOnePartner(partner)}
                            >
                              <AiOutlineDelete className="text-xl text-red-500" />
                            </div>
                            <ShowMenu />
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
