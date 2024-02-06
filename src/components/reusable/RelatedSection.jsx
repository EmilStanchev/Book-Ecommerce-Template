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
          className="lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2"
        />
      </div>
    </div>
  );
};

export default RelatedSection;
