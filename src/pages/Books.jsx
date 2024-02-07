/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BookList from "../components/reusable/BookList";
import Spinner from "../components/reusable/Spinner";
import Categories from "../components/reusable/Categories";
import { useGetBooks } from "../hooks/useBook";
import Footer from "../components/UI/Footer";

const BookListWithButtons = () => {
  const [selectedCategory, setSelectedCategory] = useState("fiction");
  const [numberOfBooks, setNumberOfBooks] = useState(10);

  const { data, isFetched, refetch } = useGetBooks(selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setNumberOfBooks(10);
    refetch();
  };

  const handleShowMore = () => {
    setNumberOfBooks((prevNumber) => prevNumber + 10);
  };
  return (
    <>
      {!isFetched ? (
        <Spinner />
      ) : (
        <div className="mt-[68px]">
          <div className="flex justify-center items-center p-5"></div>
          <div className=" justify-center items-center md:w-full md:items-start gap-5 flex flex-col md:flex-row p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="w-full md:w-1/4 border-2 p-4 md:p-12 shadow-md">
              <Categories handleCategoryChange={handleCategoryChange} />
            </div>
            {data?.length !== 0 ? (
              <div className="w-full md:w-3/4 mt-4 md:mt-0 ">
                <h1 className="text-lg w-full text-center ">
                  Showing 1-{data?.slice(0, numberOfBooks).length} of{" "}
                  {data?.length} books in {selectedCategory} category
                </h1>
                <BookList
                  books={data?.slice(0, numberOfBooks)}
                  className="grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5"
                />
                <button
                  className="text-lg text-end w-full"
                  onClick={() => handleShowMore()}
                >
                  Show more
                </button>
              </div>
            ) : (
              <div className="flex flex-row flex-wrap gap-10 mt-4 md:mt-20 justify-center">
                <h1>No results found</h1>
              </div>
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default BookListWithButtons;
