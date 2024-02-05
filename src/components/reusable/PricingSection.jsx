const PricingSection = ({ price }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h5 className="mb-4 text-2xl font-semibold text-center text-gray-800">
          ${price}
        </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-center hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
  );
};

export default PricingSection;
