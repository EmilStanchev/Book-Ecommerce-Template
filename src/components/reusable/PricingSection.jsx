const PricingSection = ({ price }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h5 className="mb-4 text-2xl font-semibold text-center text-gray-800">
          ${price}55
        </h5>
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
