/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BoxWithImage = ({ homeBgImage, title, text }) => {
  return (
    <div className="flex min-h-screen justify-center items-center flex-wrap flex-row">
      <div className="text-center items-center gap-5 lg:w-1/2 lg:pr-8 flex flex-col">
        <h1 className="text-4xl lg:text-5xl text-black font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg lg:text-xl text-black">{text}</p>
        <div className="flex flex-col gap-5"></div>
        <div className="flex flex-col lg:flex-row gap-5">
          <Link
            to={"/books"}
            className="text-xl bg-[#CFB895] rounded-md mt-2 lg:mt-0 hover:bg-[#8da683] p-1 w-full lg:w-32 text-center flex justify-center items-center"
          >
            Buy books
          </Link>
          <Link
            to={"/books"}
            className="text-xl bg-[#CFB895] rounded-md mt-2 lg:mt-0 hover:bg-[#8da683] p-1 w-full lg:w-32 text-center flex justify-center items-center"
          >
            Buy books
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src={homeBgImage}
          alt="book with illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BoxWithImage;
