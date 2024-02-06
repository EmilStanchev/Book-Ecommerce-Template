import FAQ from "./FAQ";

const questions = [
  {
    question: "How can I place an order?",
    answer:
      "To place an order, simply browse our website, select the books you wish to purchase, and proceed to checkout. Follow the prompts to enter your shipping and payment information, and your order will be processed.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and sometimes bank transfers. At checkout, you'll see the available payment options.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order has been shipped, you will receive a confirmation email with a tracking number and instructions on how to track your package. You can also log in to your account on our website to view the status of your order.",
  },
  {
    question: "Can I cancel or modify my order after it's been placed?",
    answer:
      "If you need to cancel or modify your order, please contact our customer service team as soon as possible. Once an order has been processed and shipped, we may not be able to make changes. However, we will do our best to accommodate your request.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We have a hassle-free return policy. If you're not satisfied with your purchase for any reason, you can return it within [number] days of receipt for a full refund or exchange. Please see our Returns & Exchanges page for more information.",
  },
  {
    question: "Do you offer gift wrapping or personalized messages?",
    answer:
      "Yes, we offer gift wrapping services and the option to include a personalized message with your order. During checkout, you'll have the opportunity to add these special touches to your purchase.",
  },
  {
    question: "Are there any discounts or promotions available?",
    answer:
      "We occasionally run promotions and discounts on select books or during certain times of the year. Be sure to sign up for our newsletter and follow us on social media to stay updated on our latest offers.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@example.com or by phone at [phone number]. We're available [days and hours] to assist you with any questions or concerns you may have.",
  },
];

const FAQSection = () => {
  return (
    <div className="mt-12 flex flex-col justify-center items-center w-full p-20">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6 w-full">
        {questions?.map((question) => {
          return (
            <div
              key={question?.question}
              className="flex flex-col justify-start w-full"
            >
              <FAQ question={question.question} answer={question?.answer} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
