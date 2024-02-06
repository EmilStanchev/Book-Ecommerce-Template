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
    <div className="flex flex-col w-full gap-2 justify-center items-center p-20">
      <h1 className="text-4xl font-bold">Join Our Newsletter</h1>
      <p className="text-gray-500 text-lg">
        Signup to be the first to hear about exclusive deals, special offers and
        upcoming collections
      </p>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubscribe}
      >
        {subscribed ? (
          <p className="mt-3 text-green-600 text-lg">
            Thank you for subscribing! You will receive our weekly newsletter at{" "}
            {emailValue}
          </p>
        ) : (
          <Form className="flex flex-row justify-center gap-10 w-full mt-7">
            <Field
              type="email"
              name="email"
              className="w-1/3 border-2 border-black p-5 text-xl"
              placeholder="Enter email for weekly newsletter"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-lg"
            />
            <button
              type="submit"
              className="bg-black p-5 text-xl hover:text-red-400 text-white"
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
