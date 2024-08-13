import React from 'react'
import profile2 from '../assets/Openpeeps.png'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile4.jpg'
import profile5 from '../assets/profile3.png'
import profile6 from '../assets/profile4.png'
import { ABOUT_TEXT, ABOUT_TEXT2 } from '../constants/constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 mb-1 text-center text-8xl'>About 
        <span className='bg-gradient-to-r from-purple-400 via-slate-400 to-indigo-400 bg-clip-text text-6xl text-transparent'> Me</span>
        </h1>
        <div className='flex flex-wrap'>
          <motion.div 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5}}
          className='w-full lg:w-1/2 lg:p-0 lg:-my-4'>
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl ' src={profile6} alt="aboutimg" />
            </div>
           </motion.div>
           
           <motion.div 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:100}}
           transition={{duration:0.5}}
           className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
              <p className='my- max-w-xl py-12'>
              <p className='lg:my-20'></p>
                {ABOUT_TEXT}
                <p className='my-16'></p>
                  <span>{ABOUT_TEXT2}</span>
               
              
              </p>
              
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
