import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ["Home", "Books", "Categories", "About", "Contact"];

  return (
    <nav className=" p-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container  flex justify-between items-center">
        <div className="text-black text-2xl font-semibold">NovelNirvana</div>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className={`h-6 w-6 ${menuOpen ? "block" : "hidden"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className={`h-6 w-6 ${menuOpen ? "hidden" : "block"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={` bg-gray-800 lg:bg-transparent lg:relative lg:top-0 lg:left-auto lg:gap-10 k lg:flex ${
            (menuOpen ? "block" : "hidden",
            menuOpen ? "absolute top-full left-0 w-full" : "hidden")
          } lg:items-center lg:space-x-4`}
        >
          {pages.map((page, index) => (
            <a
              key={index}
              href={`#${page.toLowerCase()}`}
              className="block lg:inline-block mt-4 lg:mt-0 text-black hover:text-gray-300 w-full lg:w-auto"
            >
              {page}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
