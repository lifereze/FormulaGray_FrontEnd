import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignedPartners } from "./assignPartnersSlice";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function TableRow({ partner }) {
  const dispatch = useDispatch();
  return (
    <tr key={partner.email}>
      <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500 ">
        <input
          type="checkbox"
          className=" cursor-pointer"
          id="partner"
          name="partner"
          onChange={(e) => dispatch(addAssignedPartners(e.target.value))}
          value={partner?._id}
        />
      </td>
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
    </tr>
  );
}

export default TableRow;
