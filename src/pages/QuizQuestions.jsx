import React, { useState } from 'react'
import { quizData } from '../data/data'

const QuizQuestions = () => {
    const [data, setData] = useState(quizData)
    const [currentQuestion, setCurrentQestion] = useState(0)
    const [userAnswer, setUserAnswer] = useState(null)
    const [score, userScore] = useState(0)
    // const [score, setScore] = useState({
    //     score: 0,
    //     correctAnswers: 0,
    //     wrongAnswers: 0
    // })

    // console.log(quizData);

    // const question = setData[currentQuestion]
    const question = data[currentQuestion]
    console.log(question);



  return (
    <main className='container'>
        
    </main>
  )
}

export default QuizQuestions