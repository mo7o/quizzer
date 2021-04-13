import React from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import mcq from "../assets/images/mcq.png";
import scq from "../assets/images/scq.png";
import truefalse from "../assets/images/truefalse.png";
import custom from "../assets/images/custom.png";

export default function QuestionType({ toggleQuestionSelect }) {
  return (
    <Modal>
      <div class="flex justify-between">
        <div class="sm:flex sm:items-start mb-4">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Select Question Type
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Select from the type below to add your question
              </p>
            </div>
          </div>
        </div>
        <button className="hover:bg-gray-900 hover:text-white h-full rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <hr />
      <div className="flex pt-7 pb-5 px-14">
        <Link to="/new-question">
          <div
            onClick={toggleQuestionSelect}
            className="text-center mr-10 px-8 hover:bg-gray-900 hover:shadow-lg hover:text-gray-200 cursor-pointer rounded-lg pb-4"
          >
            <img src={scq} alt="scq" width="120" />
            <h3 className="font-semibold">Multiple Choice</h3>
            <p className="text-sm">
              One correct <br /> answer
            </p>
          </div>
        </Link>
        <div className="text-center mr-10 px-8 hover:bg-gray-900 hover:shadow-lg hover:text-gray-200 cursor-pointer rounded-lg pb-4">
          <img src={mcq} alt="mcq" width="120" />
          <h3 className="font-semibold">Multiple Response</h3>
          <p className="text-sm">
            More than one <br /> correct answer
          </p>
        </div>
        <div className="text-center mr-10 px-8 hover:bg-gray-900 hover:shadow-lg hover:text-gray-200 cursor-pointer rounded-lg pb-4">
          <img src={truefalse} alt="truefalse" width="120" />
          <h3 className="font-semibold">True or false</h3>
          <p className="text-sm">
            One correct <br /> answer
          </p>
        </div>
        <div className="text-center px-8 hover:bg-gray-900 hover:shadow-lg hover:text-gray-200 cursor-pointer rounded-lg pb-4">
          <img src={custom} alt="custom" width="120" />
          <h3 className="font-semibold">Short text</h3>
          <p className="text-sm">
            Require exact <br /> match
          </p>
        </div>
      </div>
    </Modal>
  );
}
