import React from 'react'

const Header = () => {
  return (
    <>
      <header className='flex justify-between items-center p-4 container mx-auto'>
           <div>
        <h1 className='text-[#ffffff] font-title text-3xl cursor-pointer'>THE PLANETS</h1>
        </div>
        <nav >
       <ul className='flex flex-row text-[#c1c1c8] font-body font-bold tracking-widest '>
           <li className='mx-3 hover:text-white'><a href="">MERCURY</a></li>
           <li className='mx-3 hover:text-white'><a href="">VENUS</a></li>
           <li className='mx-3 hover:text-white'><a href="">EARTH</a></li>
           <li className='mx-3 hover:text-white'><a href="">MARS</a></li>
           <li className='mx-3 hover:text-white'><a href="">JUPITER</a></li>
           <li className='mx-3 hover:text-white'><a href="">SATURN</a></li>
           <li className='mx-3 hover:text-white'><a href="">URANUS</a></li>
           <li className='mx-3 hover:text-white'><a href="">NEPTUNE</a></li>
       </ul>
       </nav>
      </header>
      <div className="border-b border-[#ccb3b3]"></div>;
      </>
  )
}

export default Header