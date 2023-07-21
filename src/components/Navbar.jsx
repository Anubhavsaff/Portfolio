import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav,setNav]=useState(false)
  return (
    <div className='flex justify-between items-center w-full h-20 fixed text-white bg-black
    px-4'>
      <div className='text-5xl font-Signature ml-2'>Anubhav</div>
      
      <ul className='hidden md:flex gap-14 px-6 ' >
          <li className=' py-4 cursor-pointer capitalize text-lg text-gray-500
          hover:scale-105 duration-200'>
          <Link to='home' smooth duration={500}>home</Link></li>
       <li className='py-4 cursor-pointer capitalize text-lg text-gray-500
          hover:scale-105 duration-200'>
            <Link to='about' smooth duration={500}>about</Link></li>
           <li className='py-4 cursor-pointer capitalize text-lg text-gray-500
          hover:scale-105 duration-200'>
            <Link to='portfolio' smooth duration={500}>portfolio</Link></li>
           <li className='py-4 cursor-pointer capitalize text-lg text-gray-500
          hover:scale-105 duration-200'>
            <Link to='experience' smooth duration={500}>experience</Link></li>
           <li className='py-4 cursor-pointer capitalize text-xl text-gray-500
          hover:scale-105 duration-200'>
             <Link to='contact' smooth duration={500}>contact</Link></li>
      </ul>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-2 z-10 text-gray-500 md:hidden  '>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
      </div>
      {nav && (
           <ul className='flex flex-col justify-center items-center absolute
           top-0 left-0 w-full h-screen bg-gradient-to-b from-black
           to-gray-800 text-gray-500'>
            <li className='px-4 capitalize cursor-pointer py-6 text-3xl '>
            <Link onClick={(()=>setNav(!nav))} to='home' smooth duration={500}>home</Link></li>
            <li className='px-4 capitalize cursor-pointer py-6 text-3xl'>
            <Link onClick={(()=>setNav(!nav))} to='about' smooth duration={500}>about</Link></li>
            <li className='px-4 capitalize cursor-pointer py-6 text-3xl'>
            <Link onClick={(()=>setNav(!nav))} to='portfolio' smooth duration={500}>portfolio</Link></li>
            <li className='px-4 capitalize cursor-pointer py-6 text-3xl'>
            <Link onClick={(()=>setNav(!nav))} to='experience' smooth duration={500}>experience</Link></li>
            <li className='px-4 capitalize cursor-pointer py-6 text-3xl'>
            <Link onClick={(()=>setNav(!nav))} to='contact' smooth duration={500}>contact</Link></li>
           </ul>
      )
      }
      

      </div>
   
    
  )
}

export default Navbar
