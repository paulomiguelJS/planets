import React from 'react'

const Header = () => {
  return (
      <header className='flex justify-between items-center p-4'>
           <div>
        <h1>The Planets</h1>
        </div>
        <nav >
       <ul className='flex flex-row '>
           <li>MERCURY</li>
           <li>VENUS</li>
           <li>EARTH</li>
           <li>MARS</li>
           <li>JUPITER</li>
           <li>SATURN</li>
           <li>URANUS</li>
           <li>NEPTUNE</li>
       </ul>
       </nav>
      </header>
   
  )
}

export default Header