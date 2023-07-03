import React, { useState, useEffect } from "react";
import { createApplication } from "../../../../data/api/authenticatedRequests";

function TableCard(student, program) {
  useEffect(() => {}, []);
  const [isLoading, setIsLoading] = useState();
  const [currentStudent, setCurentStudent] = useState(student);
  const onApply = async (id) => {
    setIsLoading(true);
    const res = await createApplication({
      studentId: id,
      programmeId: program._id,
    });
    setIsLoading(false);
  };
  return (
    <div>
      {student && student.location && student.applicationDetails && (
        <tr key={student.email}>
          <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
            {student.email}
          </td>
          <td className="whitespace-nowrap py-4 px-3 text-left text-sm font-medium">
            {student.firstName}
          </td>
          <td className="whitespace-nowrap py-4 px-3 text-left text-sm font-medium">
            {student.lastName}
          </td>
          <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
            {student.location?.country}
          </td>
          <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
            FormularGray
          </td>
          <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
            Refferal
          </td>
          <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
            Bachelors
          </td>
          <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
            {student.previousApplications?.length}
          </td>
          <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
            Walk In
          </td>
          <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
            {(student.applicationDetails.status && "Complete") || "Pending"}
          </td>
          <td className="whitespace-nowrap py-4 px-3  text-left text-sm font-medium sm:pr-6"></td>
        </tr>
      )}
    </div>
  );
}

export default TableCard;
