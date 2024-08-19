/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as cardValidator from "card-validator";
import { useNavigate } from "react-router-dom";

const Payment = ({ getTotal }) => {
  const navigate = useNavigate();

  const shipping = getTotal() <= 0 ? 0 : 8;

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    cardHolder: Yup.string().required("Card holder name is required"),
    cardNo: Yup.string()
      .test("credit-card", "Invalid credit card number", (value) => {
        const isValid = cardValidator.number(value).isValid;
        return isValid;
      })
      .required("Card number is required"),
    creditExpiry: Yup.string()
      .test("expiry", "Invalid expiry date", (value) => {
        const { isValid } = cardValidator.expirationDate(value);
        return isValid;
      })
      .required("Expiry date is required")
      .matches(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "Expiry date should be in MM/YY format"
      ),
    creditCVC: Yup.string()
      .test("cvv", "Invalid CCV", (value) => {
        const isValid = cardValidator.cvv(value).isValid;
        return isValid;
      })
      .required("CCV is required")
      .matches(/^\d{3}$/, "CCV should be a 3-digit number"),
    billingAddress: Yup.string().required("Billing address is required"),
    billingZIP: Yup.string().required("ZIP code is required"),
  });

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);

    // Navigate to the /checkDelivery page after successful submission
    navigate("/checkDelivery");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        cardHolder: "",
        cardNo: "",
        creditExpiry: "",
        creditCVC: "",
        billingAddress: "",
        billingZIP: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="your.email@gmail.com"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <label
              htmlFor="cardHolder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <Field
                type="text"
                id="cardHolder"
                name="cardHolder"
                placeholder="Your full name here"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="cardHolder"
                component="div"
                className="text-red-500"
              />
            </div>
            <label
              htmlFor="cardNo"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <Field
                  type="text"
                  id="cardNo"
                  name="cardNo"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="cardNo"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <Field
                type="text"
                name="creditExpiry"
                placeholder="MM/YY"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="creditExpiry"
                component="div"
                className="text-red-500"
              />
              <Field
                type="text"
                name="creditCVC"
                placeholder="CVC"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="creditCVC"
                component="div"
                className="text-red-500"
              />
            </div>
            <label
              htmlFor="billingAddress"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <Field
                  type="text"
                  id="billingAddress"
                  name="billingAddress"
                  placeholder="Street Address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="billingAddress"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <Field
                type="text"
                name="billingZIP"
                placeholder="ZIP"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="billingZIP"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-md font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-lg text-gray-900">
                  ${getTotal()}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-md font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-lg text-gray-900">
                  ${shipping}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xl font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                ${getTotal() + shipping}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Place Order"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Payment;
