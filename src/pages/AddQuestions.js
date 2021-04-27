import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { PageHead } from "../components/PageHead";
import QuestionType from "./QuestionType";

function AddQuestions({ location }) {
  const [showSelectQuestion, setShowSelectQuestion] = useState(false);
  // const { testId } = history.location.state;

  const toggleQuestionSelect = () => {
    setShowSelectQuestion(!showSelectQuestion);
  };

  return (
    <div className="h-100">
      <PageHead title="Add Questions" noButton />
      {showSelectQuestion && (
        <QuestionType toggleQuestionSelect={toggleQuestionSelect} />
      )}
      {console.log(location)}
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
          <hr />
          <div className="px-4 py-3 pb-6 bg-white text-right sm:px-6">
            <button
              onClick={toggleQuestionSelect}
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

export default withRouter(AddQuestions);
