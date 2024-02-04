import homeBgImage from "../assets/images/cafe-book.png";
import BoxWithImage from "../components/UI/BoxWithImage";
import Footer from "../components/UI/Footer";
import BookList from "../components/reusable/BookList";
import Spinner from "../components/reusable/Spinner";
import { useGetPopularBooks } from "../hooks/useBook";

const Home = () => {
  const { data, isFetched } = useGetPopularBooks();

  return (
    <div
      className="flex justify-center
     items-center flex-wrap"
    >
      {!isFetched ? (
        <Spinner />
      ) : (
        <>
          <BoxWithImage
            text="+5,000 books in one place"
            title="Best Place to Find
            Your Favorite
            Books."
            homeBgImage={homeBgImage}
            buttonTitle="Start Reading"
          />
          <div className="flex flex-col m-10 flex-wrap  items-center px-[64px]">
            <div className="flex flex-col md:flex-row w-full justify-between">
              <h1 className="font-serif text-2xl font-medium capitalize md:text-2xl">
                Best sellers
              </h1>
              <button className="flex items-center text-gray-500 font-serif text-lg font-medium capitalize mt-4 md:mt-0">
                See All
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <BookList
              books={data}
              className="grid-cols-1 md:grid-cols-4 lg:grid-cols-5"
            />
          </div>
          <div className="w-full">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
