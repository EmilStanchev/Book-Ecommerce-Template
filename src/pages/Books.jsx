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
        <div className="mt-[64px] gap-2 flex flex-col">
          <Categories handleCategoryChange={handleCategoryChange} />
          {data?.length !== 0 ? (
            <div className="">
              <BookList
                books={data}
                className="grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-[64px]"
              />
            </div>
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
