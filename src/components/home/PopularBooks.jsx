/* eslint-disable react/prop-types */
import BookCard from "../reusable/BookCard";
const PopularBooks = ({ popularBooks }) => {
  return (
    <div className="flex flex-col flex-wrap">
      <h1 className="inline-block text-xl">Best Sellers</h1>

      <div className="flex flex-row mt-32 gap-12 flex-wrap">
        {popularBooks?.map((book) => {
          return <BookCard key={book?.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default PopularBooks;
