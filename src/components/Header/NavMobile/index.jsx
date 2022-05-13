import React from "react";
import { planets as PlanetInfo } from "../../../services/data";


const MenuItems = ({ setPlanetId, showMenu, active}) => {
  return (
    <ul className={active ? 'flex flex-col absolute left-0 mt-14 gap-10 bg-transparent bg-[#070724]   w-full h-screen   p-8 md:hidden' : 'hidden'}>
    {PlanetInfo.map((planet, index) => (
      <li
        className="relative before:block before:absolute before:w-5 before:h-5 before:rounded-full before:bg-teal-500 before:left-[-22] p-2 border  font-bold text-lg hover:text-white bg-transparent"
        key={index}
        onClick={() => setPlanetId(planet.id)}
        style={{ cursor: "pointer" }}
      >
        {planet.name}
      </li>
    ))}
  </ul>
  );
};

export default MenuItems;
