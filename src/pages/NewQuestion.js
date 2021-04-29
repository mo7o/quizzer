import React, { useState } from "react";
import { PageHead } from "../components/PageHead";
import { createQuestion, updateQuestion } from "../api";

export default function AddQuestions({ history }) {
  const { questionId, questionToEdit, answerToEdit, optionsToEdit } =
    history.location.state || null;

  const [options, setOptions] = useState(
    optionsToEdit || [
      { name: "a", value: "" },
      { name: "b", value: "" },
      { name: "c", value: "" },
      { name: "d", value: "" },
    ]
  );
  const [question, setQuestion] = useState({
    question: questionToEdit || "",
    of_test: history?.location.state.testId,
    answer: answerToEdit || "",
  });

  const handleQuestionChange = (e) => {
    const { value } = e.target;

    setQuestion({ ...question, question: value });
  };

  const handleOptionsChange = (n) => (e) => {
    const { name, value } = e.target;

    let newOptions = options.map((option, i) => {
      if (option.name === name) {
        return { ...option, name, value };
      } else {
        return option;
      }
    });

    setOptions(newOptions);
  };

  const handleAnswerChange = (e) => {
    const { value } = e.target;

    setQuestion({ ...question, answer: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (questionId) {
      const payload = {
        question: question.question,
        of_test: question.of_test,
        options,
        id: questionId,
        answer: question.answer,
      };

      updateQuestion(payload).then((res) => {
        const testId = res.data.of_test.id;
        history.push({
          pathname: "/add-questions",
          state: { testId },
          search: `?testId=${testId}`,
        });
      });
    } else {
      const payload = {
        question: question.question,
        of_test: question.of_test,
        options,
        answer: question.answer,
      };

      createQuestion(payload, questionId).then((res) => {
        const testId = res.data.of_test.id;
        history.push({
          pathname: "/add-questions",
          state: { testId },
          search: `?testId=${testId}`,
        });
      });
    }
  };

  return (
    <div className="h-100">
      <PageHead title="Create New Questions" noButton />

      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="md:grid md:grid-cols-2 md:gap-10">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Question
                </h3>
              </div>
              <div className="mt-4">
                <textarea
                  name="question"
                  value={question.question || ""}
                  onChange={handleQuestionChange}
                  rows="15"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Question here..."
                ></textarea>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="sm:overflow-hidden">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Select the right answer
                </h3>
              </div>

              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="overflow-hidden sm:rounded-md">
                  <fieldset>
                    <div className="mt-4 space-y-4">
                      {options.map((option) => (
                        <InputRadio
                          option={option}
                          key={option.name}
                          defaultChecked={question.answer}
                          handleOptionsChange={handleOptionsChange}
                          handleAnswerChange={handleAnswerChange}
                        />
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              onClick={(e) => {
                history.push({
                  pathname: "/add-questions",
                  state: { testId: question.of_test },
                  search: `?testId=${question.of_test}`,
                });
              }}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button>

            <button
              type="submit"
              onClick={onSubmit}
              className="inline-flex justify-center py-2 px-4 mx-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputRadio({
  handleOptionsChange,
  handleAnswerChange,
  option,
  defaultChecked,
}) {
  return (
    <div className="flex items-start items-center px-2">
      <div className="flex items-center h-5">
        <input
          name="answer"
          onChange={handleAnswerChange}
          type="radio"
          defaultChecked={defaultChecked}
          value={option.name}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm w-full">
        <input
          type="text"
          name={option.name}
          value={option.value}
          onChange={handleOptionsChange(option.name)}
          placeholder={`Option ${option.name}`}
          className="mt-1 focus:ring-indigo-500 h-11 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
