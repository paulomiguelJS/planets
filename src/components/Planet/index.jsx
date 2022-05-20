import React, { useEffect, useState } from "react";
import Button from "../Button";


const Planet = ({ planetData }) => {
  const [planetText, setPlanetText] = useState();
  const [planetImage, setPlanetImage] = useState();


  useEffect(() => {
    setPlanetText(planetData.overview);
    setPlanetImage(planetData.planetover);
  }, [planetData.overview, planetData.planetover]);

  return (
    <>
      <nav className="lg:hidden w-full">
        <ul className=" flex flex-row text-white  font-body font-bold justify-around mt-2">
          <li
            onClick={() => {
              setPlanetText(planetData.overview);
              setPlanetImage(planetData.planetover);
            }}
            className="cursor-pointer border-b-2 border-transparent hover:border-solid hover:border-b-2 hover:border-white"
          >
            OVERVIEW
          </li>
          <li
            onClick={() => {
              setPlanetText(planetData.internal);
              setPlanetImage(planetData.planetinter);
            }}
            className="cursor-pointer border-b-2 border-transparent hover:border-solid hover:border-b-2 hover:border-white"
          >
            INTERNAL STRUCTURE
          </li>
          <li        
            onClick={() => {
              setPlanetText(planetData.internal);
              setPlanetImage(planetData.planetsurf);
            }}
            className="cursor-pointer border-b-2 border-transparent hover:border-solid hover:border-b-2 hover:border-white"
          >
            SURFACE GEOLOGY
          </li>
        </ul>
        <div className="mt-0 lg:hidden border-b border-[#393950]"></div>
      </nav>
      <main className="flex flex-col items-center justify-around lg:flex-row p-2 container mx-auto text-white">
        <img
          className="basis-1/3 w-96 transform transition duration-1000 lg:hover:scale-110 animate-[fade-in-down_2s_ease-out] z-0 mt-12"
          src={planetImage}
          alt={"Imagem"}
        />
        <aside className="basis-1/4">
          <h1 className="font-title lg:text-7xl mb-10 animate-[fade-in-down_0.5s_ease-out] mt-12 text-5xl">
            {planetData?.name}
          </h1>
          <p className="font-body text-base mb-3 animate-[fade-in-down_0.8s_ease-out]">
            {planetText}
          </p>
          <div className="mt-3 animate-[fade-in-down_0.9s_ease-out]">
            <span>Source:</span>
            <a href={planetData.source}> Wikipedia </a>
          </div>
          <div className="hidden lg:flex lg:flex-col ">
            <Button
              bgColor={planetData.color}
              onClick={() => {
                setPlanetText(planetData.overview);
                setPlanetImage(planetData.planetover);
              }}
              number="01"
              title="OVERVIEW"
            />
            <Button
              bgColor={planetData.color}
              onClick={() => {
                setPlanetText(planetData.internal);
                setPlanetImage(planetData.planetinter);
              }}
              number="02"
              title="INTERNAL STRUCTURE"
            />
            <Button
              bgColor={planetData.color}
              onClick={() => {
                setPlanetText(planetData.internal);
                setPlanetImage(planetData.planetsurf);
              }}
              number="03"
              title="SURFACE GEOLOGY"
            />
          </div>
        </aside>
      </main>
    </>
  );
};

export default Planet;
