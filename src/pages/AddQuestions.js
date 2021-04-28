import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { PageHead } from "../components/PageHead";
import { getQuestions, deleteQuestion } from "../api";
import { format } from "date-fns";

function AddQuestions({ history }) {
  const [questions, setQuestions] = useState([]);
  const { testId } = history.location.state;

  useEffect(() => {
    getQuestions(testId).then((res) => {
      setQuestions(res.data);
    });
  }, [testId]);

  return (
    <div className="h-100">
      <PageHead title="Add Questions" noButton />

      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Question Preview
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  All the questions added can be previewed here
                </p>
              </div>
            </div>
          </div>
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
                          Question
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
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {questions.length > 0 ? (
                        questions.map((question) => (
                          <TableRow
                            key={question.id}
                            question={question}
                            history={history}
                            testId={testId}
                          />
                        ))
                      ) : (
                        <p className="my-20 ml-10">
                          No Questions added yet. Click on add new.
                        </p>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr />
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
              onClick={(e) => {
                history.push({
                  pathname: "/new-question",
                  search: `?testId=${testId}`,
                  state: { testId },
                });
              }}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add new
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const TableRow = ({ question, history, testId }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="text-sm font-medium text-gray-900">
          {question.question}
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">
        {format(new Date(question.updated_at), "dd MMMM yyyy HH:mm")}
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <button
        className="text-indigo-600 hover:text-indigo-900"
        onClick={(e) => {
          history.push({
            pathname: "/new-question",
            state: {
              testId,
              questionId: question.id,
              questionToEdit: question.question,
              answerToEdit: question.answer,
              optionsToEdit: question.options,
            },
            search: `?testId=${testId}`,
          });
        }}
      >
        Edit question
      </button>
      <button
        className="text-red-600 ml-5 hover:text-indigo-900"
        onClick={(e) => {
          deleteQuestion(question.id).then((res) => {
            history.go(0);
          });
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default withRouter(AddQuestions);
