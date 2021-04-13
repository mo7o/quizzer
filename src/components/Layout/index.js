import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>
        <div class="py-6 sm:px-6 lg:px-8 bg-gray-50">
          <div class="px-4 py-6 sm:px-0">{children}</div>
        </div>
      </main>
    </div>
  );
}
