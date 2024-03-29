/* eslint-disable no-unused-vars */
import { useParams } from "react-router";
import Spinner from "../components/reusable/Spinner";
import { useState } from "react";
import { useGetBookById } from "../hooks/useBook";
import BookInfo from "../components/books/BookInfo";
import Footer from "../components/UI/Footer";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data, isFetched, refetch } = useGetBookById(bookId);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const imageClassName = `w-full lg:w-1/2 rounded-lg cursor-pointer ${
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
        <div className="flex flex-col mt-10 justify-center items-center p-24 gap-5">
          <BookInfo
            data={data}
            imageClassName={imageClassName}
            toggleImageSize={toggleImageSize}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default BookDetails;
