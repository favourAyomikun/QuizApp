import React from "react";
import { Link } from "react-router-dom";

const Instruction = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center h-screen text-center">
      <div className="tracking-normal md:tracking-wide leading-10">
        <h1 className="text-[15px] md:text-xl font-bold underline">
          These are the following instructions:
        </h1>
        <p >1. Answer all questions.</p>
        <p>2. Choose only one answer for the questions.</p>
        <p>3. The quiz has no time limit, Take your time.</p>
        <p>4. Score would be displayed once done with the questions.</p>
      </div>
      <Link
          to={'/quizPage'}
          className="bg-white text-black text-sm md:text-base mt-6 h-8 w-[21%] md:w-[15%] lg:w-[10%] flex justify-center items-center shadow-md shadow-gray-800 rounded font-semibold"
        >
          <button>Continue</button>
        </Link>
    </div>
  );
};

export default Instruction;
