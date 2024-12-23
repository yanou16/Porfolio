import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 maw-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
<h1 className='text-2xl font-bold'>Rayne Lz</h1>

<div className='flex space-x-6 mt-4'>
    <a href="https://www.linkedin.com/in/rayane-lz-b7752b224/" className='hover:text-gray-300'>
        <FaLinkedin size={24}/>
    </a>

    <a href="https://github.com/yanou16" className='hover:text-gray-300'>
        <FaGithub size={24}/>
    </a>

    <a href="#" className='hover:text-gray-300'>
        <FaTwitter size={24}/>
    </a>


</div>

    </div>
  )
}

export default Footer