import React from 'react'

import Image from 'next/image';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png'
const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-auto lg:flex-row text-white/70 p-8
    rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
<div className='flex justify-center items-center'>
<ul className='space-y-4'>
   <li className='flex items-center'>
    <Image src={phone} alt='phone' className='h-[110px] w-auto mr-6'/>
    <p className='text-xl'>+213 552803909</p>
    </li> 

    <li className='flex items-center'>
    <Image src={mail} alt='mail' className='h-[110px] w-auto mr-6'/>
    <p className='text-xl'>rayanelouzazna13@gmail.com</p>
    </li> 
</ul>
</div>

<div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
<h2 className='text-5xl font-bold text-orange-400 mb-4'>Let&apos;s connect</h2>
<p className='text-white/70 mb-6'>Send Me a Message to work !!!</p>
<form className='space-y-4' action="https://getform.io/f/bvrrlzlb" method='POST'>
<div className='grid md:grid-cols-2 gap-4'>
    <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 'placeholder='first name'/>
    <input  type='name' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 'placeholder='last name'/>
    <input type='email' name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 'placeholder='email'/>
    <input type='phone ' name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ' placeholder='phone'/>
</div>
<textarea className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ' placeholder='Any Message ?!'/>
<button className='bg-orange-700 hover:bg-amber-500 text-white px-6 py-2 w-full font-semibold
text-xl rounded-xl'> send Message</button>
</form>
</div>

    </div>
  )
}

export default Contact