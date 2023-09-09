import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import QuizPage from '../pages/QuizPage';
import Error from '../pages/Error';

const route = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                index: 'quiz',
                element: <QuizPage />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default route;