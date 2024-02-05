/* eslint-disable no-unused-vars */
import { useParams } from "react-router";
import Spinner from "../reusable/Spinner";
import { useState } from "react";
import PricingSection from "../reusable/PricingSection";
import { useGetBookById } from "../../hooks/useBook";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data, isFetched, refetch } = useGetBookById(bookId);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  const extractSentences = (text, numSentences) => {
    const sentences = text.replace(/<[^>]*>/g, "");
    const shortVersion = sentences.split(".");

    return shortVersion.slice(0, numSentences).join(".");
  };

  const imageClassName = `w-full h-auto md:h-full rounded-lg cursor-pointer ${
    isImageEnlarged
      ? "fixed top-0 left-0 w-full h-full object-contain z-50 p-10"
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
        <div className="flex flex-col mt-10 p-24">
          <div className="flex flex-col md:flex-row p-4 md:p-8 justify-evenly">
            <div className="md:w-1/4">
              <img
                src={data?.imageUrl}
                alt={data?.title}
                className={imageClassName}
                onClick={toggleImageSize}
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">{data?.title}</h2>
              <p className="text-gray-600 mb-2">
                Authors: {data?.authors.join(", ")}
              </p>
              <p className="text-gray-600 mb-2">Categories: {data?.category}</p>
              <p className="text-gray-600 mb-2">Publisher: {data?.publisher}</p>

              <p className="text-gray-800">
                {isDescriptionExpanded
                  ? data?.description.replace(/<[^>]*>/g, "")
                  : extractSentences(data?.description, 2)}
              </p>
              {isDescriptionExpanded ? (
                <button
                  onClick={toggleDescription}
                  className="text-blue-500 cursor-pointer"
                >
                  Read less
                </button>
              ) : (
                <button
                  onClick={toggleDescription}
                  className="text-blue-500 cursor-pointer"
                >
                  Read more
                </button>
              )}
              <h5 className="mt-2">Page number: {data?.pageCount}</h5>
              <h5 className="text-black text-3xl font-bold">${data?.price}</h5>
              <div className="flex justify-between items-center w-1/3">
                <div>
                  <button>hii</button>
                </div>
                <button>Add to card</button>
              </div>
            </div>
            <div>
              <PricingSection price={data?.price} />
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
