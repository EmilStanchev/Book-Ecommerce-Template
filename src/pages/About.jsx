import ServiceCard from "../components/reusable/ServiceCard";
import BookIcon from "../assets/icons/BookIcon";
import NavigationIcon from "../assets/icons/NavigationIcon";
import SecurityIcon from "../assets/icons/SecurityIcon";
import RocketIcon from "../assets/icons/RocketIcon";
import FAQSection from "../components/aboutUs/FAQSection";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col gap-10 justify-center items-center">
      <div className="max-w-4xl p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Our Bookstore
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          libero ipsum. Duis interdum magna in dolor vehicula, sit amet
          fringilla ante pellentesque. Phasellus sed nulla eget lectus mattis
          ultricies. Vivamus lacinia vitae arcu eget ultricies. Phasellus
          accumsan scelerisque justo, nec malesuada odio vehicula vel. Ut vel
          risus felis.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Vestibulum nec fringilla sem. Nulla facilisi. Nullam non metus nec
          justo placerat auctor ac a felis. Morbi a nulla tincidunt, lobortis
          massa id, euismod urna. Ut dictum, enim a vestibulum lobortis, libero
          velit hendrerit tortor, sit amet pharetra nulla lacus eu leo. Cras
          molestie dui nec metus dignissim, at scelerisque arcu rhoncus. Aenean
          pulvinar, sapien ac euismod sodales, sapien odio tempus urna, et
          dapibus velit ligula eu odio.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Nulla facilisi. Proin a lacinia risus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Sed
          eu tincidunt dui. Nam vel velit nec quam sollicitudin tincidunt.
          Curabitur dictum justo eu tincidunt lacinia. Sed consectetur leo eu
          dui rhoncus efficitur. Phasellus hendrerit dictum nulla, sed ultricies
          urna fringilla id. Morbi at justo vel enim interdum congue. Sed nec
          ultrices ligula.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center shadow-md w-full ">
        <h3 className="text-xl font-bold mb-6 text-center">
          Experience the convenience and joy of shopping for books online
        </h3>
        <div className="grid grid-cols-2 my-5 gap-5">
          <ServiceCard
            icon={<BookIcon />}
            title="Wide Selection"
            description="Choose from a vast collection of books in various genres"
          />
          <ServiceCard
            icon={<NavigationIcon />}
            title="Easy Navigation"
            description="Find your desired books quickly with our user-friendly interface"
          />
          <ServiceCard
            icon={<SecurityIcon />}
            title="Secure Checkout"
            description="Shop with confidence knowing that your payment information is safe and secure"
          />
          <ServiceCard
            icon={<RocketIcon />}
            title="Fast Delivery"
            description="Get your books delivered to your doorstep in no time"
          />
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default About;
