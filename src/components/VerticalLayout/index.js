import React from "react";
// Layout Related Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function VerticalLayout({ children }) {
  return (
    <div id="layout-wrapper">
      <Header />
      <Sidebar />
      <div className="main-content">
        {children}
        <Footer />
      </div>
    </div>
  );
}
