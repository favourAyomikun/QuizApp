import React from "react";
import { useInputValue } from "../context/InputValueContext";

const QuizPage = () => {
  const { inputValue } = useInputValue();
  console.log(inputValue);
  return (
    <section className="">
      <h2>Quizpage</h2>
     <div className="uppercase"> Welcome {inputValue}</div>
    </section>
  );
};

export default QuizPage;
