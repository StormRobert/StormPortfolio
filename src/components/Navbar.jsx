import React from 'react'
import logo from "../assets/logo1.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='lg:mx-2 w-20 lg:w-60 ' src={logo} alt="logo" />
        </div>
        <div className="lg:m-16 flex items-center justify-center gap-6 text-2xl">
        <a 
          href="https://www.linkedin.com/in/storm-robert-8a6030252/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-gray-600 hover:text-blue-500 transition-colors duration-300'
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/StormRobert" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-gray-600 hover:text-blue-500 hover:scale-110 transition-colors duration-300'
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/arasastorm" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-gray-600 hover:text-blue-500 transition-colors duration-300'
        >
          <FaSquareXTwitter />
        </a>
      </div>
       

    </nav>
  )
}

export default Navbar
