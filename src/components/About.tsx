"use client";
import React from 'react';
import Image from 'next/image';
import aboutImg from '../assets/profilepic.png'
import book from '../assets/book.png'
import pc from '../assets/pc.png'
import card from '../assets/card.png'
import fianance from '../assets/finance.png'
const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id='about'>
<h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'> About <span className='text-orange-400'>Me</span></h1>

   <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>

  <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
  <div className='absolute inset-0
bg-gradient-to-r from-orange-400
via-purple-700
to-orange-800
opacity-30 animate-gradient-xy'></div>
<div className='flex flex-row p-6'>
    <Image src={book} alt='book' className='w-auto h-[130px]'/> 
    <div className='flex flex-col mt-4' >
    <h2 className='text-2xl font-bold text-white/80'>Education</h2>
    <p className='text-lg text-white/70 mt-2'>i hold a bachelor in computer science and i am focusing on tech like React , Next Js and Tailwind Js</p>
  </div>
</div>

</div>


<div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
<div className='absolute inset-0
bg-gradient-to-r from-orange-400
via-purple-700
to-orange-800
opacity-30 animate-gradient-xy'></div>
<div className='flex flex-row p-6'>
    <Image src={pc} alt='book' className='w-auto h-[130px]'/> 
    <div className='flex flex-col mt-4' >
    <h2 className='text-2xl font-bold text-white/80'>Problem solving</h2>
    <p className='text-lg text-white/70 mt-2'>I approach every problem with a problem solving mindset ;</p>
  </div>
</div>

</div>




<div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
<div className='absolute inset-0
bg-gradient-to-r from-orange-400
via-purple-700
to-orange-800
opacity-30 animate-gradient-xy'></div>
<div className='flex flex-row p-6'>
    <Image src={card} alt='book' className='w-auto h-[130px]'/> 
    <div className='flex flex-col mt-4' >
    <h2 className='text-2xl font-bold text-white/80'> Experience</h2>
    <p className='text-lg text-white/70 mt-2'>I Have diverse projects !</p>
  </div>
</div>

</div>





<div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
<div className='absolute inset-0
bg-gradient-to-r from-orange-400
via-purple-700
to-orange-800
opacity-30 animate-gradient-xy'></div>
<div className='flex flex-row p-6'>
    <Image src={fianance} alt='book' className='w-auto h-[130px]'/> 
    <div className='flex flex-col mt-4' >
    <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
    <p className='text-lg text-white/70 mt-2'>As a Fullstack Web Developer, I specialize in Salesforce, React JS, Next.js, and Tailwind CSS. My expertise extends to creating responsive, user-friendly interfaces and efficient backend solutions.</p>
  </div>
</div>

</div>





   </div>
      </div>
  )
}

export default About