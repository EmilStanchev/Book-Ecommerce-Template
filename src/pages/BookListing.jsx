import React from "react";
import ECommerceCard from "../components/reusable/ECommerceCard";
import { useGetPopularBooks } from "../hooks/useBook";

const BookListing = () => {
  const { data, isFetched } = useGetPopularBooks("Action");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((book) => (
        <ECommerceCard key={book?.id} book={book} />
      ))}
    </div>
  );
};

export default BookListing;
