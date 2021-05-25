import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Login";
import MyTests from "../pages/MyTests";
import MyCandidates from "../pages/MyCandidates";
import NewTest from "../pages/NewTest";
import AddQuestions from "../pages/AddQuestions";
import NewQuestion from "../pages/NewQuestion";
import TakeTest from "../pages/TakeTest";

const authProtectedRoutes = [
  { path: "/tests", component: MyTests },
  { path: "/new-test", component: NewTest },
  { path: "/candidates", component: MyCandidates },
  { path: "/add-questions", component: AddQuestions },
  { path: "/new-question", component: NewQuestion },
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/tests" /> },
];

const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/take-test", component: TakeTest },
];

export { authProtectedRoutes, publicRoutes };
