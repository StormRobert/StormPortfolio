import React from 'react'
import { PROJECTS } from '../constants/constants'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}} 
      className='my-20 text-center text-5xl font-semibold'>Projects</motion.h1>
      <div>{PROJECTS.map((project, index) => (
        <div key={index} className='flex flex-wrap gap-x-24 items-center mb-10 lg:justify-center'>
          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1}} 
          className='w-full lg:w-1/4'>
            <img 
              src={project.image} 
              width={380}
              height={150}
              alt={project.title}
              className="mb-6 rounded" 
            />
          </motion.div> 
          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:1}} 
          className='w-full max-w-xl lg:w-3/4'>
            <h2 className='mb-2 font semi-bold bg-gradient-to-r from-purple-400 via-slate-400 to-indigo-400 bg-clip-text tracking-tight text-transparent'>{project.title}</h2>
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            {project.technologies.map((tech, index) => (
              <span 
                className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-700' 
                key={index}>
                {tech}
              </span>
            ))}
            {project.links ? (
              project.links.map((link, index) => (
                <div className='mt-4' key={index}>
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-sky-500 hover:underline flex items-center -py-2'>
                    <FaExternalLinkAlt className='mr-2' />
                    {index === 0 ? 'View Client-Side' : 'View Server-Side'}
                  </a>
                </div>
              ))
            ) : (
              <div className='mt-4'>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='text-sky-500 hover:underline flex items-center'>
                  <FaExternalLinkAlt className='mr-2' />
                  View Project
                </a>
              </div>
            )}
          </motion.div>
        </div> 
      ))}</div>
    </div>
  )
}

export default Projects
