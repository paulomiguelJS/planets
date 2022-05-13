import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header/NavDesktop";
import Planet from "../components/Planet";
import { planets as planetsList } from "../services/data";

const Home = () => {
  const [planetId, setPlanetId] = useState(1);
  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    planetsList.map(
      (infoPlanets) => infoPlanets.id === planetId && setPlanetData(infoPlanets)
    );
  }, [planetId]);

  return (
    <>
      <Header setPlanetId={setPlanetId} />
      <Planet planetData={planetData} />
      <Cards planetData={planetData} />
    </>
  );
};

export default Home;
