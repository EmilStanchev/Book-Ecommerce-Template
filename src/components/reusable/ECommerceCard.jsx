/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../contexts/cardContext";
import CartItem from "./CartItem";

const ECommerceCard = ({ onClose }) => {
  const { cartItems } = useContext(CartContext);

  const getTotalPrice = () => {
    let sum = 0;
    cartItems?.map((item) => {
      sum += item?.price;
    });
    return sum;
  };

  return (
    <div className="fixed top-4 right-4 z-50 ">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="overflow-y-auto max-h-80">
            {cartItems.map((item) => (
              <CartItem key={item?.id} book={item} onClose={onClose} />
            ))}
          </div>
        )}
        <h4 className="tet-xl">Total price {getTotalPrice()}</h4>
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ECommerceCard;
