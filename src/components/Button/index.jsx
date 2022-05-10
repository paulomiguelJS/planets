import React from "react";

const Button = ({ title, number, onClick, planetData }) => {
  return (
    <button onClick={onClick} className="flex align-item mt-5 p-4 border border-[#393950] hover:bg-[#38384F] text-left font-body font-semibold text-xl focus:bg-violet-700"  >
      <span className="ml-4 mr-8 bg-transparent text-[#38384F] ">{number}</span>
      {title}
    </button>
  );
};

export default Button;
