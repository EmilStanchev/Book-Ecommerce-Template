import { useState } from "react";
import useBooks from "../hooks/useBooks";
import Books from "../components/reusable/Books";

const BookListWithButtons = () => {
  const [selectedCategory, setSelectedCategory] = useState("fiction");
  const { books, loading } = useBooks(selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id="home">
      <div>
        <button className="text-xl">Fantasy</button>
      </div>
      {!loading && <Books books={books} />}
    </div>
  );
};

export default BookListWithButtons;
