import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import Routes
import { authProtectedRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <ToastContainer />
        <Switch>
          {authProtectedRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              layout={VerticalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}
