import React, { useEffect, useState } from "react";
import { PageHead } from "../components/PageHead";
import { withRouter } from "react-router-dom";
import { getTests } from "../api";
import { format } from "date-fns";

function Dashboard({ history }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (userData.length === 0) {
      const userId = localStorage.getItem("userId");
      // setUserData([...userData, history?.location.state.userData]);
      getTests(userId).then((res) => {
        setUserData(res.data);
      });
    }
  }, [userData.length]);

  return (
    <div className="h-screen">
      {console.log("===>>>", userData)}
      <PageHead title="My Tests" />
      <div className="flex flex-col">
        <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Updated on
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Test Link
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userData.length > 0 ? (
                    userData.map((test) => (
                      <TableRow key={test.id} test={test} history={history} />
                    ))
                  ) : (
                    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TableRow = ({ test, history }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="text-sm font-medium text-gray-900">{test.name}</div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">{test.subject}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className="text-sm text-gray-900">
        {format(new Date(test.updatedAt), "dd MMMM yyyy HH:mm")}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className="text-sm text-gray-900">{test.link}</span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <button
        className="text-indigo-600 hover:text-indigo-900"
        onClick={(e) => {
          history.push({
            pathname: "/add-questions",
            state: { testId: test.id },
            search: `?testId=${test.id}`,
          });
        }}
      >
        Add questions
      </button>
    </td>
  </tr>
);

export default withRouter(Dashboard);
