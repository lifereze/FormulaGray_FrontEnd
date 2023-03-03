import { useEffect, useRef, useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { updateApplication } from "../../data/api/authenticatedRequests";
function ShowApplicationMenu({ id, setApplications, student }) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();
  UseOnClickOutside(ref, () => setShowMenu(false));
  const editApplication = async (data) => {
   
    try {
      const res = await updateApplication(id, data);

      if (res && res.status === 200) {
        window.location.reload();
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
          <div className=" left-10   p-1 bg-[#184061] text-gray-200 rounded-md   text-center">
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
