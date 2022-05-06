import React from 'react'
import Button from '../Button'
import pic from "../../assets/planet-neptune.svg";


const Planet = () => {
  return (
    <main className='p-2 mt-12 container mx-auto text-white flex items-center justify-around'>
            <img className="basis-1/3 hover:scale-110 hover:ease-in-out duration-300 "  src={pic} />
        <aside className='basis-1/4'>
            <h1 className='font-title text-7xl mb-10'>VENUS</h1>
            <p className='font-body text-base mb-3'>Much of the Venusian surface appears to have been shaped by volcanic activity. 
                Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across.
                 The only volcanic complex of this size on Earth is the Big Island of Hawaii.</p>
            <div>
                <span>Source:</span>
                <a href="#">Wikipedia </a>
            </div>
            <div className='flex flex-col'>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            </div>
            

        </aside>
    </main>
  )
}

export default Planet