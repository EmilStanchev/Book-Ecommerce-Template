/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BookList from "../reusable/BookList";
const PopularBooks = ({ data, title }) => {
  return (
    <div className="flex flex-col m-10 flex-wrap  items-center px-[64px]">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <h1 className="font-serif text-2xl font-medium capitalize md:text-2xl">
          {title}
        </h1>
        <Link
          to="/books"
          className="flex items-center text-gray-500 font-serif text-lg font-medium capitalize mt-4 md:mt-0"
        >
          See All
          <span className="">
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </Link>
      </div>
      <BookList
        books={data}
        className="grid-cols-1 md:grid-cols-4 lg:grid-cols-5"
      />
    </div>
  );
};

export default PopularBooks;
