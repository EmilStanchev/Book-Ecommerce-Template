/* eslint-disable react/prop-types */
import { useGetBooks } from "../../hooks/useBook";
import BookList from "./BookList";

const RelatedSection = ({ category }) => {
  const { data } = useGetBooks(category);

  return (
    <div className="ml-5">
      <h3 className="w-full text-start text-2xl">Related products</h3>
      <div className="">
        <BookList
          books={data?.slice(0, 5)}
          className="xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        />
      </div>
    </div>
  );
};

export default RelatedSection;
