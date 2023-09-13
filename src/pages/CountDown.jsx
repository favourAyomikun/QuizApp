import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Countdown = () => {
    const [isCounting, setIsCounting] = useState(30)
    const navigate = useNavigate()
    
    useEffect(() => {
        const countdown = setInterval(() => {
            if(isCounting > 0) {
                setIsCounting(isCounting - 1)
            } else {
                clearInterval(countdown)
                navigate('/quizPage')
            }
        }, 1000);
    
        return () => {
            clearInterval(countdown)
        }
    }, [isCounting])

  

  return (
    <div className='text-white text-center pt-40 tracking-wide leading-10'>
        <div><h1 className='text-xl font-bold underline'>These are  the following instructions:</h1>
        <p>1. Answer all questions</p>
        <p>2. Choose only one answer for the questions.</p>
        <p>3. The quiz has no time limit, Take your time.</p>
        <p>4. Score would be displayed once done with the questions.</p></div>
        <p className='text-xl mt-5'>{isCounting}</p>
    </div>
  )
}

export default Countdown;