import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
function TableRow({partner}) {
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
                          <Link
                            to={`/counsellorStudents/${partner?._id}`}
                            className="bg-blue-500 shadow-md rounded-md text-white cursor-pointer px-2 py-1.5 "
                          >
                            View Students
                          </Link>
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 px-3 text-left  capitalize text-sm font-medium",
                            "text-gray-900"
                          )}
                        >
                          <Link
                            to={`/counsellorapplications/stage/${partner?._id}`}
                            className="bg-blue-500 shadow-md rounded-md text-white cursor-pointer px-2 py-1.5 "
                          >
                            View Applications
                          </Link>
                        </td>
                      </tr>
  )
}

export default TableRow
