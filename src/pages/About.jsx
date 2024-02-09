import ServiceCard from "../components/reusable/ServiceCard";
import BookIcon from "../assets/icons/BookIcon";
import NavigationIcon from "../assets/icons/NavigationIcon";
import SecurityIcon from "../assets/icons/SecurityIcon";
import RocketIcon from "../assets/icons/RocketIcon";
import FAQSection from "../components/aboutUs/FAQSection";
import bgImage from "../assets/images/aboutImage.jpeg";
import Newsletter from "../components/forms/Newsletter";
import TeamSection from "../components/aboutUs/TeamSection";
import Footer from "../components/UI/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col gap-10 justify-center items-center">
      <div className="relative  w-full flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={bgImage}
            alt="Background image "
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <Link
                to="/books"
                className=" hover:cursor-pointer inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
              <a
                href="#teamSection"
                aria-label=""
                className="inline-flex hover:cursor-pointer items-center font-semibold text-gray-800"
              >
                Learn more about us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center shadow-md w-full ">
        <h3 className="text-xl font-bold mb-6 text-center">
          Experience the convenience and joy of shopping for books online
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 my-5 gap-5">
          <ServiceCard
            icon={<BookIcon className="w-6 h-6" />}
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
        <TeamSection />
        <FAQSection />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default About;
