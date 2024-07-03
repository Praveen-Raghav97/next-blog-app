"use client"

import { useState,useEffect } from 'react'
import BlogTableItems from '../../../Components/AdminComponent/BlogTableItems'
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = () => {
  const[blogs , setBlogs] = useState([]);

  const fetchBlogData = async()  =>{
    
    const response = await axios.get('/api/blog')
     
     setBlogs(response.data.blogs)

    
  }

  const deleteBlog = async (mongoId)=>{
    
    const response = await axios.delete('/api/blog',{
      params:{
        id:mongoId
      }
    })

    toast.success(response.data.msg);

    fetchBlogData();
  }

  useEffect (() =>{
    fetchBlogData();
  },[]);

  return (
    <div className='flex-1 pt-5  px-5 sm:pt-12 sm:pl-16'>
      <h1 className='text-xl font-bold mb-6'>All Blogs</h1>
      <div className=' relative h-[80vh] max-w[850px] overflow-x-auto nt-4 border border-white scroll-hide'>
      <table className='w-full text-sm text-white'>
        <thead className='text-xs  bg-slate-700 text-left uppercase text-white-500'>
       <tr>
        <th scope='column' className='hidden sm:  px-6 py-3 '>Author Name</th>
        <th scope='column' className=' px-6 py-3'>Title</th>
        <th scope='column' className=' px-6 py-3'>Date</th>
        <th scope='column' className=' px-6 py-3'>Action</th>
       </tr>
        </thead>
      <tbody>
        {blogs.map((item, index) =>{
       return <BlogTableItems key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog} />
        })}
       
      </tbody>
      </table>
      </div>
     
    </div>
  )
}

export default Page
