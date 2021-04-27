import React, { useEffect, useState } from "react";
import { PageHead } from "../components/PageHead";
import { withRouter } from "react-router-dom";
import { getTests } from "../api";

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
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Updated on
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Test Link
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {userData.length > 0 &&
                    userData.map((test) => (
                      <TableRow key={test.id} test={test} history={history} />
                    ))}
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
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="text-sm font-medium text-gray-900">{test.name}</div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">{test.subject}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span class="text-sm text-gray-900">{test.updated_at}</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span class="text-sm text-gray-900">{test.link}</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <button
        class="text-indigo-600 hover:text-indigo-900"
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
