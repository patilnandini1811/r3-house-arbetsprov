import React from 'react'
import hamburgerImage from '../assets/hamburger.png'
const Header = () => {
  return (
    <>
   <hrader className= "absolute inset-x-0 z-20 top-0 flex items-center justify-between px-8 py-6 bg-transparent">
   <div className="text-white text-[30px] font-normal leading-none tracking-wide">
    House
   </div>
   <a className="text-4xl text-white" href='#'> &#8801;</a>
   
   </hrader>

    </>
   
  )
}

export default Header