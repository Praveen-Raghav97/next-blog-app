"use client"
import { assets } from '../Assets/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
       <div className="flex justify-between items-center">
        <Image
        src={assets.logo_light}
        width={130}
        className= "w-[100px] sm:w-[130px] "
        alt=''
        priority
        loading='eager'
        />
        
        <Link href = '/admin'>

        <button className='bg-white text-black sm:px-2 sm:py-2 px-1 py-1 rounded-md  hover:bg-slate-200 active:bg-slate-700 active:text-white cursor-pointer'>Get Start </button>
        </Link>
       
      
       </div>
        
    </div>
  )
}

export default Navbar
