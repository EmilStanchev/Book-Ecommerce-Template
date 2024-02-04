/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BoxWithImage = ({ homeBgImage, title, text, buttonTitle }) => {
  return (
    <div className="flex flex-wrap md justify-center items-center h-screen">
      <div className="bg-white w-full md:w-1/2 h-screen">
        <div className="mx-32 mt-[64px] p-10">
          <h1 className="text-6xl font-bold mt-16">{title}</h1>
          <div className="flex mt-8 font-light justify-center items-center  text-gray-500">
            <div className="pr-4">
              <span className="uppercase">{text}</span>
            </div>
          </div>
          <Link
            to="/books"
            className="uppercase mt-5 text-center flex justify-center items-center text-sm font-semibold hover:underline"
          >
            {buttonTitle}
          </Link>
        </div>
      </div>
      <div className="bg-red-600 w-full md:w-1/2 h-screen">
        <img src={homeBgImage} className="h-screen w-full" alt="" />
      </div>
    </div>
  );
};

export default BoxWithImage;
