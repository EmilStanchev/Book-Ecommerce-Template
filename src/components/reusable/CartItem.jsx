/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../contexts/cardContext";

const CartItem = ({ book, onClose }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4 flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/3 relative overflow-hidden">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-gray-800 font-semibold text-lg">{book.title}</h3>
          <p className="text-gray-600 text-sm">{book.author}</p>
          <p className="text-gray-700 mt-2">${book.price}</p>
        </div>
        <button
          onClick={() => {
            removeFromCart(book);
          }}
          className="bg-gray-200  text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-300 hover:text-white hover:bg-gray-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
