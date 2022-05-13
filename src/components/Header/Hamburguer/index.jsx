import React from "react";

const Hamburguer = ( {onClick}) => {
  return (
    <button 
      aria-label="humburger"
      id="hamburger"
      class="relative w-10 h-10 -mr-2 lg:hidden"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        id="line"
        class="inset-0 w-8 h-0.5 m-auto rounded bg-white transtion duration-300"
      ></div>
      <div
        aria-hidden="true"
        id="line2"
        class="inset-0 w-8 h-0.5 mt-2 m-auto rounded bg-white transtion duration-300"
      ></div>
      <div
        aria-hidden="true"
        id="line2"
        class="inset-0 w-8 h-0.5 mt-2 m-auto rounded bg-white transtion duration-300"
      ></div>
    </button>
  );
};

export default Hamburguer;
