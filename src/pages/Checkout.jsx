import { useContext } from "react";
import { CartContext } from "../components/contexts/cardContext";
import BookList from "../components/reusable/BookList";
import Payment from "../components/forms/Payment";
const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const getTotal = () => {
    let sum = 0;
    cartItems?.map((item) => {
      sum += item?.price;
    });
    return sum;
  };
  return (
    <>
      <div className="flex flex-col mt-[64px] items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"></div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 overflow-y-auto max-h-[25rem]  rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItems?.length > 0 ? (
              <BookList books={cartItems} className="grid-cols-2" />
            ) : (
              <h4 className="text-xl text-center text-black">
                Your cart is empty
              </h4>
            )}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4">
                <img
                  className="w-14 object-contain"
                  src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <Payment getTotal={getTotal} />
      </div>
    </>
  );
};

export default Checkout;
