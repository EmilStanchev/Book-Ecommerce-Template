import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
/* eslint-disable react/prop-types */
import "swiper/css";
import "swiper/css/pagination";

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
  "Technology",
  "Social Sciences",
  "Health and Wellness",
  "Parenting",
  "Crafts and Hobbies",
  "Humor",
  "Political Science",
  "True Crime",
  "Education",
  "Foreign Language",
  "Mindfulness and Meditation",
  "Travel Guides",
  "Fashion and Style",
  "Culinary Arts",
  "Home and Garden",
  "Relationships",
  "Astronomy",
  "Environmental Science",
  "Mythology",
  "Comedy",
  "Military History",
  "Futurism",
  "True Adventure",
  "Economics",
  "Media and Communication",
  "African Literature",
  "Asian Literature",
  "Middle Eastern Literature",
  "Latin American Literature",
  "Australian Literature",
  "Westerns",
  "Short Stories",
  "Erotic",
  "Sociology",
  "Anthropology",
  "Cognitive Science",
  "Gender Studies",
  "Legal Thriller",
  "Satire",
  "Magic Realism",
  "Epic Poetry",
  "Graphic Memoir",
  "Espionage",
  "Post-Apocalyptic",
  "Utopian Fiction",
  "Social Justice",
  "Game Theory",
  "Political Philosophy",
];

/*const Categories = ({ handleCategoryChange }) => {
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
    <>
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
    </>
  );
};*/

const Categories = ({ handleCategoryChange }) => {
  const [isCategoriesOpen, setIsCategoryOpen] = useState(true);

  const categoryOpen = () => {
    setIsCategoryOpen(!isCategoriesOpen);
  };
  return (
    <>
      <div className="flex w-full justify-between items-center content-center">
        <h2 className="text-xl font-bold mb-4">Categories</h2>

        {isCategoriesOpen ? (
          <button onClick={() => categoryOpen()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => categoryOpen()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
              />
            </svg>
          </button>
        )}
      </div>

      <div>
        {isCategoriesOpen ? (
          <>
            <ul>
              {bookCategories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Categories;
