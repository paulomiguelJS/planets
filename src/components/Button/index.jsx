import React from 'react'

const Button = ({title, number}) => {
  return (
    <button className='flex align-item mt-5 p-4 border border-[#393950] hover:bg-[#6D2ED5] text-left font-body font-semibold text-xl'><span className='ml-4 mr-8 bg-transparent text-[#38384F] '>{number}</span>{title}</button>
  )
}

export default Button