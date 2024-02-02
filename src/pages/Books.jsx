/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import Books from "../components/reusable/Books";
import Spinner from "../components/reusable/Spinner";
import Categories from "../components/reusable/Categories";

const BookListWithButtons = () => {
  const [selectedCategory, setSelectedCategory] = useState("fiction");
  const { books, loading } = useBooks(selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id="home" className="flex justify-center mt-[64px] items-center ">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-row ">
          <Categories handleCategoryChange={handleCategoryChange} />
          <div className="flex m-10 p-5">
            <Books books={books} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookListWithButtons;
