import { useEffect, useRef, useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  updateApplication,
  counsellorUpdateApplication,
} from "../../data/api/authenticatedRequests";
import { useUpdateAdminApplicationMutation } from "../dashboard/features/applications/adminApplications/adminAplicationsApiSlice";
import { useUpdateCounsellorApplicationMutation } from "../dashboard/features/applications/counsellorApplications/counsellorApplicationsApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ShowApplicationMenu({ id, student, role }) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();
  const [updateAdminApplication] = useUpdateAdminApplicationMutation();
  const [updateCounsellorApplication] =
    useUpdateCounsellorApplicationMutation();
  UseOnClickOutside(ref, () => setShowMenu(false));
  const editApplication = async (data) => {
    setShowMenu(false);

    try {
      console.log(role);
      if (role === "counsellor") {
        try {
          const res = await updateCounsellorApplication({
            id,
            data: { updatedFields: data },
          });
          toast("Application updated successfully!");

          console.log(res);
        } catch (error) {
          console.log(error);
        }
      } else {
        const res = await updateAdminApplication({ id, data });
        toast("Application updated successfully!");
      }
    } catch (error) {}
  };
  return (
    <div ref={ref}>
      <div className=" p-1 cursor-pointer " onClick={() => setShowMenu(true)}>
        <IoEllipsisVertical className="" />
      </div>
      <div className=" relative  ">
        {showMenu && (
          <div className="left-10   p-1 bg-[#184061] text-gray-200 rounded-md   text-center">
            <div className="font-bold">Status</div>
            <div
              className=" flex items-center py-1 space-x-2 px-2 hover:bg-gray-200 cursor-pointer rounded-sm hover:text-[#184061]"
              onClick={() => editApplication({ currentStage: "pending" })}
            >
              <div className="">
                <BsClockHistory className="" />
              </div>
              <div className="font-normal ">Pending</div>
            </div>
            <div
              className=" flex items-center py-1 space-x-2 px-2 hover:bg-gray-200 cursor-pointer rounded-sm hover:text-[#184061]"
              onClick={() => editApplication({ currentStage: "rejected" })}
            >
              <div className="">
                <MdCancel className=" text-lg " />
              </div>
              <div className="font-normal ">Rejected</div>
            </div>
            <div
              className=" flex items-center py-1 space-x-2 px-2 hover:bg-gray-200 cursor-pointer rounded-sm hover:text-[#184061]"
              onClick={() => editApplication({ currentStage: "accepted" })}
            >
              <div className="">
                <AiOutlineCheckCircle className="" />
              </div>
              <div className="font-normal ">Accepted</div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
function UseOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
export default ShowApplicationMenu;
