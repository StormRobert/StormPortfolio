import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandThreejs } from 'react-icons/tb'
import { FcLinux } from "react-icons/fc";
import { TbBrandTailwind } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { SiFlask } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFigmaLogoFill } from "react-icons/pi";
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate:{
        y:[10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}} 
        className='text-center font-bold text-5xl my-20'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
        className='bg-neutral-600 rounded-2xl border-4 p4'>
                <PiFigmaLogoFill className='text-7xl text-gray-900'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial='initial'
            animate='animate'
            className='bg-neutral-600 rounded-2xl border-4 p4'>
                <RiReactjsLine className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            initial='initial'
            animate='animate' 
            className='bg-neutral-600 rounded-2xl border-4 p4'>
                <TbBrandThreejs className='text-7xl text-black'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5.5)}
            initial='initial'
            animate='animate'
            className='bg-neutral-600 rounded-2xl border-4 p4'>
                < FcLinux className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(6.5)}
            initial='initial'
            animate='animate' 
            className='bg-neutral-600 rounded-2xl border-4 p4'>
                <TbBrandTailwind className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(7.5)}
            initial='initial'
            animate='animate'
            className='bg-neutral-600 rounded-2xl border-4 p4'>
                <RiNodejsLine className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5.5)}
            initial='initial'
            animate='animate' 
            className='bg-neutral-600 rounded-2xl border-4 p4'>
                <SiFlask className='text-7xl text-black'/>
            </motion.div>
            <motion.div
            variants={iconVariants(6.5)}
            initial='initial'
            animate='animate' 
            className='bg-neutral-600 rounded-2xl border-4 p4'>
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Tech
