
import React from 'react'
import { FaHtml5,FaCss3Alt,FaReact,FaJsSquare, FaPhp } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss ,SiFirebase, SiTypescript,SiCplusplus} from 'react-icons/si';
const skillIcons = [
    {icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3Alt size={140} /> ,label: "CSS" },
    { icon: <FaReact size={110} />, label: "React" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript"},
    {icon:<FaPhp size={140}/>, label:"Php"},
    { icon: <SiNextdotjs size={140} />, label: "Next.js" },
    { icon: <SiTailwindcss size={140} />, label: "Tailwind CSS" },
    { icon: <SiFirebase size={140} />, label: "Firebase" },
    { icon: <SiTypescript size={140} />, label: "TypeScript" },
    { icon: <SiCplusplus size={140} />, label: "C++" }
    
    ];

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
<div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8  text-center'>
<h2 className='text-6xl font-bold mb-4'>What I do</h2>
<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
    {skillIcons.map((skill,index)=>(
        <div key={index}
         className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex  flex-col justify-between items-center
       bg-white/10 p-4  rounded-xl'>
    {skill.icon}
    <p className='mt-2'>{skill.label}</p>
        </div>
    ))}
</div>
</div>
    </div>
  )
}

export default Skills