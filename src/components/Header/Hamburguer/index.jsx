import React from "react";
import {useState} from 'react'

const Hamburguer = ( {onClick}) => {

  const [isActive, setIsActive] = useState(true);

  const changeColor = () => {
    setIsActive(current => !current);
  };

  return (
    
    <button 
      aria-label="humburger"
      id="hamburger"
      className="relative w-10 h-10 -mr-2 lg:hidden bg-transparent"
      onClick={onClick}
    >
      <div
      style={{
        backgroundColor: isActive ? 'white' : '#979797'
      }}
      onClick={changeColor}
        aria-hidden="true"
        id="line"
        className="inset-0 w-8 h-0.5 m-auto rounded  transtion duration-300"
      ></div>
      <div
      style={{
        backgroundColor: isActive ? 'white' : '#979797'
      }}
      onClick={changeColor}
        aria-hidden="true"
        id="line2"
        className="inset-0 w-8 h-0.5 mt-2 m-auto rounded transtion duration-300"
      ></div>
      <div
      style={{
        backgroundColor: isActive ? 'white' : '#979797'
      }}
      onClick={changeColor}
        aria-hidden="true"
        id="line2"
        className="inset-0 w-8 h-0.5 mt-2 m-auto rounded  transtion duration-300"
      ></div>
    </button>
  );
};

export default Hamburguer;
