import React from "react";
import { planets as PlanetInfo } from "../../../services/data";

const MenuItems = ({ setPlanetId, active }) => {
  return (
    <ul
      className={
        active
          ? "flex flex-col absolute left-0 mt-14 gap-10 bg-transparent bg-[#070724] z-10 w-full h-screen  p-8"
          : "hidden"
      }
    >
      {PlanetInfo.map((planet, index) => (
        <li
          className="relative flex items-center before:block before:absolute before:w-5 before:h-5 before:rounded-full before:-left-5 before:bg-teal-500  pl-6 py-3  font-bold text-lg text-white bg-transparent cursor-pointer"
          key={index}
          onClick={() => setPlanetId(planet.id)}
        >
          {planet.name}
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
