import React, { useState } from "react";

const Button = ({ title, number, onClick, bgColor }) => {
  const [changeColor, setChangeColor] = useState(false);

  return (
    <button
      style={{ background: changeColor ? bgColor : "transparent" }}
      onFocus={() => setChangeColor(true)}
      onBlur={() => setChangeColor(false)}
      onClick={onClick}
      target="_blank"
      className="flex align-item mt-5 p-4 border border-[#393950] hover:bg-[#38384F] text-left font-body font-semibold text-xl animate-[fade-in-down_1.5s_ease-out]"
    >
      <span className="ml-4 mr-8 bg-transparent text-[#38384F] ">{number}</span>
      {title}
    </button>
  );
};

export default Button;
