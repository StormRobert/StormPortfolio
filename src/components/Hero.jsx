import React from 'react'
import { HERO_CONTENT } from '../constants/constants'
import profile from '../assets/moringa.jpg'
import profile2 from '../assets/Openpeeps.png'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile4.jpg'
import profile5 from '../assets/profile3.png'
import profile6 from '../assets/profile4.png'
import { motion } from 'framer-motion'

const container = (delay) =>({
    hidden:{x: -100, opacity:0},
    visible:{
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-800 pb-16 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full -my-6 lg:w-1/2'>
            <div className='"flex flex-col items-center lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial='hidden'
                animate='visible' 
                className='-my-4 mx-2 pb-10 text-5xl font-normal lg:text-left text-center tracking-tight lg:mt-16 lg:text-8xl'>Storm Robert Arasa</motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial='hidden'
                animate='visible'
                className='mx-6 bg-gradient-to-r from-purple-400 via-slate-400 to-indigo-400 bg-clip-text lg:text-4xl text-3xl tracking-tight text-transparent'>Software Engineer</motion.span>
                <motion.p 
                variants={container(1)}
                initial='hidden'
                animate='visible'
                className='my-2 mx-6 py-6 font-light tracking-tight'>
                    {HERO_CONTENT}
                </motion.p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex h-96 justify-center'>
                <motion.img 
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:1.2}}
                className='rounded-2xl lg:-my-20' src={profile} alt="Image" />
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
