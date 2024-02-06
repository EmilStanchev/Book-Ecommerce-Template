/* eslint-disable react/prop-types */
import { useState } from "react";
import RelatedSection from "../reusable/RelatedSection";

const BookInfo = ({ data, imageClassName, toggleImageSize }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  const extractSentences = (text, numSentences) => {
    const sentences = text.replace(/<[^>]*>/g, "");
    const shortVersion = sentences.split(".");

    return shortVersion.slice(0, numSentences).join(".");
  };
  return (
    <>
      <div className="flex flex-col md:flex-row p-4 md:p-8 justify-evenly gap-10">
        <div className="md:w-1/4 h-[400px]">
          <img
            src={data?.imageUrl}
            alt={data?.title}
            className={imageClassName}
            onClick={toggleImageSize}
          />
        </div>
        <div className="md:w-2/4 ">
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
          <h5 className="text-black text-3xl font-bold">
            ${data?.price * count}
          </h5>
          <div className="flex items-center content-center justify-between p-4 gap-5">
            <div className="flex justify-center items-center shadow-lg p-2 border-2">
              <button
                className="px-3 py-1 border border-gray-300 rounded"
                onClick={handleDecrement}
              >
                -
              </button>
              <div className="mx-4 font-bold">{count}</div>
              <button
                className="px-3 py-1 border border-gray-300 rounded"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            <button className="bg-black text-center text-white w-full px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <RelatedSection category={data?.category} className="grid-rows-3" />
      </div>
    </>
  );
};

export default BookInfo;
