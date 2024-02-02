import { useParams } from "react-router";
import { useBookById } from "../../hooks/useBooks";
import Spinner from "../reusable/Spinner";
import { useState } from "react";
import PricingSection from "../reusable/PricingSection";
import Books from "../reusable/Books";

const BookDetails = () => {
  const { bookId } = useParams();
  const { book, loading } = useBookById(bookId);
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
  console.log("book", book);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col mt-10 ">
          <div className="flex flex-col md:flex-row p-4 md:p-8 justify-evenly">
            <div className="md:w-1/4">
              <img
                src={book?.imageUrl}
                alt={book?.title}
                className={imageClassName}
                onClick={toggleImageSize}
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">{book?.title}</h2>
              <p className="text-gray-600 mb-2">
                Authors: {book?.authors.join(", ")}
              </p>
              <p className="text-gray-600 mb-2">Categories: {book?.category}</p>
              <p className="text-gray-600 mb-2">Publisher: {book?.publisher}</p>

              <p className="text-gray-800">
                {isDescriptionExpanded
                  ? book?.description.replace(/<[^>]*>/g, "")
                  : extractSentences(book?.description, 2)}
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
              <div>
                <h5 className="mt-10">Page number: {book?.pageCount}</h5>
              </div>
            </div>
            <div>
              <PricingSection price={book?.price} />
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
