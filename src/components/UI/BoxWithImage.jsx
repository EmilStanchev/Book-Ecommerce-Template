/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BoxWithImage = ({ homeBgImage, title, text, buttonTitle }) => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-y-4 px-4 mt-5 py-6 sm:flex-col-reverse md:flex-row md:gap-x-4 md:px-8 lg:py-14">
      <div className="info-wrapper flex flex-1 flex-col gap-y-4 md:justify-center lg:justify-end lg:gap-y-8">
        <div className="p-10">
          <h5 className=" font-serif text-4xl font-semibold md:!leading-tight lg:text-5xl xl:text-6xl  ">
            {title}
          </h5>
          <div className="flex mt-8 font-light justify-center items-center  text-gray-500">
            <span className="uppercase font-sans xl:text-lg">{text}</span>
          </div>
          <Link
            to="/books"
            className="uppercase mt-5 text-center flex justify-center items-center hover:underline outline-btn-color rounded py-2 px-4 text-lg font-semibold"
          >
            {buttonTitle}
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 ">
        <img src={homeBgImage} className="" alt="image of coffee book" />
      </div>
    </div>
  );
};

export default BoxWithImage;
