/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const IconWithText = ({ icon, text, title, path }) => {
  return (
    <Link to={path}>
      <div className="flex flex-col justify-center items-center p-4 max-w-[320px]">
        <div className="flex justify-center items-center flex-col border-b-2 border-b-black">
          <div className="mr-4">{icon}</div>
          <h3 className="text-xl text-red-500 text-center capitalize">
            {title}
          </h3>
        </div>
        <p className="text-md text-center">{text}</p>
      </div>
    </Link>
  );
};

export default IconWithText;
