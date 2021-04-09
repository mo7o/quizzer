import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Test from "../pages/Test";

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/test", component: Test },
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [{ path: "/login", component: Login }];

export { authProtectedRoutes, publicRoutes };
