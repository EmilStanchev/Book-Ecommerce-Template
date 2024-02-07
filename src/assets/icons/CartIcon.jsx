/* eslint-disable react/prop-types */

const CartIcon = ({ className }) => {
  return (
    <svg
      className={`${className} inline-block h-6 w-6 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6h19l-3 10H6L3 6zm0 0l-.75-2.5M11 19.5a1.5 1.5 0 01-3 0M17 19.5a1.5 1.5 0 01-3 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default CartIcon;
