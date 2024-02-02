import { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import Books from "../components/reusable/Books";
import Spinner from "../components/reusable/Spinner";

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
        <div>
          <div>
            <button className="text-xl">Fantasy</button>
          </div>
          <Books books={books} />
        </div>
      )}
    </div>
  );
};

export default BookListWithButtons;
