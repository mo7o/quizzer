import React from "react";
import { NavLink } from "react-router-dom";

export const PageHead = ({ title, noButton }) => {
  return (
    <header className="bg-gray-50">
      <div className="max-w-7xl mx-auto flex justify-between py-6">
        <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
        {!noButton && (
          <NavLink to="/new-test">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border h-12 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Create new test
            </button>
          </NavLink>
        )}
      </div>
    </header>
  );
};
