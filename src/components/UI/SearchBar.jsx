import { useGetBooks } from "../../hooks/useBook";

/* eslint-disable react/prop-types */
const SearchBar = () => {
  const { setQuery, refetch } = useGetBooks("fiction");

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 p-2 rounded-l"
        onChange={(e) => {
          if (setQuery) {
            setQuery(e.target.value);
          }
        }}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-r"
        onClick={() => {
          console.log("click");
          refetch();
        }}
      >
        Search
      </button>
    </>
  );
};

export default SearchBar;
