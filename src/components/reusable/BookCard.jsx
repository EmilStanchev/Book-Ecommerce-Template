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
      <div className="content px-4 pb-4">
        <header className="h-10 line-clamp-2">
          <h3 className="text-sm">{book?.title}</h3>
        </header>
        <div className="price mb-1 font-medium">
          <span>$599</span>
        </div>
        <div className="buttons flex gap-x-2">
          <button
            type="button"
            className="primary-btn-color flex-1 rounded px-1 text-sm font-semibold"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
