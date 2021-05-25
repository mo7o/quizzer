import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getTest } from "../api";
import { calculateScore } from "../constants";

function TakeTest(props) {
  const [activeView, setActiveView] = useState(0);
  const [testData, setTestData] = useState({});
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const testId = urlParams.get("testId");

    getTest(testId).then((res) => {
      setTestData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="bg-gray-100 h-screen p-24">
      <div class="container mx-auto bg-white p-12">
        {activeView === 0 && (
          <WelcomeView testData={testData} setActiveView={setActiveView} />
        )}
        {activeView === 1 && (
          <TestView
            testData={testData}
            questions={testData.questions}
            setActiveView={setActiveView}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
          />
        )}
        {activeView === 2 && (
          <ResultView testData={testData} userAnswers={userAnswers} />
        )}
      </div>
    </div>
  );
}

const ResultView = ({ userAnswers, testData }) => {
  const score = calculateScore(userAnswers, testData.questions);

  return (
    <>
      <h2 className="text-lg font-normal text-gray-900 text-center">
        Thank you for attempting the test!
      </h2>
      <h2 className="text-3xl font-semibold text-gray-900 text-center">
        Your score is{" "}
        {userAnswers &&
          testData &&
          `${score.correctCount} out of ${score.totalCount}`}
      </h2>
    </>
  );
};

const TestView = ({
  questions,
  setActiveView,
  userAnswers,
  setUserAnswers,
}) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [currAns, setCurrAns] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setCurrAns(e.target.value);
  };

  const handleNext = () => {
    setUserAnswers([...userAnswers, currAns]);
    setCurrAns(0);
    setActiveQuestion(activeQuestion + 1);
    console.log(userAnswers);
  };

  const handleSubmit = () => {
    setUserAnswers([...userAnswers, currAns]);
    setActiveView(2);
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-900 text-center">
        Question {activeQuestion + 1} of {questions?.length}
      </h2>
      <div class="grid grid-cols-2 gap-4 mt-12">
        <div>
          <h2 className="text-lg font-normal text-gray-900">
            {questions && questions[activeQuestion].question}
          </h2>
        </div>
        <div>
          <div>
            <fieldset>
              <div>
                <legend class="text-base font-medium text-gray-900">
                  Your Options
                </legend>
                <p class="text-sm text-gray-500">Choose one of the below</p>
              </div>
              <div class="mt-4 space-y-4">
                {questions &&
                  questions[activeQuestion].options?.map((option) => (
                    <div class="flex items-center">
                      <input
                        id={`${activeQuestion}_${option.name}`}
                        name={`question_${activeQuestion}`}
                        value={option.name}
                        onChange={(e) => handleChange(e)}
                        type="radio"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        for={`${activeQuestion}_${option.name}`}
                        class="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {option.value}
                      </label>
                    </div>
                  ))}
              </div>
            </fieldset>
          </div>
          <div className="mt-8 space-y-6 flex justify-end">
            <button
              type="submit"
              onClick={() => {
                `${activeQuestion + 1}` === `${questions?.length}`
                  ? handleSubmit()
                  : handleNext();
              }}
              className="group relative w-25 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              {`${activeQuestion + 1}` === `${questions?.length}`
                ? "Submit Test"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const WelcomeView = ({ testData, setActiveView }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    rollno: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveView(1);
  };

  return (
    <>
      {" "}
      <h2 className="text-3xl font-semibold text-gray-900 text-center">
        Welcome!
      </h2>
      <div class="grid grid-cols-2 gap-4 mt-12">
        <div>
          <h2 className="text-lg font-normal text-gray-900">
            You are about to take a{" "}
            <span className="font-semibold">{testData?.subject} </span> test, on
            topic <span className="font-semibold">{testData?.name}</span>.{" "}
            <br /> This test is created by your teacher{" "}
            <span className="font-semibold">
              {testData?.of_user?.username}!
            </span>
          </h2>
          <h2 className="text-lg font-normal text-gray-900 mt-12">
            Best of luck!
          </h2>
        </div>
        <div>
          {" "}
          <h2 className="text-lg font-normal text-gray-900">
            Please confirm you information
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm-space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                  value={userInfo.name || ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="my-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="rollno"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Roll number"
                  value={userInfo.rollno || ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Email address"
                  value={userInfo.email || ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Start Test
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(TakeTest);
