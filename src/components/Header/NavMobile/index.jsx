import React from "react";
import { planets as PlanetInfo } from "../../../services/data";

const NavMobile = ({ setPlanetId, active, setActive }) => {
  return (
    <ul
      className={
        active
          ? "flex flex-col absolute  left-0 mt-4 gap-10 bg-transparent bg-[#070724] z-10 w-full h-screen p-8 lg:hidden"
          : "hidden"
      }
    >
      {PlanetInfo.map((planet, index) => (
        <li
          className="relative flex items-center after:block after:absolute after:w-14 after:h-14 after:bg-[url('./assets/arrow.svg')] after:bg-no-repeat after:bg-center after:right-0 mt-3 pl-6 py-1 font-bold text-base text-white bg-transparent cursor-pointer "
          key={index}
          onClick={() => (setPlanetId(planet.id), setActive(false))}
        >
          <span
            style={{ background: planet.color }}
            className="mr-8 w-5 h-5 rounded-full bg-white"
          ></span>
          {planet.name}
        </li>
      ))}
    </ul>
  );
};

export default NavMobile;
