import React from 'react'
import { CONTACT } from '../constants/constants'
import { motion } from 'framer-motion';

const Contact = () => {
    return (
      <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}} 
        className='text-6xl my-12 font-bold text-center'>Get in Touch</motion.h2>
        <div className='flex flex-col items-center gap-6 text-center'>
          <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1}} className='text-lg font-medium'>
            Phone No: 
            <span className='ml-2 text-sky-500'>{CONTACT.phoneNo}</span>
          </motion.p>
          <a 
            href={`mailto:${CONTACT.email}`} 
            className='text-lg font-medium border-b border-sky-500 hover:text-sky-600 hover:border-sky-600 transition-colors duration-300'
          >
            Gmail: 
            <span className='ml-2 text-sky-500'>{CONTACT.email}</span>
          </a>
        </div>
      </div>
    );
  }

export default Contact
