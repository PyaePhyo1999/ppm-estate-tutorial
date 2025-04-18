import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {
const[currentIndex, setCurrentIndex] = useState(0)
const[cardToShow, setCardToShow] = useState(1)

const nextProject = ()=>{
    setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % projectsData.length
    )
}
const prevProject = ()=>{
    setCurrentIndex(
        (prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    )
}

useEffect( ()=>{
    const updateCardToShow  = ()=>{
        if(window.innerWidth = 1024){
            setCardToShow(projectsData.length)
        }else{
            setCardToShow(1)
        }}
        updateCardToShow()

        window.addEventListener('resize', updateCardToShow)

        return ()=> window.removeEventListener('resize', updateCardToShow)
    },[])



  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='container px-6 py-20
         mx-auto w-full overflow-hidden md:px-20' id='Projects'>
        <h1 className='text-2xl sm:text-4xl mb-2 font-bold text-center'>Projects
            <span className='underline underline-offset-4 decoration-1 under font-light'> Completed</span></h1>
        <p className='text-center mx-auto text-gray-500 max-w-80 mb-8'>Crafting Spaces, Bulding Legacies-Explore Our Porfolio</p>
    {/* Slider buttons */}

    <div className='flex justify-end items-center mb-8'>
            <button onClick={prevProject} 
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous"/>
            </button>
            <button onClick={nextProject} 
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
    </div>

    {/* project slider container */}
    <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' 
        style= {{transform:`translateX(-${(currentIndex * 100)/ cardToShow}%)`}}
        >
            {projectsData.map((project,index)=>(
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                    <img src={project.image} alt="" className='w-full h-auto mb-14' />
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white px-4 py-2 shadow-md w-3/4'>
                            <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                            <p className='text-sm text-gray-500'>{project.price} <span className='px-1'>|</span> {project.location}</p> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </motion.div>
  )
}

export default Projects