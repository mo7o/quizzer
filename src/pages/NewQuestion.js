import React, { useState } from "react";
import { PageHead } from "../components/PageHead";

export default function AddQuestions() {
  return (
    <div className="h-100">
      <PageHead title="Create New Questions" noButton />

      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="md:grid md:grid-cols-2 md:gap-2">
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
              <div class="sm:overflow-hidden">Answer section</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
