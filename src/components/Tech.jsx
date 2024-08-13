import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandThreejs } from 'react-icons/tb'
import { FcLinux } from "react-icons/fc";
import { TbBrandTailwind } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { SiFlask } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFigmaLogoFill } from "react-icons/pi";





const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='text-center text-5xl my-20'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='bg-neutral-600 rounded-2xl border-4 p4'>
                <PiFigmaLogoFill className='text-7xl text-gray-900'/>
            </div>
            <div className='bg-neutral-600 rounded-2xl border-4 p4'>
                <RiReactjsLine className='text-7xl text-cyan-500'/>
            </div>
            <div className='bg-neutral-600 rounded-2xl border-4 p4'>
                <TbBrandThreejs className='text-7xl text-black'/>
            </div>
            <div className='bg-neutral-600 rounded-2xl border-4 p4'>
                < FcLinux className='text-7xl text-cyan-500'/>
            </div>
            <div className='bg-neutral-600 rounded-2xl border-4 p4'>
                <TbBrandTailwind className='text-7xl text-cyan-500'/>
            </div>
            <div className='bg-neutral-600 rounded-2xl border-4 p4'>
                <RiNodejsLine className='text-7xl text-green-500'/>
            </div>
            <div className='bg-neutral-600 rounded-2xl border-4 p4'>
                <SiFlask className='text-7xl text-black'/>
            </div>
            <div className='bg-neutral-600 rounded-2xl border-4 p4'>
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </div>
        </div>
      
    </div>
  )
}

export default Tech
