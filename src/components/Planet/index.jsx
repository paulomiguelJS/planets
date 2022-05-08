import React from 'react'
import {planets} from '../../services/data'
import Button from '../Button'
import pic from "../../assets/planet-neptune.svg";


const Planet = () => {





  return (
    <main className='p-2 mt-12 container mx-auto text-white flex items-center justify-around'>
            <img className="basis-1/3 transform transition duration-1000 hover:scale-110  "  src={pic} />
        <aside className='basis-1/4'>


          {planets.map((planet) => (
            <div>{planet.name}</div>
          ))}

          
            <p className='font-body text-base mb-3'>Much of the Venusian surface appears to have been shaped by volcanic activity. 
                Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across.
                 The only volcanic complex of this size on Earth is the Big Island of Hawaii.</p>
            <div>
                <span>Source:</span>
                <a href="#">Wikipedia </a>
            </div>
            <div className='flex flex-col'>
            <Button number="01" title="OVERVIEW"/>
            <Button number="02" title="INTERNAL STRUCTURE"/>
            <Button number="03" title="SURFACE GEOLOGY"/>
            </div>
        </aside>
    </main>
  )
}

export default Planet