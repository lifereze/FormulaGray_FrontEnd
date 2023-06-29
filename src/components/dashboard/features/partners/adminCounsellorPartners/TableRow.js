import ShowMenu from "./ShowMenu";
import { AiOutlineDelete } from "react-icons/ai";
import { useAdminDeleteCounsellorPartnerMutation } from "./adminCounsellorPartnersApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function TableRow({ partner }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { id } = useParams();
  const [adminDeleteCounsellorPartner, { isLoading, error }] =
    useAdminDeleteCounsellorPartnerMutation();
  const deleteOnePartner = async (partner) => {
    const confirmer = window.confirm(
      "Are you sure you want to delete this partner? You can not undo this action."
    );
    if (confirmer) {
      const res = await adminDeleteCounsellorPartner(partner._id);
      if (!error) {
        toast("Partner deleted successfully!");
      }
    }
  };
  return (
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
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {partner?.business?.location?.country}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {partner?.recruitmentDetails?.averageCharge}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {partner?.recruitmentDetails?.averageStudentsAnnually}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {partner?.recruitmentDetails?.studentsTo.map((country) => (
          <span>{country},</span>
        ))}
      </td>

      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-blue-500">
        <Link to={`/adminApplications/${id}/${partner._id}`}>
          View Applications
        </Link>
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
          <ShowMenu id={partner?._id} />
        </div>
      </td>
      <ToastContainer />
    </tr>
  );
}

export default TableRow;
