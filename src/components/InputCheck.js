import React from "react";

export default function InputCheck({ index }) {
  return (
    <div class="flex items-start items-center px-2">
      <div class="flex items-center h-5">
        <input
          id="comments"
          name="comments"
          type="checkbox"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div class="ml-3 text-sm w-full">
        <input
          type="text"
          name="street_address"
          placeholder={`Option ${index + 1}`}
          id="street_address"
          autocomplete="street-address"
          className="mt-1 focus:ring-indigo-500 h-11 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
