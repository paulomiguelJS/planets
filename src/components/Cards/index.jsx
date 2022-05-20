import React from "react";

const Cards = ({ planetData }) => {
  return (
    <div className="container flex  justify-center items-center lg:justify-around mx-auto mt-10 flex-col p-3 lg:flex-row ">
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-full h-11/12 lg:w-56 lg:h-32 lg:pl-5 py-3 animate-[fade-in-down_2s_ease-out] mb-2">
        <h4 className="text-[#737383] font-body text-center text-sm lg:text-base mb-2 font-semibold">ROTATION TIME</h4>
        <span className="font-title text-2xl lg:text-4xl text-center">{planetData?.rotation}</span>
      </div>
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-full h-11/12 lg:w-56 lg:h-32 lg:pl-5 py-3 animate-[fade-in-down_2s_ease-out] mb-2">
        <h4 className="text-[#737383] font-body text-center text-sm lg:text-base mb-2 font-semibold">REVOLUTION TIME</h4>
        <span className="font-title text-2xl lg:text-4xl text-center">{planetData?.revolution}</span>
      </div>
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-full h-11/12 lg:w-56 lg:h-32 lg:pl-5 py-3 animate-[fade-in-down_2s_ease-out] mb-2">
        <h4 className="text-[#737383] font-body text-center text-sm lg:text-base mb-2 font-semibold">RADIUS</h4>
        <span className="font-title text-2xl lg:text-4xl text-center">{planetData?.radius}</span>
      </div>
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-full h-11/12 lg:w-56 lg:h-32 lg:pl-5 py-3 animate-[fade-in-down_2s_ease-out] mb-2">
        <h4 className="text-[#737383] font-body text-center text-sm lg:text-base mb-2 font-semibold">AVERAGE TEMP.</h4>
        <span className="font-title text-2xl lg:text-4xl text-center">{planetData?.average}</span>
      </div>
    </div>
  );
};

export default Cards;
