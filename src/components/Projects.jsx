import React, { useState } from 'react'
import { PROJECTS } from '../constants/constants'
import { FaExternalLinkAlt, FaGithub, FaInfoCircle, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({ project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
    >
      <div className="relative h-64">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
            <a 
              href={project.link || project.links[0]} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 mt-4"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-neutral-700 text-sky-400 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-neutral-300 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex justify-between items-center">
          {project.links ? (
            <div className="flex space-x-4">
              <a 
                href={project.links[0]} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-400 hover:text-sky-300 flex items-center text-sm transition-colors duration-300"
              >
                <FaGithub className="mr-2" />
                Client
              </a>
              <a 
                href={project.links[1]} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-400 hover:text-sky-300 flex items-center text-sm transition-colors duration-300"
              >
                <FaGithub className="mr-2" />
                Server
              </a>
            </div>
          ) : (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sky-400 hover:text-sky-300 flex items-center text-sm transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mr-2" />
              View Project
            </a>
          )}
          <button 
            onClick={() => setShowFullDescription(true)} 
            className="text-neutral-400 hover:text-neutral-200 transition-colors duration-300"
          >
            <FaInfoCircle size={20} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showFullDescription && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute top-0 right-0 w-full h-full bg-neutral-900 bg-opacity-95 p-6 overflow-y-auto"
          >
            <button 
              onClick={() => setShowFullDescription(false)}
              className="absolute top-4 right-4 text-white hover:text-sky-400 transition-colors duration-300"
            >
              <FaTimes size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 text-base mb-4">{project.description}</p>
              <h4 className="text-lg font-semibold mt-4 mb-2 text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-neutral-700 text-sky-400 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Projects = () => {
  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:0.5}} 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-slate-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h1>
        
        {Object.entries(PROJECTS).map(([category, projects]) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-8 capitalize text-neutral-200">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            {renderProjects(projects)}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
