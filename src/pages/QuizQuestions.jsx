import React, { useState } from 'react'
import { quizData } from '../data/data'

const QuizQuestions = () => {
    const [data, setData] = useState(quizData)
    const [currentQuestion, setCurrentQestion] = useState(0)
    const [userAnswer, setUserAnswer] = useState(null)
    const [score, setScore] = useState(0)

    console.log(quizData);

    

  return (
    <main className='container'>

    </main>
  )
}

export default QuizQuestions