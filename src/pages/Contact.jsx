import IconWithText from "../components/UI/IconWithText";
import QuestionMarkIcon from "../assets/icons/QuestionMarkIcon";
import BookIcon from "../assets/icons/BookIcon";
import PencilIcon from "../assets/icons/PencilIcon";
import Footer from "../components/UI/Footer";

const Contact = () => {
  return (
    <>
      <div className=" flex justify-center h-screen flex-col items-center gap-[64px] py-12">
        <div className="px-4 py-5 justify-center items-center flex flex-col gap-5 sm:px-6">
          <h3 className="text-4xl text-center capitalize font-semibold leading-6 text-gray-900">
            How can we help?
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Have questions? We are here to help.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 h-1/2 justify-center items-center content-center">
          <IconWithText
            icon={<QuestionMarkIcon className="w-12 h-12 text-red-500" />}
            title="General questions"
            text="General questions about Novel Nirvana"
            path="generalQuestions"
          />
          <IconWithText
            icon={<BookIcon className="w-12 h-12 text-red-500" />}
            title="Novel Nirvana questions"
            path="../about#questions"
            text="Questions and answers about Novel Nirvana for independent bookstore owners & employees."
          />
          <IconWithText
            icon={<PencilIcon className="w-12 h-12 text-red-500" />}
            path="../about#teamSection"
            title="Our story"
            text="Our story and our team"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
