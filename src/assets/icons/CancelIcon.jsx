/* eslint-disable react/prop-types */

const CancelIcon = ({ className, onClick }) => {
  return (
    <svg
      className={`${className} inline-block w-12 h-12 stroke-black`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
    >
      <path
        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default CancelIcon;
