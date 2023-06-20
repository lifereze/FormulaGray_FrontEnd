import { useDeleteApplicationMutation } from "./adminAplicationsApiSlice";
import moment from "moment";
import { AiOutlineDelete } from "react-icons/ai";
import ShowApplicationMenu from "../../../../buttons/ShowApplicationMenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TableRow({ application }) {
  const [deleteApplication] = useDeleteApplicationMutation();
  const deleteOneApplication = async (student) => {
    const confirmer = window.confirm(
      "Are you sure you want to delete this application? You can not undo this action."
    );
    if (confirmer) {
      try {
        await deleteApplication({ id: application._id }).unwrap();

        toast("Application deleted successfully!");
      } catch (error) {
        console.error("Failed to delete the post", error);
      }
    }
  };
  return (
    <tr>
      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
        {moment(application?.createdAt).format("L")}
      </td>
      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
        {application?.studentId?.email}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-left text-sm font-medium">
        {application?.studentId?.firstName}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-left text-sm font-medium">
        {application?.studentId?.lastName}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-left text-sm font-medium">
        {application?.recruitmentPartnerId?.email}
      </td>
      <td className="whitespace-nowrap capitalize px-3 text-left py-4 text-sm text-blue-500">
        {application?.programmeId?.title}
      </td>
      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-blue-500">
        {application?.programmeId?.schoolId?.name}
      </td>

      <td className="whitespace-nowrap px-3 text-left py-4  capitalize text-sm text-gray-500">
        {application?.currentStage}
      </td>
      <td className="whitespace-nowrap py-4 px-3  text-left text-sm font-medium sm:pr-6">
        <div className=" flex space-x-1 items-center">
          <div
            className=" cursor-pointer p-1 hover:bg-gray-100 rounded-full "
            onClick={() => deleteOneApplication(application)}
          >
            <AiOutlineDelete className="text-xl text-red-500" />
          </div>

          <ShowApplicationMenu
            id={application?._id}
            student={application}
            role="admin"
          />
        </div>
      </td>
      <ToastContainer />
    </tr>
  );
}

export default TableRow;
