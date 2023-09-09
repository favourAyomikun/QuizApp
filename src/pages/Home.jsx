import React from "react";
import { Link } from "react-router-dom";

const QUIZ_IMAGE =
  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/88/ebc021015445b3be6555240ed48aa8/CTT_course-image_Coursera.png?auto=format%2Ccompress&dpr=1";

const Home = () => {
  return (
    <main>
      <div className="pt-20 flex flex-col justify-center items-center">
        <h2 className="text-6xl font-header">F.A's Quiz</h2>
        <img
          src={QUIZ_IMAGE}
          alt="quiz-image"
          className="h-64 rounded-full mt-10"
        />
        <input
          type="text"
          placeholder="input your name"
          className="w-[30%] mt-10 outline-none border border-[#8A817C] bg-[#F4F3EE] rounded-md px-4 uppercase"
        />
        <Link to={'/quizpage'} className="bg-[#F4F3EE] mt-12 h-8 w-[10%] flex justify-center items-center shadow-xl rounded font-semibold">
          <p>Start Quiz</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;