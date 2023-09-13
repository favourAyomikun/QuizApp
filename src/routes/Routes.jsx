import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Instruction from "../pages/Instruction";
import QuizPage from "../pages/QuizPage"

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/instructionPage',
    element: <Instruction />
  },
  {
    path: '/quizPage',
    element: <QuizPage />
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default route;
