import React from "react";

const Button = ({ title, number, onClick, planetData }) => {
  const backgroundcolor = () => {
    backgroundColor.style = "red";
  };

  return (
    <button
      onFocus={() => backgroundcolor()}
      onClick={onClick}
      className="flex align-item mt-5 p-4 border border-[#393950] hover:bg-[#38384F] text-left font-body font-semibold text-xl focus:red"
    >
      <span className="ml-4 mr-8 bg-transparent text-[#38384F] ">{number}</span>
      {title}
    </button>
  );
};

export default Button;
