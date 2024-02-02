import homeBgImage from "../assets/images/bgimage.png";
import BoxWithImage from "../components/UI/BoxWithImage";

const Home = () => {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <BoxWithImage
        text="+5,000 books in one place"
        title="Welcome to Novel Nirvana"
        homeBgImage={homeBgImage}
      />
    </div>
  );
};

export default Home;
