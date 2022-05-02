import React from 'react'

const Header = () => {
  return (
      <header className='flex justify-between items-center p-4'>
           <div>
        <h1 className='text-[#ffffff]'>THE PLANETS</h1>
        </div>
        <nav >
       <ul className='flex flex-row text-[#c1c1c8] '>
           <li className='mx-3'><a href="">MERCURY</a></li>
           <li className='mx-3'><a href="">VENUS</a></li>
           <li className='mx-3'><a href="">EARTH</a></li>
           <li className='mx-3'><a href="">MARS</a></li>
           <li className='mx-3'><a href="">JUPITER</a></li>
           <li className='mx-3'><a href="">SATURN</a></li>
           <li className='mx-3'><a href="">URANUS</a></li>
           <li className='mx-3'><a href="">NEPTUNE</a></li>
       </ul>
       </nav>
      </header>
   
  )
}

export default Header