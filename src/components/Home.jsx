import React from 'react'
import HeroImage from "../assets/heroImage.png.jpg"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div
    name="home"
    className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center
     justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center  md:px-10 '>
            <h2 className='text-3xl  sm:text-5xl  md:text-5xl font-bold text-white'>
                I'm a Frontend <br/>Developer
            </h2>
            <p className='text-gray-500  sm:py-1 '>I'm a React-Js Developer having good knowledge of
                frontend technology and also want to learn new technology.
            </p>
            <div className='md:px-1'>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 
                flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25}
                        className='ml-2'/></span>             
                </Link>
            </div>
        </div>
        <div>
            <img src={HeroImage} className='rounded-2xl mx-auto  md:w-[400px] w-[230px]' alt="my profile" />
        </div>
        </div>  
      
    </div>
  )
}

export default Home
