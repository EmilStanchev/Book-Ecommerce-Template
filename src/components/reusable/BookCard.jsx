/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// BookCard.js

import { useNavigate } from "react-router";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/books/${book?.id}`);
  };
  return (
    <div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl "
      onClick={() => handleClick()}
    >
      <div className="flex justify-center ">
        <img
          className="p-8 rounded-t-lg text-center w-full"
          src={book?.imageUrl}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-black">
          {book?.title}
        </h5>
        <h5>{book?.author}</h5>

        <div className="flex items-center justify-between mt-7">
          <span className="text-xl font-bold text-gray-900 dark:text-black">
            $599
          </span>
          <a
            href="#"
            className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
