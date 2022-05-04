import React from 'react'
import Button from '../Button'
import pic from "../../assets/planet-neptune.svg";


const Planet = () => {
  return (
    <main className='p-2 container mx-auto text-white flex items-center justify-around border'>
        <div className='basis-1/2'>
            <img className='' src={pic} />
        </div>
        <aside className='basis-1/4'>
            <h1>Venus</h1>
            <p>Much of the Venusian surface appears to have been shaped by volcanic activity. 
                Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across.
                 The only volcanic complex of this size on Earth is the Big Island of Hawaii.</p>
            <div>
                <span>Source:</span>
                <a href="#">Wikipedia </a>
            </div>
            <Button></Button>
            <Button></Button>
            <Button></Button>

        </aside>
    </main>
  )
}

export default Planet