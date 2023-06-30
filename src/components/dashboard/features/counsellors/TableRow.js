import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAdminDeleteCounsellorMutation } from "./counsellorApiSlice";
import { AiOutlineDelete } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function TableRow({ counsellor }) {
  console.log(counsellor);
  const [adminDeleteCounsellor, { error }] = useAdminDeleteCounsellorMutation();
  const deleteOnePartner = async () => {
    const confirmer = window.confirm(
      "Are you sure you want to delete this counsellor? You can not undo this action."
    );
    if (confirmer) {
      try {
        const res = await adminDeleteCounsellor(
          counsellor.counselor._id
        ).unwrap();
        if (!error) {
          toast("Counsellor deleted successfully!");
        }
      } catch (error) {
        console.log(error);
      }
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
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  flex items-center capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {counsellor?.numberOfRecruitmentPartners}
        {counsellor?.numberOfRecruitmentPartners > 0 ? (
          <Link
            to={`/counsellors/partners/${counsellor.counselor._id}`}
            className="text-xs text-blue-500 pl-2"
          >
            view
          </Link>
        ) : (
          <></>
        )}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {counsellor?.numberOfStudents}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {counsellor?.numberOfApplications}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {counsellor?.numberOfPendingApplications}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {counsellor?.numberOfAcceptedApplications}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {counsellor?.numberOfRejectedApplications}
      </td>

      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
        {counsellor?.approvalStatus}
      </td>
      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
        <Link
          to={`/assignPartners/${counsellor?.counselor?._id}`}
          className=" bg-blue-500 rounded-md cursor-pointer text-white px-2 py-1.5"
        >
          Assign Partner
        </Link>
      </td>
      <td className="whitespace-nowrap py-4 px-2  text-left text-sm font-medium sm:pr-6">
        <div className=" flex space-x-2 items-center">
          <div
            className=" cursor-pointer p-1 hover:bg-gray-100 rounded-full "
            onClick={() => deleteOnePartner()}
          >
            <AiOutlineDelete className="text-xl text-red-500" />
          </div>
          {/* <ShowMenu id={counsellor?._id} /> */}
        </div>
      </td>
      <ToastContainer />
    </tr>
  );
}

export default TableRow;
