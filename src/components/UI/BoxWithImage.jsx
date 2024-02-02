/* eslint-disable react/prop-types */

const BoxWithImage = ({ homeBgImage, title, text }) => {
  return (
    <div className="flex  mt-[64px] min-h-screen justify-center items-center flex-wrap flex-row">
      <div className="text-center lg:w-1/2 lg:pr-8 flex flex-col">
        <h1 className="text-4xl text-black font-bold mb-4">{title}</h1>
        <p className="text-lg text-black">{text}</p>
      </div>
      <div className="lg:w-1/2">
        <img
          src={homeBgImage}
          alt="book with illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BoxWithImage;
