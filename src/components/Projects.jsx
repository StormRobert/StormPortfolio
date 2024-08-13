import React from 'react'
import { PROJECTS } from '../constants/constants'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-5xl'>Projects</h1>
      <div>{PROJECTS.map((project, index) => (
        <div key={index} className='flex flex-wrap gap-x-24 items-center mb-10 lg:justify-center'>
          <div className='w-full lg:w-1/4'>
            <img 
              src={project.image} 
              width={380}
              height={150}
              alt={project.title}
              className="mb-6 rounded" 
            />
          </div> 
          <div className='w-full max-w-xl lg:w-3/4'>
            <h2 className='mb-2 font semi-bold'>{project.title}</h2>
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
          </div>
        </div> 
      ))}</div>
    </div>
  )
}

export default Projects
