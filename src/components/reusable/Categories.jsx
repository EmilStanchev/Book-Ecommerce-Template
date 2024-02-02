/* eslint-disable react/prop-types */
const bookCategories = [
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Fantasy",
  "Science Fiction",
  "Romance",
  "Historical Fiction",
  "Biography/Memoir",
  "Self-Help",
  "Business/Finance",
  "Science",
  "Travel",
  "Cookbooks",
  "Thriller/Suspense",
  "Horror",
  "Poetry",
  "Philosophy",
  "Psychology",
  "Children's Books",
  "Young Adult",
  "Dystopian",
  "Adventure",
  "Graphic Novels/Comics",
  "Classics",
  "Historical Non-Fiction",
  "Art and Photography",
  "Music",
  "Sports and Outdoors",
  "Religion and Spirituality",
  "Science and Nature",
];
const Categories = ({ handleCategoryChange }) => {
  return (
    <div className="flex flex-col gap-10 bg-gray-200 mt-10 justify-start">
      <h1 className="text-xl">Categories:</h1>
      {bookCategories.map((category) => {
        return (
          <button
            key={category}
            className="category-button"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
