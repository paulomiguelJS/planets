import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Planet from "../components/Planet";

const Home = () => {


  return (
    <>
      <Header />
      <Planet />
      <Cards />
    </>
  );
};

export default Home;
