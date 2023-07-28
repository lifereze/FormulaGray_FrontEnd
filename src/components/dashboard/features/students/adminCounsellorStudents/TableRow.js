import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ShowFiles from "../components/ShowFiles";
import { useAdminDeleteCounsellorStudentMutation } from "./adminCounsellorStudentsApiSlice";
function TableRow({ student }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { id } = useParams();
  const [adminDeleteCounsellorStudent, { isLoading, error }] =
    useAdminDeleteCounsellorStudentMutation();
  const deleteOnestudent = async (student) => {
    const confirmer = window.confirm(
      "Are you sure you want to delete this student? You can not undo this action."
    );
    if (confirmer) {
      const res = await adminDeleteCounsellorStudent(student._id);
      if (!error) {
        toast("Student deleted successfully!");
      }
    }
  };
  return (
    <tr key={student.email}>
      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
        {student?.email}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
          "text-gray-900"
        )}
      >
        {student?.firstName}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left text-sm font-medium",
          "text-gray-900"
        )}
      >
        {student?.lastName}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {student?.location?.country}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {student?.educationLevel}
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
          "text-gray-900"
        )}
      >
        {(Object.keys(student?.documents ? student?.documents : {})?.length >
          0 && <ShowFiles docs={student?.documents} />) || (
          <Link to={`/student/edit/${student?._id}`}>Upload Docs</Link>
        )}
      </td>
      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
        <Link
          to={`/counsellors/reassignStudent/${id}/${student._id}`}
          className=" bg-blue-500 rounded-md cursor-pointer text-white px-2 py-1.5"
        >
          Re-assign Counsellor
        </Link>
      </td>

      <td className="whitespace-nowrap py-4 px-2  text-left text-sm font-medium sm:pr-6">
        <div className=" flex space-x-2 items-center">
          <div
            className=" cursor-pointer p-1 hover:bg-gray-100 rounded-full "
            onClick={() => deleteOnestudent(student)}
          >
            <AiOutlineDelete className="text-xl text-red-500" />
          </div>
        </div>
      </td>
      <ToastContainer />
    </tr>
  );
}

export default TableRow;
