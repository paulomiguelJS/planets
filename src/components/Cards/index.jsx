import React from "react";

const Cards = () => {
  return (
    <div className="container flex justify-around mx-auto mt-10 ">
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-56 h-32 pl-5 py-3">
        <h4 className="text-[#737383] font-body text-base mb-2 font-semibold">ROTATION TIME</h4>
        <span className="font-title text-4xl">0.99 DAYS</span>
      </div>
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-56 h-32 pl-5 py-3">
        <h4 className="text-[#737383] font-body text-base mb-2 font-semibold">REVOLUTION TIME</h4>
        <span className="font-title text-4xl">365.26 DAYS</span>
      </div>
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-56 h-32 pl-5 py-3">
        <h4 className="text-[#737383] font-body text-base mb-2 font-semibold">RADIUS</h4>
        <span className="font-title text-4xl">6,371 KM</span>
      </div>
      <div className="border border-[#20203a] flex flex-col justify-center text-white w-56 h-32 pl-5 py-3">
        <h4 className="text-[#737383] font-body text-base mb-2 font-semibold">AVERAGE TEMP.</h4>
        <span className="font-title text-4xl">16°C</span>
      </div>
    </div>
  );
};

export default Cards;
