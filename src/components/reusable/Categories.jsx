import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
/* eslint-disable react/prop-types */
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const breakpoints = {
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 1,
    },
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <button className="flex" onClick={toggleFilter}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
          color="red"
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      {isFilterOpen && (
        <Swiper
          slidesPerView={5}
          breakpoints={breakpoints}
          spaceBetween={10}
          navigation
          style={{ width: "100%" }}
        >
          {bookCategories.map((category, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: "0 0 auto",
                padding: "10px",
                borderRadius: "8px",
                background: "#f0f0f0",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "150px !important", // Adjust the width as needed
              }}
              onClick={() => {
                handleCategoryChange(category);
                toggleFilter();
              }}
            >
              <button className="text-sm text-gray-700">{category}</button>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Categories;
