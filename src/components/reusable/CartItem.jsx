/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { CartContext } from "../contexts/cardContext";
import CancelIcon from "../../assets/icons/CancelIcon";

const CartItem = ({ book, onClose }) => {
  const { removeFromCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="relative bg-white w-[250px] h-[250px] rounded-lg shadow-lg overflow-hidden mb-4 flex flex-col md:flex-row">
        <CancelIcon
          onClick={() => {
            removeFromCart(book);
          }}
          className="absolute top-0 right-0 ml-2 text-sm cursor-pointer p-2 z-10 text-gray-500 hover:text-gray-800"
        />
        <div className="relative overflow-hidden">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="md:w-2/3 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-gray-800 font-semibold text-lg">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm">{book.author}</p>
            <p className="text-gray-700 mt-2">${book.price * count}</p>
          </div>
          <div className="flex justify-center items-center p-2">
            <button className="px-3 py-1 text-3xl" onClick={handleDecrement}>
              -
            </button>
            <div className="mx-4 font-bold">{count}</div>
            <button className="px-3 py-1 text-3xl" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
