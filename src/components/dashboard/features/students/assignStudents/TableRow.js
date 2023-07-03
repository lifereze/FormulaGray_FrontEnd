import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignedStudents } from "./assignStudentsSlice";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function TableRow({ student }) {
  const dispatch = useDispatch();
  return (
    <tr key={student.email}>
      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500 ">
        <input
          type="checkbox"
          className=" cursor-pointer"
          id="partner"
          name="partner"
          onChange={(e) => dispatch(addAssignedStudents(e.target.value))}
          value={student?._id}
        />
      </td>
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

      <td className="whitespace-nowrap py-4 px-2  text-left text-sm font-medium sm:pr-6">
        <div className=" flex space-x-2 items-center"></div>
      </td>
    </tr>
  );
}

export default TableRow;
