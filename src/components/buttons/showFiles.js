import { useEffect, useRef, useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { updateUser } from "../../data/api/authenticatedRequests";

function ShowMenu({ docs }) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();
  const editUser = async (data) => {
    const res = await updateUser(data);
    if (res && res.status == 200) {
      window.location.reload();
    }
  };
  UseOnClickOutside(ref, () => setShowMenu(false));
  return (
    <div ref={ref}>
      <div
        className=" p-1 cursor-pointer "
        onClick={() => setShowMenu(!showMenu)}
      >
        View
      </div>
      <div className=" relative  z-50 ">
        {showMenu && (
          <div className="   left-10  p-1 bg-[#184061] text-gray-200 rounded-md   text-center">
            <div className="font-bold">Files</div>
            {docs?.BACertificate && (
              <a
                className=" flex items-center py-1 space-x-2 px-2 hover:bg-gray-200 cursor-pointer rounded-sm hover:text-[#184061]"
                href={docs?.BACertificate}
              >
                <div className="">
                  <BsClockHistory className="" />
                </div>
                <div className="font-normal ">Bachelors Certificate</div>
              </a>
            )}
            {docs?.BATranscript && (
              <a
                className=" flex items-center py-1 space-x-2 px-2 hover:bg-gray-200 cursor-pointer rounded-sm hover:text-[#184061]"
                href={docs?.BATranscript}
              >
                <div className="">
                  <BsClockHistory className="" />
                </div>
                <div className="font-normal ">Transcript</div>
              </a>
            )}
            {docs?.resume && (
              <a
                className=" flex items-center py-1 space-x-2 px-2 hover:bg-gray-200 cursor-pointer rounded-sm hover:text-[#184061]"
                href={docs?.resume}
              >
                <div className="">
                  <BsClockHistory className="" />
                </div>
                <div className="font-normal ">Resume</div>
              </a>
            )}
            {docs?.recommendationLetter && (
              <a
                className=" flex items-center py-1 space-x-2 px-2 hover:bg-gray-200 cursor-pointer rounded-sm hover:text-[#184061]"
                href={docs?.recommendationLetter}
              >
                <div className="">
                  <BsClockHistory className="" />
                </div>
                <div className="font-normal ">Recommendation Letter</div>
              </a>
            )}
            {docs?.statementOfPurpose && (
              <a
                className=" flex items-center py-1 space-x-2 px-2 hover:bg-gray-200 cursor-pointer rounded-sm hover:text-[#184061]"
                href={docs?.statementOfPurpose}
              >
                <div className="">
                  <BsClockHistory className="" />
                </div>
                <div className="font-normal ">Statement Of Purpose</div>
              </a>
            )}
            {docs?.OLevelCertificate && (
              <a
                className=" flex items-center py-1 space-x-2 px-2 hover:bg-gray-200 cursor-pointer rounded-sm hover:text-[#184061]"
                href={docs?.OLevelCertificate}
              >
                <div className="">
                  <BsClockHistory className="" />
                </div>
                <div className="font-normal ">O Level certificate</div>
              </a>
            )}
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
export default ShowMenu;
