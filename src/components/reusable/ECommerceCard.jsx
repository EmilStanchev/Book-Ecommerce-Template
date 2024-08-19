/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../contexts/cardContext";
import CartItem from "./CartItem";
import CancelIcon from "../../assets/icons/CancelIcon";
import { Link } from "react-router-dom";
const ECommerceCard = ({ onClose }) => {
  const { cartItems, clearCart } = useContext(CartContext);

  const getTotalPrice = () => {
    let sum = 0;
    cartItems?.forEach((item) => {
      sum += item?.price * item?.count;
    });
    return sum;
  };

  return (
    <div className="bg-white fixed top-4 right-4 shadow-lg p-3 z-50 ">
      <div className=" text-center p-4 rounded-lg ">
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
        <hr className="w-full text-black" />
        <h4 className="tet-xl">Total price: ${getTotalPrice()}</h4>
        <CancelIcon
          onClick={() => {
            onClose();
          }}
          className="absolute top-0 right-0 ml-2 text-sm cursor-pointer p-2 z-10 text-gray-500 hover:text-gray-800"
        />
      </div>
      <div className="flex justify-between flex-row flex-wrap gap-2  w-full">
        <Link
          to="/checkout"
          className="bg-black text-white text-lg text-center p-2"
        >
          Checkout
        </Link>
        <button
          onClick={() => clearCart()}
          className="text-lg border-2 border-black p-2"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default ECommerceCard;
