/* eslint-disable react/prop-types */

import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  const toggleQuestion = () => {
    setIsQuestionOpen(!isQuestionOpen);
  };
  return (
    <>
      <div
        className="flex bg-gray-200 p-5 w-full  hover:cursor-pointer justify-between items-center"
        onClick={() => {
          toggleQuestion();
        }}
      >
        <h3 className="text-xl font-semibold mb-2">{question}</h3>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </span>
      </div>
      {isQuestionOpen ? (
        <p className=" text-center text-gray-700">{answer}</p>
      ) : null}
    </>
  );
};

export default FAQ;
