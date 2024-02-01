import BookCard from "./BookCard";

/* eslint-disable react/prop-types */
const Books = ({ books }) => {
  return (
    <div className="flex flex-row flex-wrap gap-10 mt-20 justify-center">
      {books?.map((book) => {
        return (
          <BookCard
            key={book?.id}
            title={book?.title}
            imageUrl={book.imageUrl}
            author={book?.authors}
          />
        );
      })}
    </div>
  );
};

export default Books;
