import React from "react";
import { planets as PlanetInfo } from "../../services/data";

const Header = ({ setPlanetId }) => {
  return (
    <>
      <header className="flex justify-between items-center p-4 container mx-auto">
        <div>
          <h1 className="text-[#ffffff] font-title text-3xl cursor-pointer">
            THE PLANETS
          </h1>
        </div>
        <nav className=" lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent ">
          <button
            aria-label="humburger"
            id="hamburger"
            class="relative w-10 h-10 -mr-2 lg:hidden"
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
          <ul className="lg:flex hidden md:hidden text-[#c1c1c8] font-body font-bold tracking-widest">
            {PlanetInfo.map((planet, index) => (
              <li
                className="mx-3 p-5 hover:text-white"
                key={index}
                onClick={() => setPlanetId(planet.id)}
                style={{ cursor: "pointer" }}
              >
                {planet.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className=" border-b border-[#393950]"></div>;
    </>
  );
};

export default Header;
