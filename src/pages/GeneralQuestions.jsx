/* eslint-disable react/prop-types */
import Footer from "../components/UI/Footer";
import LinkWithAnimation from "../components/UI/LinkWithAnimation";

const questions = [
  {
    question: "What is the origin story of Novel Nirvana?",
    path: "obb1",
    answer:
      "The origin story of our bookstore began when John Smith opened a small shop in USA back in 2014. Driven by a passion for literature and a desire to create a space for the community to connect with books, John Smith embarked on this journey, laying the foundation for what would become Novel Nirvana.",
  },
  {
    question: "How has Novel Nirvana evolved over the years?",
    path: "obb2",
    answer:
      "Over the years, Novel Nirvana has evolved significantly. From its humble beginnings as a small independent bookstore, we have expanded our offerings to include a wide range of genres and formats. We've also embraced technology, launching an online store to reach readers beyond our local community. Our commitment to providing exceptional service and fostering a love of reading remains unchanged, but our methods and reach have adapted to meet the needs of our ever-growing customer base.",
  },
  {
    question:
      "Are there any notable milestones or achievements in the history of Novel Nirvana?",
    path: "obb3",

    answer:
      "Throughout our history, Novel Nirvana has celebrated many milestones and achievements. Some of the most notable include being named 'Best Independent Bookstore' in our region for multiple consecutive years, hosting renowned authors for book signings and readings, and expanding to additional locations to better serve our customers. Each milestone represents a moment of pride and gratitude for our dedicated staff and loyal patrons.",
  },
  {
    question: "What sets Novel Nirvana apart from other bookstores?",
    path: "obb4",

    answer:
      "Novel Nirvana distinguishes itself from other bookstores through our unwavering commitment to personalized customer service, our diverse and carefully curated selection of books, and our deep-rooted connection to the local community. We pride ourselves on creating a welcoming and inclusive environment where book lovers of all ages and backgrounds can discover new literary treasures and engage in meaningful conversations.",
  },
  {
    question:
      "Has Novel Nirvana faced any challenges or adversity in its history?",
    path: "obb5",

    answer:
      "Like any business, Novel Nirvana has faced its share of challenges over the years. Economic downturns, changes in consumer behavior, and competition from online retailers have presented obstacles that required us to adapt and innovate to stay relevant. However, through strategic planning, dedication to our core values, and the unwavering support of our loyal customers, we have overcome these challenges and emerged stronger than ever.",
  },
  {
    question:
      "How does the history of Novel Nirvana reflect its commitment to literature and the community?",
    path: "obb6",

    answer:
      "The history of Novel Nirvana is a testament to our enduring commitment to literature and the community. From hosting book clubs and author events to supporting local schools and libraries, we have always sought to enrich the cultural fabric of our community through the power of books. Our belief in the transformative power of literature to educate, inspire, and unite people from all walks of life continues to drive everything we do.",
  },
  {
    question:
      "Are there any interesting anecdotes or stories from the early days of Novel Nirvana?",
    path: "obb7",
    answer:
      "In the early days of Novel Nirvana, there was a memorable incident where [share interesting anecdote or story from the early days of the bookstore]. This experience not only taught us valuable lessons about resilience and adaptability but also reinforced our commitment to providing exceptional service and fostering meaningful connections with our customers.",
  },
  {
    question: "What is the vision or philosophy that guides Novel Nirvana?",
    path: "obb8",
    answer:
      "The vision of Novel Nirvana is to serve as more than just a place to buy books; we aspire to be a cultural hub where people can come together to explore, learn, and connect. Our philosophy is rooted in the belief that books have the power to transform lives and communities, and we are committed to sharing that power with everyone who walks through our doors.",
  },
  {
    question:
      "How does Novel Nirvana honor its heritage while embracing modern trends and technology?",
    path: "obb9",

    answer:
      "While we honor our heritage as a traditional brick-and-mortar bookstore, we also recognize the importance of embracing modern trends and technology to remain relevant in today's digital age. By offering online ordering and e-book options, implementing social media marketing strategies, and hosting virtual author events, we ensure that Novel Nirvana remains accessible and engaging to a diverse audience of readers, both locally and globally.",
  },
  {
    question:
      "What are some memorable moments or experiences that customers have had at Novel Nirvana throughout its history?",
    path: "obb10",

    answer:
      "Throughout our history, customers have had many memorable experiences at Novel Nirvana. From chance encounters with favorite authors to discovering a long-lost childhood favorite on our shelves, each visit to our bookstore is filled with moments of joy, inspiration, and connection. We are grateful for the opportunity to be a part of our customers' reading journeys and look forward to creating many more cherished memories together.",
  },
];
const GeneralQuestions = () => {
  return (
    <div className="flex mt-[72px] flex-col items-center gap-10 justify-center ">
      <div className="flex flex-col items-start justify-start space-y-2 gap-10">
        <div className="flex flex-col items-start justify-start space-y-2">
          {questions?.map((question) => {
            return (
              <LinkWithAnimation
                key={question?.question}
                path={question?.path}
                text={question?.question}
                className="hover:text-gray-400 text-gray-600 border-b-2 border-b-black"
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-6xl py-5">
          {questions?.map((question) => {
            return (
              <div
                id={question?.path}
                key={question?.path}
                className="space-x-4"
              >
                <h4 className="text-lg font-bold mb-2">{question?.question}</h4>
                <p className="text-lg ">{question?.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GeneralQuestions;
