import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import QuizPage from '../pages/QuizPage';

const route = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                index: 'quizPage',
                element: <QuizPage />
            }
        ]
    }
])

export default route;