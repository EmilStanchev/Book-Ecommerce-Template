import { useState } from "react";
import Slider from "react-slick";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bookCategories.length);
  };

  const prevCategory = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + bookCategories.length) % bookCategories.length
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-300 transform translate-x-[-${currentIndex * 100}%]">
        {bookCategories.map((category) => (
          <div key={category.id} className="w-full px-4">
            <div className="bg-gray text-black p-4 rounded-md">
              <button
                onClick={() => {
                  handleCategoryChange(category);
                }}
              >
                {category}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
