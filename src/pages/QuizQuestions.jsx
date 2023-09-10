import React, { useState } from 'react'
import { quizData } from '../data/data'

const QuizQuestions = () => {
    const [data, setData] = useState(quizData)
    console.log(quizData);

  return (
    <main className='container'>
        {data.map((params, index) => (
            <div key={index}>
                <p>{params.question}</p>
                <p>{params.options}</p>
            </div>
        ))}
    </main>
  )
}

export default QuizQuestions