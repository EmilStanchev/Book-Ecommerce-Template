/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BookList from "../components/reusable/BookList";
import Spinner from "../components/reusable/Spinner";
import Categories from "../components/reusable/Categories";
import { useGetBooks } from "../hooks/useBook";

const BookListWithButtons = () => {
  const [selectedCategory, setSelectedCategory] = useState("fiction");

  const { data, isFetched, refetch } = useGetBooks(selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    refetch();
  };

  return (
    <>
      {!isFetched ? (
        <Spinner />
      ) : (
        <div className="mt-[64px]">
          <Categories handleCategoryChange={handleCategoryChange} />
          {data?.length !== 0 ? (
            <BookList books={data} />
          ) : (
            <div className="flex flex-row flex-wrap gap-10 mt-20 justify-center">
              <h1>No have result</h1>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BookListWithButtons;
