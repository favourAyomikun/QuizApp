import React, { useState, useEffect } from "react";
import { quizData } from "../data/data";

const QuizQuestions = () => {
  const [data, setData] = useState(quizData);
  const [currentQuestionIndex, setCurrentQestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState();
  const [userScore, setUserScore] = useState(0);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [lastQuestion, setlastQuestion] = useState(true);
  const [buttonState, setButtonState] = useState(false);

  const presentQuestion = data[currentQuestionIndex];

  const handleAnswerClick = (chosenOption) => {
    presentQuestion.chosenAnswer = chosenOption

    setButtonState(!buttonState);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length) {
      setCurrentQestionIndex(currentQuestionIndex + 1);

      setUserAnswer(null);
      setShowPrevButton(true);
    }
    if (currentQuestionIndex === 8) {
      setlastQuestion(false)
    } else {
      setlastQuestion(true)
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 8) {
      setlastQuestion(false)
    } else {
      setlastQuestion(true)
    }
    if (currentQuestionIndex > 0) {
      setCurrentQestionIndex(currentQuestionIndex - 1);
      if (currentQuestionIndex === 1) {
        setShowPrevButton(false);
      }
    }
   
  };

  const handleSubmit = () => {
    data.forEach((dataItem) => {
      if (dataItem.chosenAnswer === dataItem.correctAnswer) {
        setUserScore((prevUserScore) => {
          return prevUserScore + 10;
        });
      }
    });
    setCurrentQestionIndex(20)
  };

  useEffect(() => {
  }, [userScore]);

  return (
    <main className="container mx-auto rounded max-w-[80%] md:max-w-[50%] mt-16 bg-white shadow-md shadow-gray-700">
      {currentQuestionIndex < data.length ? (
        <div className="pb-5">
          <p className="text-sm md:text-base ml-2 pt-2">
            Question {currentQuestionIndex + 1}:
          </p>
          <h2 className="text-center font-bold md:text-lg mt-3 mb-5 px-2">
            {presentQuestion.question}
          </h2>
          <div className="flex flex-col items-center">
            {presentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`${
                  userAnswer !== null && userAnswer === option
                    ? option === presentQuestion.correctAnswer
                      ? "bg-green-400"
                      : "bg-red-400"
                    : "bg-[#1F7A8C]"
                } mb-7 w-[70%] rounded-sm text-white text-[15px] md:text-base font-semibold outline-none hover:bg-[#022b3ac4]`}
              >
                {option}
              </button>
            ))}
          </div>
          {userAnswer !== null && (
            <div className="text-x[13px] md:text-sm font-bold text-green-900 pl-5">
              {userAnswer === presentQuestion.correctAnswer ? (
                "The answer is correct!"
              ) : (
                <div className="text-red-800">
                  Incorrect: answer is -{" "}
                  <span className="text-green-900">
                    {presentQuestion.correctAnswer}
                  </span>
                </div>
              )}
            </div>
          )}
          <div className="flex justify-end mr-2">
            {showPrevButton && (
              <button
                onClick={handlePreviousQuestion}
                className="bg-white shadow-gray-800  outline-none shadow rounded-sm px-7 py-[2px] mt-5 mr-2 hover:bg-[#022b3ac4] hover:text-white hover:shadow-transparent"
              >
                <p className="font-semibold text-sm md:text-base">Back</p>
              </button>
            )}
            {lastQuestion ?<button
              onClick={handleNextQuestion}
              className="bg-white shadow-gray-800 outline-none shadow rounded-sm px-7 py-[2px] mt-5 hover:bg-[#022b3ac4] hover:text-white hover:shadow-transparent"
            >
              <p className="font-semibold text-sm md:text-base">Next</p>
            </button> :
              <button
              onClick={handleSubmit}
              className="bg-white shadow-gray-800 outline-none shadow rounded-sm px-7 py-[2px] mt-5 hover:bg-[#022b3ac4] hover:text-white hover:shadow-transparent"
            >
              <p className="font-semibold text-sm md:text-base">Submit</p>
            </button>
            }
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
