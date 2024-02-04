import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    console.log(email);
    setSubscribed(true);
  };
  return (
    <div className="flex flex-col w-full gap-2 justify-center items-center p-20">
      <h1 className="text-4xl font-bold">Join Our Newsletter</h1>
      <p className="text-gray-500 text-lg">
        Signup to be the first to hear about exclusive deals, special offers and
        upcoming collections
      </p>
      <div className="flex flex-row justify-center gap-10 w-full mt-7">
        {!subscribed ? (
          <>
            <input
              className="w-1/3 border-2 border-black p-5 text-xl"
              placeholder="Enter email for weekly newsletter "
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-black p-5 text-xl hover:text-red-400 text-white"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </>
        ) : null}
        {subscribed ? (
          <p className="mt-3 text-green-600 text-lg">
            Thank you for subscribing! You will receive our weekly newsletter at{" "}
            {email}.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Newsletter;
