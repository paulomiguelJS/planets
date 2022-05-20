import React, { useState } from "react";
import { planets as PlanetInfo } from "../../../services/data";
import Hamburguer from "../Hamburguer";
import NavMobile from "../NavMobile";

const Header = ({ setPlanetId }) => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 container mx-auto">
        <div>
          <h1 className="text-[#ffffff] font-title text-3xl cursor-pointer">
            THE PLANETS
          </h1>
        </div>
        <nav>
          <div className="absolute right-6 top-4">
            <Hamburguer onClick={showMenu} />
          </div>
          <ul className="lg:flex  text-[#c1c1c8] font-body font-bold tracking-widest hidden md:hidden ">
            {PlanetInfo.map((planet, index) => (
              <li
                className="mx-4 p-1 cursor-pointer hover:text-white"
                key={index}
                onClick={() => setPlanetId(planet.id)}
              >
                {planet.name}
              </li>
            ))}
          </ul>
          <NavMobile showMenu={showMenu} active={active} setPlanetId={setPlanetId} setActive={setActive} />
        </nav>
      </header>
      <div className=" border-b border-[#393950]"></div>
    </>
  );
};

export default Header;
