import React from "react";

const Cards = ({ planetData }) => {

  
  return (
    <div className="container flex justify-around mx-auto mt-10 ">
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-56 h-32 pl-5 py-3 animate-[fade-in-down_2s_ease-out]	">
        <h4 className="text-[#737383] font-body text-base mb-2 font-semibold">ROTATION TIME</h4>
        <span className="font-title text-4xl">{planetData?.rotation}</span>
      </div>
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-56 h-32 pl-5 py-3 animate-[fade-in-down_2.5s_ease-out]">
        <h4 className="text-[#737383] font-body text-base mb-2 font-semibold">REVOLUTION TIME</h4>
        <span className="font-title text-4xl">{planetData?.revolution}</span>
      </div>
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-56 h-32 pl-5 py-3 animate-[fade-in-down_2.8s_ease-out]">
        <h4 className="text-[#737383] font-body text-base mb-2 font-semibold">RADIUS</h4>
        <span className="font-title text-4xl">{planetData?.radius}</span>
      </div>
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-56 h-32 pl-5 py-3 animate-[fade-in-down_3s_ease-out]">
        <h4 className="text-[#737383] font-body text-base mb-2 font-semibold">AVERAGE TEMP.</h4>
        <span className="font-title text-4xl">{planetData?.average}</span>
      </div>
    </div>
  );
};

export default Cards;
