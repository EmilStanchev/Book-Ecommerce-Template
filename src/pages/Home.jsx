import homeBgImage from "../assets/images/bgimage.png";
import BoxWithImage from "../components/UI/BoxWithImage";
import Spinner from "../components/reusable/Spinner";
import { useGetPopularBooks } from "../hooks/useBook";

const Home = () => {
  const { isFetched } = useGetPopularBooks();

  return (
    <div
      className="flex justify-center
     items-center flex-wrap mt-[64px]"
    >
      {!isFetched ? (
        <Spinner />
      ) : (
        <>
          <BoxWithImage
            text="+5,000 books in one place"
            title="Welcome to Novel Nirvana"
            homeBgImage={homeBgImage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
