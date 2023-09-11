import React, { useState } from "react";
import { quizData } from "../data/data";

const QuizQuestions = () => {
  const [data, setData] = useState(quizData);
  const [currentQuestionIndex, setCurrentQestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [showPrevButton, setShowPrevButton] = useState(false);
  // const [score, setScore] = useState({
  //     score: 0,
  //     correctAnswers: 0,
  //     wrongAnswers: 0
  // })

  // console.log(quizData);

  // const question = setData[currentQuestionIndex]
  const presentQuestion = data[currentQuestionIndex];
  // console.log(presentQuestion);

  // console.log(currentQuestionIndex <= data.length)

  const handleAnswerClick = (chosenOption) => {
    setUserAnswer(chosenOption);

    if (chosenOption === presentQuestion.correctAnswer) {
      setUserScore(userScore + 10);
    }
    console.log(userScore);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length) {
      setCurrentQestionIndex(currentQuestionIndex + 1);

      setUserAnswer(null);
      setShowPrevButton(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQestionIndex(currentQuestionIndex - 1);
      if (currentQuestionIndex === 1) {
        setShowPrevButton(false);
      }
    }
  };

  return (
    <main className="container mx-auto bg-[#F4F3EE] rounded max-w-[50%] mt-10  shadow-md shadow-[#8A817C]">
      {currentQuestionIndex < data.length ? (
        <div className="pb-5">
          <p className=" ml-2 pt-2">Question {currentQuestionIndex + 1}:</p>
          <h2 className="text-center font-bold text-lg mt-3 mb-5">
            {presentQuestion.question}
          </h2>
          <div className="flex flex-col items-center">
            {presentQuestion.options.map((option, index) => (
              <button
                key={index}
                className="mb-7 w-[70%] rounded-sm bg-[#BCB8B1] text-base font-semibold outline-none"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-end mr-2">
            {showPrevButton && (
              <button
                onClick={handlePreviousQuestion}
                className="bg-[#BCB8B1] outline-none shadow rounded-sm px-7 py-[2px] mt-5 mr-2"
              >
                <p className="font-semibold">Back</p>
              </button>
            )}
            <button
              onClick={handleNextQuestion}
              className="bg-[#BCB8B1] outline-none shadow rounded-sm px-7 py-[2px] mt-5"
            >
              <p className="font-semibold">Next</p>
            </button>
          </div>
        </div>
      ) : (
        <h2 className="text-center py-4">
          Thank you for completing the questions, this is your score:{" "}
          <p className="font-extrabold">{userScore}%</p>
        </h2>
      )}
    </main>
  );
};

export default QuizQuestions;
