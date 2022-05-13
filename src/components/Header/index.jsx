import React, { useState } from "react";
import { planets as PlanetInfo } from "../../services/data";
import Hamburguer from "./Hamburguer";
import MenuItems from "./NavMobile";

const Header = ({ setPlanetId }) => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="fixed w-full text-white flex justify-between p-4 item-center">
        <div>
          <h1 className="text-[#ffffff] font-title text-3xl cursor-pointer">
            THE PLANETS
          </h1>
        </div>
        <nav>
          <div className="absolute right-6">
            <Hamburguer onClick={showMenu} />
          </div>
          <ul className="hidden md:flex gap-8 p-6 bg-white/10">
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
          <MenuItems showMenu={showMenu} active={active} />
        </nav>
      </header>
      <div className=" border-b border-[#393950]"></div>;
    </>
  );
};

export default Header;
