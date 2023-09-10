import React, { useEffect } from "react";
import { useInputValue } from "../context/InputValueContext";

const QuizPage = () => {
  const { inputValue, setInputValue } = useInputValue();
 
  useEffect(() => {
    const savedInputValue = localStorage.getItem('inputValue')

    if(savedInputValue) {
      setInputValue(savedInputValue)
    }
  }, [])

  return (
    <section className="">
      <h2 className="uppercase"> Welcome {inputValue}</h2>
    </section>
  );
};

export default QuizPage;
