import { useState, useEffect } from "react";
import { FaBoxOpen, FaTruck, FaBus, FaHome } from "react-icons/fa";

const CheckDelivery = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) =>
        prevStep < steps.length - 1 ? prevStep + 1 : prevStep
      );
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "Order Placed", icon: <FaBoxOpen />, bgColor: "bg-orange-500" },
    { label: "Order Shipped", icon: <FaTruck />, bgColor: "bg-blue-500" },
    { label: "Out Delivery", icon: <FaBus />, bgColor: "bg-teal-500" },
    { label: "Delivered", icon: <FaHome />, bgColor: "bg-red-500" },
  ];

  return (
    <div className="flex items-center justify-center h-screen p-8">
      <div className="max-w-6xl w-full p-8 rounded-lg">
        <div className="flex flex-col mb-5">
          <h1 className="text-4xl font-bold mb-10 text-black">
            Delivery Status
          </h1>
          <h3 className="text-xl font-semibold">
            Here you can follow your order. Stay updated
          </h3>
        </div>
        <div className="hidden md:flex relative">
          <div className="flex items-center w-full">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative flex-1"
              >
                {index > 0 && (
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 left-0 h-1 ${
                      index <= currentStep ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    style={{
                      width: `calc(50% - 2rem)`,
                      transition: "background-color 0.5s ease",
                    }}
                  ></div>
                )}

                <div
                  className={`w-16 h-16 flex items-center justify-center ${
                    index <= currentStep ? step.bgColor : "bg-gray-300"
                  } rounded-full text-white mb-4`}
                >
                  {step.icon}
                </div>
                <p className="text-lg font-medium text-gray-700">
                  {step.label}
                </p>

                {/* Connecting line after the step */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 right-0 h-1 ${
                      index < currentStep ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    style={{
                      width: `calc(50% - 2rem)`,
                      transition: "background-color 0.5s ease",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:hidden relative items-center ">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-12">
              <div
                className={`w-8 h-8 flex items-center justify-center ${
                  index <= currentStep ? step.bgColor : "bg-gray-300"
                } rounded-full text-white mr-6`}
              >
                {step.icon}
              </div>
              <p className="text-lg font-medium text-gray-700">{step.label}</p>
            </div>
          ))}
          <div
            className={`absolute left-8 top-0 bottom-0 w-2 ${
              currentStep === steps.length - 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CheckDelivery;
