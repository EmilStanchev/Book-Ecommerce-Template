import { useState } from "react";
import useBooks from "../hooks/useBooks";
import BookCard from "../components/reusable/BookCard";
import Books from "../components/reusable/Books";

const BookListWithButtons = () => {
  const [selectedCategory, setSelectedCategory] = useState("fiction");
  const { books, loading } = useBooks(selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="flex flex-row gap-10">
        <button onClick={() => handleCategoryChange("fiction")}>Fiction</button>
        <button onClick={() => handleCategoryChange("nonfiction")}>
          Non-Fiction
        </button>
        <button onClick={() => handleCategoryChange("mystery")}>Mystery</button>
        <button onClick={() => handleCategoryChange("fantasy")}>Fantasy</button>
        <button onClick={() => handleCategoryChange("sci-fi")}>Sci-Fi</button>
      </div>

      {loading && <p>Loading...</p>}

      {!loading && <Books books={books} />}
    </div>
  );
};

export default BookListWithButtons;
