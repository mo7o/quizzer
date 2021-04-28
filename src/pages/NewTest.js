import React, { useState } from "react";
import { PageHead } from "../components/PageHead";
import { createTest } from "../api";

export default function Test({ history }) {
  const [state, setState] = useState({
    link: Math.random().toString(36).substring(2),
    of_user: history.location.state.userId,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createTest(state).then((res) => {
      history.push({
        pathname: "/tests",
      });
    });
  };

  return (
    <div className="h-100">
      <PageHead title="Create New Test" noButton />
      {console.log(history)}
      <div className="max-w-7xl mx-auto">
        <div className="md:grid  md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Test Information
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Enter test name and subject related to this test
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="grid">
                    <label className="block text-sm font-medium text-gray-700">
                      Test name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter test name"
                      onChange={(e) => handleChange(e)}
                      className="mt-1 focus:ring-indigo-500 h-11 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="grid">
                    <label className="block text-sm font-medium text-gray-700">
                      Test subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter test subject"
                      onChange={(e) => handleChange(e)}
                      className="mt-1 focus:ring-indigo-500 h-11 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="px-4 py-3 pb-6 bg-white text-right sm:px-6">
                  <button
                    onClick={(e) => {
                      history.push({
                        pathname: "/tests",
                      });
                    }}
                    className="inline-flex justify-center py-2 px-4 mx-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create Test
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
