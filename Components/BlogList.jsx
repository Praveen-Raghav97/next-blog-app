"use client"
import axios from "axios"
import { blog_data } from "../Assets/assets"
import { ThreeDCardDemo } from "./ThreeDCardDemo"

import { useEffect, useState } from "react"
import { toast } from "react-toastify"


const BlogList = () => {
    const [menu , setMenu] = useState('All');
    const [blogs ,setBlogs] = useState([])
   

    const fatchBlogs = async () =>{
       const response = await axios.get('/api/blog');

       if (!response) {
         toast.error("There was no Exists Blogs")
       }
     
        setBlogs(response.data.blogs);

    }

   

    useEffect(()=>{
      fatchBlogs()
    },[])

  
  
  
 const filteredBlogs =blogs.filter((item) => menu === "All" ? true : item.category === menu)

   
  console.log(filteredBlogs);
  return (
    <>
 <div className="flex justify-center gap-6 my-10 text-white">
     <button  onClick={() => setMenu('All')}  className={menu=== "All"?'text-white bg-slate-950 py-1 px-4 rounded-sm':""}>All</button> 
     <button  onClick={() => setMenu('Technology')}  className={menu=== "Technology"? 'text-white bg-slate-950 py-1 px-4 rounded-sm':""}>Technology</button> 
     <button  onClick={() => setMenu('Startup')}  className={menu=== "Startup"? 'text-white bg-slate-950 py-1 px-4 rounded-sm':""}>Startup</button> 
     <button  onClick={() => setMenu('Lifestyle')} className={menu=== "Lifestyle"? 'text-white bg-slate-950 py-1 px-4 rounded-sm':""}>LifeStyle</button> 
    </div>
    <div className="flex flex-wrap  justify-around gap-1  mb:16 xl:mx-24">
      {filteredBlogs.map((item,index)=>{
      
       return<ThreeDCardDemo
        key={index}
        title={item.title}
        image= {item.image.trim()}
        description={item.description}
        category={item.category}
        id={item._id}
        />
      })}
    </div>
    
    </>
   
  )
}

export default BlogList
