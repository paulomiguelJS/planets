import React from 'react'
import {planets} from '../../services/data'
import Button from '../Button'

const Planet = ({planetData}) => {


  return (
    <main className='p-2 mt-12 container mx-auto text-white flex items-center justify-around'>
        <img className="basis-1/3 transform transition duration-1000 hover:scale-110" src={planetData?.planetover} alt={'Imagem'} style={{height: '500px'}}/>
        <aside className='basis-1/4'>

            <h1 className='font-title text-7xl mb-10'>{planetData?.name}</h1>        
            <p className='font-body text-base mb-3'>{planetData?.overview}</p>
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