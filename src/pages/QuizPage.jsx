import React, { useEffect } from "react";
import { useInputValue } from "../context/InputValueContext";
import QuizQuestions from "./QuizQuestions";

const QuizPage = () => {
  const { inputValue, setInputValue } = useInputValue();
 
  useEffect(() => {
    const savedInputValue = localStorage.getItem('inputValue')

    if(savedInputValue) {
      setInputValue(savedInputValue)
    }
  }, [])

  return (
    <section>
      <h2 className="uppercase pt-10 ml-10 font-bold text-2xl"> Welcome {inputValue}</h2>
      <QuizQuestions />
    </section>
  );
};

export default QuizPage;
