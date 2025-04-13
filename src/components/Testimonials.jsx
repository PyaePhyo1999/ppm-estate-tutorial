import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='container px-6 py-10
    mx-auto w-full overflow-hidden md:px-20' id='Testimonials'>
   <h1 className='text-2xl sm:text-4xl mb-2 font-bold text-center'>Customers
       <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonials</span></h1>
   <p className='text-center mx-auto text-gray-500 max-w-80 mb-8'>Real Stories From Those Who Found Home With Us</p>

   
        <div className='flex justify-center flex-wrap gap-8' >
            {testimonialsData.map((testimonials,index)=>(
                <div key={index} className='max-w-[340px] shadow-lg border rounded py-12 px-8 text-center'>
                    <img src={testimonials.image} alt={testimonials.alt} className='w-20 h-20 rounded-full mb-4 mx-auto' />
                    <h2 className='text-xl text-gray-700'>{testimonials.name}</h2>
                    <p className='text-sm text-gray-500 mb-4'>{testimonials.title}</p> 
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: testimonials.rating},(item, index)=>(
                        <img key={index} src={assets.star_icon}  />
                    ))}
                </div>
                <p className='text-gray-600'>{testimonials.text}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials