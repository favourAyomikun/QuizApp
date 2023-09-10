import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import QuizPage from "../pages/QuizPage";

const route = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "quizPage",
        element: <QuizPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default route;
