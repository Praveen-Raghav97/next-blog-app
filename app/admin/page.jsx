import Link from 'next/link'
import React from 'react'
import { BackgroundBeams } from '../../Components/ui/background-beams'


const page = () => {
  return (
    < div  className='flex items-center justify-between flex-col px-10 py-10'>
    <div className=" flex flex-col gap-6 items-center justify-center py-2 px-4 sm:py-[220px] max-md:hidden mt-10 text-center">
    
      <div className="text-3xl md:text-4xl font-bold dark:text-white text-center">Your work is going to fill a large part of your life</div>
      <div className= " font-extralight text-base md:text-2xl dark:text-neutral-200 sm:py-4 text-center"> and the only way to be truly satisfied is to do what you believe is great work</div>

    </div>
      <div className=' h-[100vh] w-full flex flex-col items-center justify-center text-white py-10 px-10 sm:hidden'>
       <Link href={'/'} className='flex items-center justify-between border border-white px-16 py-4 mb-10 bg-slate-600'>
        <h1>Home</h1>
      </Link>
      <Link href={'/admin/addProduct'} className='flex items-center justify-between border border-white px-14 py-4 mb-10 bg-slate-600'>
        <h1>Add BLog</h1>
      </Link>
      <Link href={'/admin/blogList'} className='flex items-center justify-between border border-white px-14 py-4 mb-10 bg-slate-600'>
        <h1>Blog List</h1>
      </Link>
      <Link href={'/admin/subscriptions'} className='flex items-center justify-between border border-white px-14 py-4 mb-10 bg-slate-600'>
        <h1>Subscription</h1>
      </Link>
    </div>
    
    </div>
  
  )
}

export default page
