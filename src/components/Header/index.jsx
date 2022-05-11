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
        <nav>
          <ul className="flex flex-row text-[#c1c1c8] font-body font-bold tracking-widest ">
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
