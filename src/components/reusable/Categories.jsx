/* eslint-disable react/prop-types */

const Categories = ({ handleCategoryChange }) => {
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
    </div>
  );
};

export default Categories;
