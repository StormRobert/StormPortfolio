import React from 'react'
import { HERO_CONTENT } from '../constants/constants'
import profile from '../assets/moringa.jpg'
import profile2 from '../assets/Openpeeps.png'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile4.jpg'
import profile5 from '../assets/profile3.png'
import profile6 from '../assets/profile4.png'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='"flex flex-col items-center lg:items-start'>
                <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Storm Robert</h1>
                <span className='bg-gradient-to-r from-purple-400 via-slate-400 to-indigo-400 bg-clip-text text-4xl tracking-tight text-transparent'>Software Engineer</span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tight'>
                    {HERO_CONTENT}
                </p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex h-96 justify-center'>
                <img src={profile} alt="Image" />
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
