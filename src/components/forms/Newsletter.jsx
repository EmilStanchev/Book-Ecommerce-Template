import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const initialValues = {
    email: "",
  };

  const handleSubscribe = (values) => {
    console.log(values.email);
    setEmailValue(values.email);
    setSubscribed(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  return (
    <div className="flex flex-col w-full justify-center items-center p-8 md:p-20">
      <h1 className="text-4xl font-bold">Join Our Newsletter</h1>
      <p className="text-gray-500 text-lg text-center md:text-left mt-4 md:mt-6">
        Signup to be the first to hear about exclusive deals, special offers and
        upcoming collections
      </p>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubscribe}
      >
        {subscribed ? (
          <p className="mt-6 text-green-600 text-lg">
            Thank you for subscribing! You will receive our weekly newsletter at{" "}
            {emailValue}
          </p>
        ) : (
          <Form className="flex flex-col justify-start lg:justify-center md:flex-row w-full mt-6 md:mt-8 md:gap-4">
            <Field
              type="email"
              name="email"
              className="w-full md:w-2/3 border-2 border-black p-3 md:p-5 text-lg"
              placeholder="Enter email for weekly newsletter"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-lg"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-black p-3 md:p-5 text-lg hover:text-red-400 text-white mt-4 md:mt-0"
              disabled={subscribed}
            >
              {subscribed ? "Subscribing..." : "Subscribe"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Newsletter;
