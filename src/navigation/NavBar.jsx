/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../components/UI/SearchBar";
import { CartContext } from "../components/contexts/cardContext";
import ECommerceCard from "../components/reusable/ECommerceCard";

const NavBar = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const location = useLocation();
  const showSearchBarOnUrl = "/books";
  const { cartItems } = useContext(CartContext);

  const pages = ["Home", "Books", "About", "Contact"];

  return (
    <>
      <nav className=" p-4 fixed bg-white top-0 left-0 w-full z-10 shadow-md">
        <div className="container  flex justify-around items-center">
          <Link
            to={"/"}
            className="text-black text-2xl hover:text-red-400 font-semibold"
          >
            NovelNirvana
          </Link>
          {location.pathname === showSearchBarOnUrl && (
            <div className="flex items-center">
              <SearchBar />
            </div>
          )}
          {isCartOpen && <ECommerceCard onClose={() => setIsCartOpen(false)} />}

          <button
            title="cart"
            onClick={() => setIsCartOpen(true)}
            className="hidden lg:fixed lg:flex lg:top-3 lg:right-2 lg:py-2 lg:px-4 lg:rounded"
          >
            <div className="absolute -top-2 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {cartItems?.length}
            </div>
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>

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
            className={` bg-gray-300 lg:bg-transparent lg:relative lg:top-0 lg:left-auto lg:gap-10 k lg:flex ${
              (menuOpen ? "block" : "hidden",
              menuOpen ? "absolute top-full left-0 w-full" : "hidden")
            } lg:items-center lg:space-x-4`}
          >
            {pages.map((page, index) => (
              <Link
                key={index}
                to={
                  page.toLocaleLowerCase() === "home"
                    ? "/"
                    : page.toLocaleLowerCase()
                }
                className="block lg:inline-block mt-4 lg:mt-0 text-black hover:text-red-400 w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                {page}
              </Link>
            ))}
            <button
              onClick={() => setIsCartOpen(true)}
              className="fixed lg:hidden bg-gray-300 w-full rounded flex justify-end flex-row-reverse"
            >
              <div className=" text-black rounded-full w-12 h-12 flex items-center justify-center text-xs font-bold">
                <div className=" bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {cartItems?.length}
                </div>
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default NavBar;
