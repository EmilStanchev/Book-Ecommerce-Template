/* eslint-disable no-unused-vars */
import { useParams } from "react-router";
import Spinner from "../reusable/Spinner";
import { useState } from "react";
import RelatedSection from "../reusable/RelatedSection";
import { useGetBookById } from "../../hooks/useBook";
import BookInfo from "./BookInfo";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data, isFetched, refetch } = useGetBookById(bookId);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const imageClassName = `w-full h-auto md:h-full rounded-lg cursor-pointer ${
    isImageEnlarged
      ? "fixed top-0 left-0 w-full h-full object-contain z-50 p-10 bg-black"
      : ""
  }`;
  const toggleImageSize = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };
  return (
    <div>
      {!isFetched ? (
        <Spinner />
      ) : (
        <div className="flex flex-col mt-10 p-24 gap-5">
          <BookInfo
            data={data}
            imageClassName={imageClassName}
            toggleImageSize={toggleImageSize}
          />
        </div>
      )}
    </div>
  );
};

export default BookDetails;
