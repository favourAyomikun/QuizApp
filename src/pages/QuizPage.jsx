import React, { useEffect } from "react";
import { useInputValue } from "../context/InputValueContext";
import QuizQuestions from "./QuizTemplate";

const QuizPage = () => {
  const { inputValue, setInputValue } = useInputValue();

  useEffect(() => {
    const savedInputValue = localStorage.getItem("inputValue");

    if (savedInputValue) {
      setInputValue(savedInputValue);
    }
  }, []);

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <section>
      <div className="flex items-center justify-between pt-10 px-5 md:px-10">
        <h2 className="uppercase font-bold text-base md:text-xl lg:text-2xl text-white">Welcome {inputValue}</h2>
        <button onClick={handleReset} className="text-[15px] md:text-base bg-white shadow-md shadow-gray-800 hover:bg-[#022b3ac4] hover:text-white hover:shadow-transparent px-3 py-[2px] rounded">
          RESET
        </button>
      </div>
      <QuizQuestions />
    </section>
  );
};

export default QuizPage;
