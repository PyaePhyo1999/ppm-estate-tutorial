import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import headerImg from '../assets/header_img.png';

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
    style={{ backgroundImage: `url(${headerImg})` }} id='Header' >
    <Navbar/>
    <motion.div 
    initial={{opacity:0, y:100}}
    transition={{duration:1.5}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='container text-center mx-auto text-white py-4 px-6 md:px-20'>
      <h2 className='text-5xl sm:text-6xl md:[80px] font-semibold pt-20 max-w-3xl inline-block'>Explore homes that fit your dreams</h2>
      <div className='space-x-6 mt-8'>
        <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
        <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact us</a>
      </div>
    </motion.div>
    </div>
  )
}

export default Header