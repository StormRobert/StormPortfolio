import React from 'react'
import { CONTACT } from '../constants/constants'
import { motion } from 'framer-motion';
import cv from '../assets/Storm Robert Cv.pdf'

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
            className='text-lg font-medium  '
          >
            Gmail: 
            <span className='ml-2 text-sky-500 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-400 to-indigo-600 border-b border-sky-500 hover:border-purple-500 transition-colors '>{CONTACT.email}</span>
          </a>
          <motion.a 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{
            scale: 1.1, 
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
            href={cv}
            download 
            className='mt-4 text-lg font-medium py-3 px-5 rounded-2xl text-white bg-sky-500 transition-colors duration-300 hover:bg-gradient-to-r from-purple-400 to-indigo-600'
          >
            Download My CV
          </motion.a>
        </div>
      </div>
    );
  }

export default Contact
