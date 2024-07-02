"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../../Assets/assets'
import Link from 'next/link'

const Sidebar = () => {

  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = ({}) =>{
    mobileMenu ? setMobileMenu (false) : setMobileMenu(true);

  }
  return (
    <div className='flex flex-col bg-slate-800 text-teal-50 max-md:hidden'>
      <Link href='/' className='px-2 sm:pl-14 py-3 border border-white '>
       <Image src={assets.logo_light} width={130} alt='logo' priority
       
       />
      
      </Link>
     
      <div className='w-28 sm:w-80  h-[100vh] relative py-12 border border-white max-md:hidden'>

        <div className= "w-[50%] sm:w-[80%] absolute right-7 gap-4 max-md:hidden ">
        <Link href='/admin/addProduct' className='flex items-center border border-white gap-3 font-medium px-3 py-2  bg-slate-700  '>
          <Image src={assets.add_icon}  width={28} alt='' color='white'/> <p>Add Blog</p>
         </Link>
         <Link href='/admin/blogList' className=' mt-5 flex items-center border border-white gap-3 font-medium px-3 py-2  bg-slate-700 '>
          <Image src={assets.blog_icon}  width={28} alt='' color='white'/> <p>Blog List</p>
         </Link>
         <Link href= '/admin/subscriptions' className=' mt-5 flex items-center border border-white gap-3 font-medium px-3 py-2  bg-slate-700 '>
          <Image src={assets.email_icon}  width={28} alt='' color='white'/> <p>Subscription</p>
         </Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default Sidebar
