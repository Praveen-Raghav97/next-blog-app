"use client"
import { BackgroundBeams } from "../../../Components/ui/background-beams"
import { assets, blog_data } from '../../../Assets/assets'
import Footer from '../../../Components/Footer'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from "axios"

const page = ({params}) => {

  const [data , setData] = useState(null)

  const fetchBlogData = async()  =>{
    
    const response = await axios.get('/api/blog',{
      params:{
      id:params.id
      }
    })
 
     setData(response.data)

    
  }

  useEffect (() =>{
    fetchBlogData();
  },[])
  return ( data?<>
   
    <div className='bg-slate-950 text-white py-5 px-5 md:px-12 lg:px-28'>
 <div className="flex justify-between items-center">
   <Link href = '/' ><Image
        src= {assets.logo_light}
        width={130}
        className= "w-[130px] sm:w-auto"
        alt=''
        priority = {true}
        loading="eager"
        /> </Link>
        
       
        <button className='bg-white text-black px-2 py-2 rounded-md  hover:bg-slate-200 active:bg-slate-700 active:text-white'>Get Start</button>
      </div>
       <div className='text-center my-24'>
       
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full hidden' src={data.authorImg} height={60} width={60} alt=''/>
        <p className='mt-1 pb-2  text-lg max-w[740px] mx-auto hidden'>{data.author}</p>
       </div>
       
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto  mt-[-100px] mb-10 text-white '>
        <Image className='border-4 border-white' src= {data.image.trim()}  width={1280} height={720} alt = ''/>
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <div className="blog-content" dangerouslySetInnerHTML={{__html:data.description}}></div>
        
            <div className='my-24'>
              <p className='text-white font font-semibold my-4 '>Share This Artical On :</p>
              <div className='flex cursor-pointer'>
           <Image className='rounded-full border-5 border-white cursor-pointer' src={assets.facebook_icon} width={60} height={60} alt=''/>
           <Image className='rounded-full border-5 border-white cursor-pointer' src={assets.twitter_icon} width={60} height={60} alt=''/>
           <Image className='rounded-full border-5 border-white cursor-pointer' src={assets.googleplus_icon} width={60} height={60} alt=''/>
          
              </div>
            </div>
       </div>
       <Footer />
       <BackgroundBeams/>
    </>:<>
    </>
  )
}

export default page
