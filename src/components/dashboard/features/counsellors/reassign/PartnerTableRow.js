import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAdminReassignPartnerMutation } from "../counsellorApiSlice";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Spinner from "../../../../utils/Spinner";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function PartnerTableRow({ counsellor }) {
  console.log(counsellor);
  const { partnerId, oldCounsellorId } = useParams();
  const [adminReassignPartner, { isLoading, error }] =
    useAdminReassignPartnerMutation();
  const reAssignPartner = async () => {
    try {
      const res = await adminReassignPartner({
        counsellorId: oldCounsellorId,
        data: {
          newCounselorId: counsellor.counselor._id,
          recruitmentPartnerId: partnerId,
        },
      }).unwrap();
      if (!error) {
        toast("Partner reassigned successfully!");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr key={counsellor?.counselor?.email}>
      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
        {counsellor?.counselor?.email}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
          "text-gray-900"
        )}
      >
        {counsellor?.counselor?.firstName}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
          "text-gray-900"
        )}
      >
        {counsellor?.counselor?.lastName}
      </td>

      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
        <button
          className=" bg-blue-500 rounded-md cursor-pointer text-white px-2 py-1.5"
          onClick={reAssignPartner}
        >
          {isLoading ? <Spinner /> : "re-assign Partner"}
        </button>
      </td>

      <ToastContainer />
    </tr>
  );
}

export default PartnerTableRow;
