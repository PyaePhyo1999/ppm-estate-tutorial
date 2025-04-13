import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full bg-gray-900 pt-10 px-4 md:px-20 '>
        <div className='container mx-auto flex flex-col justify-between items-start md:flex-row'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h1 className='text-white font-bold text-lg mb-4'>Company</h1>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About"  className='hover:text-white'>About Us</a>
                    <a href="#Contact" className='hover:text-white'>Contact Us</a>
                    <a href="#"  className='hover:text-white'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <h1 className='text-white font-bold text-lg mb-4'>Subscribe to our newsletter</h1>
            <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources, sent to your inbox weekly.</p>
            <div className='flex gap-2'>
                <input className='w-full p-2 rounded text-gray-400 bg-gray-800 
                border border-gray-700 focus:outline-none md:w-auto ' type="email" placeholder='Enter your email' />
                <button className='text-white px-4 py-2 bg-blue-600 rounded'>Subscribe</button>
            </div>
            </div>
        </div>
        <div className='border-t border-gray-700 text-center text-gray-500 py-4 mt-10'>Copyright 2024 @ Tutorial. All Right Reserved.</div>
   </div>
  )
}

export default Footer