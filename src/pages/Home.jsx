import homeBgImage from "../assets/images/cafe-book.png";
import BoxWithImage from "../components/UI/BoxWithImage";
import Footer from "../components/UI/Footer";
import Spinner from "../components/reusable/Spinner";
import { useGetBooks } from "../hooks/useBook";
import PopularBooks from "../components/home/PopularBooks";
import readingWoman from "../assets/images/womanReading.jpg";
import readingWomen from "../assets/images/womenReading.jpg";
import manReading from "../assets/images/manReading.jpg";
import reading from "../assets/images/reading.jpg";
import reading2 from "../assets/images/reading2.jpg";
import Newsletter from "../components/forms/Newsletter";

const Home = () => {
  const { data, isFetched } = useGetBooks("Fiction");
  const { data: crimeBooks } = useGetBooks("Crime");
  const { data: fantasyBooks } = useGetBooks("George R. R. Martin'");

  return (
    <div
      className="flex justify-center
     items-center flex-wrap"
    >
      {!isFetched ? (
        <Spinner />
      ) : (
        <main>
          <BoxWithImage
            text="+5,000 books in one place"
            title="Best Place to Find
            Your Favorite
            Books."
            homeBgImage={homeBgImage}
            buttonTitle="Start Reading"
          />
          <PopularBooks data={data?.slice(5, 10)} title="Best sellers" />
          <PopularBooks data={crimeBooks?.slice(0, 5)} title="Action" />
          <PopularBooks data={fantasyBooks?.slice(0, 5)} title="Fantasy" />

          <div className="flex flex-wrap justify-center items-center gap-10 bg-gray-300 w-full py-[64px]">
            <h1 className="text-center text-4xl">Our happy clients</h1>
            <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-center md:items-center md:flex-wrap">
              <img src={readingWoman} className="w-1/2 md:w-1/6" />
              <img src={readingWomen} className="w-1/2 md:w-1/6" />
              <img src={manReading} className="w-1/2 md:w-1/6" />
              <img src={reading} className="w-1/2 md:w-1/6" />
              <img src={reading2} className="w-1/2 md:w-1/6" />
            </div>
          </div>
          <Newsletter />
          <div className="w-full">
            <Footer />
          </div>
        </main>
      )}
    </div>
  );
};

export default Home;
