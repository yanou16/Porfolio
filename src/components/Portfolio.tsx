"use client"
import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects =[
    {
        title: "VéloShop - Site E-commerce ",
desc: "site to but Velo and there accessoire ! and a blog for Velo lover",
devstack: "Type Script, React, Framer Motion",
link: "https://veloshopdz.netlify.app",
git: "https://github.com/yanou16/Velo_shop_Alger",
src: project1},
{title: "Interactive fortblake",
desc: "Your application is a modern e-commerce platform designed to sell stylish and casual men's clothing. Inspired by platforms like Fortblake, it offers a seamless shopping experience with a focus on simplicity, performance, and user-friendliness. Built using React with TypeScript for robust and type-safe development, and powered by Firebase for backend services, the app ensures scalability and real-time features. ",
devstack: "NextJs",
link: "https://fortblake-store-git-master-yanou16s-projects.vercel.app/",
git: "https://github.com/yanou16/fortblake-store",
src: project2},
{title: "Gym site",
desc: "frontend of a user-friendly gym application using React.js.",
devstack: "React, Tailwind , React Router",
link: "https://www.linkedin.com/posts/rayane-lz-b7752b224_webdevelopment-frontend-react-activity-7263926863994011648-AoJc?utm_source=share&utm_medium=member_desktop",

git: "https://github.com/yanou16/GymFit-website",
src: project3},
    
]

const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id='portfolio'>
       
       <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'> Selected <span className='text-orange-400'>Projects</span></h1>



        <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
        {
            projects.map  ((project,index) =>
            <motion.div 
            key={index}
            initial={{opacity:0, y:7}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.5, delay:0.25}}
            className={` mt-12 flex flex-col ${index % 2 === 1 ? " md:flex-row-reverse gap-12" : " md:flex-row"}`}
           >
             <div className='space-y-2 max-w-[550px]'>
                <h2 className='text-7xl my-4'>{`0${index + 1}`}</h2> 
                <h2 className='text-4xl'>{project.title}</h2>
                <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                <p className='text-xl text-orange-400 font-semibold'>{project.devstack}</p>
                <div className='w-64 h-{1px} bg-gray-400 my-4'>
                    <a href={project.link} className='mr-6'> Link</a>
                    <a href={project.git}>Git</a>
                </div>
             </div>


            <div className='flex justify-center items-center'>
                <Image src={project.src} alt='{project.title} ' className='h-[350px] w-auto object-cover
                 border  rounded border-gray-700'/>
            </div>


            </motion.div>)      }
        </div>

    </div>
  )
}

export default Portfolio