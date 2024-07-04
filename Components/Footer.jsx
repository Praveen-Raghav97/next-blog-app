"use client"
import React from 'react'

import { assets } from '../Assets/assets'
import Image from 'next/image'

import Link from 'next/link'
const Footer = () => {
  return (
   
<div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row  py-8 items-center '>
      <Link href={'/'} >
      <Image
      src = {assets.logo_light}
      alt = ''
      width={120}
      className='max-md:hidden'
      />
      </Link>
      
      <p className='text-sm text-white'>All right reserved. copyright @Praveen Raghav</p>
      <div className='flex'>
        <Image src={assets.facebook_icon} alt='' width={40}/>
        <Image src={assets.twitter_icon} alt='' width={40}/>
        <Image src={assets.facebook_icon} alt='' width={40}/>
      </div>
    </div>
   
    
    
    
  )
}

export default Footer
