/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// BookCard.js

import { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cardContext";

const BookCard = ({ className, book }) => {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${book?.id}`);
  };

  return (
    //added max-w-[320px]
    <article
      className={`flex flex-col gap-y-2 max-w-[320px] rounded font-sans shadow hover:shadow-lg ${className}`}
    >
      <Link
        to={`/books/${book?.id}`}
        title={book?.title}
        className="image-wrapper rounded border-2 border-skin-muted  p-4 sm:p-8 md:p-4 lg:p-8"
      >
        <div className="relative h-44 w-full overflow-hidden transition-transform duration-200 hover:scale-105">
          <img
            src={book?.imageUrl}
            alt={book?.title}
            style={{
              position: "absolute",
              height: " 100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
      </Link>
      <div className="content pb-4 px-4">
        <header className="h-10 line-clamp-2">
          <h3 className="text-sm">{book?.title}</h3>
        </header>
        <div className="flex justify-between items-center ">
          <span className="price font-medium">
            {book?.price === 0 ? (
              <h4 className="text-xl text-red-500 font-bold">Free</h4>
            ) : (
              `$${book?.price}`
            )}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:cursor-pointer"
            onClick={() => {
              addToCart(book);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
