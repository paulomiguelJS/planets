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
           <li><a  className='mx-3 p-5 hover:text-white' href="">MERCURY</a></li>
           <li><a  className='mx-3 p-5 hover:text-white' href="">VENUS</a></li>
           <li><a  className='mx-3 p-5 hover:text-white' href="">EARTH</a></li>
           <li><a  className='mx-3 p-5 hover:text-white' href="">MARS</a></li>
           <li><a  className='mx-3 p-5 hover:text-white' href="">JUPITER</a></li>
           <li><a  className='mx-3 p-5 hover:text-white' href="">SATURN</a></li>
           <li><a  className='mx-3 p-5 hover:text-white' href="">URANUS</a></li>
           <li><a  className='mx-3 p-5 hover:text-white' href="">NEPTUNE</a></li>
       </ul>
       </nav>
      </header>
      <div className=" border-b border-[#393950]"></div>;
      </>
  )
}

export default Header