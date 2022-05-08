import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Planet from "../components/Planet";
import { planets as planetsList } from "../services/data";

const Home = () => {
  const [planetId, setPlanetId] = useState(1);
  const [planetData, setPlanetData] = useState([]);  


  useEffect(() => {
    planetsList.map((infoPlanets) => infoPlanets.id === planetId && setPlanetData(infoPlanets));
  }, [planetId])

  return (
    <>
      <Header setPlanetId={setPlanetId}/>
      <Planet planetData={planetData}/>
      <Cards />
    </>
  );
};

export default Home;
