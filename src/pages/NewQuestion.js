import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputCheck from "../components/InputCheck";
// import InputRadio from "../components/InputRadio";
import { PageHead } from "../components/PageHead";

export default function AddQuestions() {
  return (
    <div className="h-100">
      <PageHead title="Create New Questions" noButton />

      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="md:grid md:grid-cols-2 md:gap-10">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Question
                </h3>
              </div>
              <div class="mt-4">
                <textarea
                  id="about"
                  name="about"
                  rows="15"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Question here..."
                ></textarea>
              </div>
            </div>
            <div class="md:col-span-1">
              <div class="sm:overflow-hidden">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Select the right answer
                </h3>
              </div>

              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="overflow-hidden sm:rounded-md">
                    <fieldset>
                      <div class="mt-4 space-y-4">
                        {["a", "b", "c", "d"].map((ic, index) => (
                          <InputRadio ic={ic} key={index} />
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 text-right sm:px-6">
            <Link to="/add-questions">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 mx-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save and add another
            </button>
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputRadio({ ic }) {
  return (
    <div class="flex items-start items-center px-2">
      <div class="flex items-center h-5">
        <input
          name="answer"
          type="radio"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div class="ml-3 text-sm w-full">
        <input
          type="text"
          name="option"
          placeholder={`Option ${ic}`}
          className="mt-1 focus:ring-indigo-500 h-11 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
