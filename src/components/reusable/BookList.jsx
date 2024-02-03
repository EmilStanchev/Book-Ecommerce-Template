import BookCard from "./BookCard";

/* eslint-disable react/prop-types */
const BookList = ({ books, style }) => {
  return (
    <div
      className="flex flex-row flex-wrap gap-10 mt-20 justify-center"
      style={style}
    >
      {books?.map((book) => {
        return <BookCard key={book?.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
