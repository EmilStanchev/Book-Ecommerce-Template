import BookCard from "./BookCard";

/* eslint-disable react/prop-types */
const BookList = ({ books, className }) => {
  return (
    <div
      className={className}
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
        display: "grid",
        columnGap: "1rem",
        rowGap: "1.5rem",
      }}
    >
      {books?.map((book) => {
        return (
          <BookCard
            key={book?.id}
            book={book}
            className={`${
              book?.title.length >= 5
                ? "last:hidden sm:last:flex sm:even:hidden md:last:hidden md:even:flex lg:last:flex"
                : book?.title.length === 4
                ? "sm:last:hidden md:sm:last:flex"
                : ""
            }`}
          />
        );
      })}
    </div>
  );
};

export default BookList;
