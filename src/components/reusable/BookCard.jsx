/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// BookCard.js

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const BookCard = ({ className, book }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/books/${book?.id}`);
  };
  return (
    <article
      className={`flex flex-col gap-y-2 rounded font-sans shadow hover:shadow-lg ${className}`}
    >
      <Link
        to={`/books/${book?.id}`}
        title={book?.title}
        className="image-wrapper rounded border-2 border-skin-muted bg-skin-muted p-4 sm:p-8 md:p-4 lg:p-8"
      >
        <div className="relative bg-gray-200 h-44 w-full overflow-hidden transition-transform duration-200 hover:scale-105">
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
          <span className="price font-medium">${book?.price}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:cursor-pointer"
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
