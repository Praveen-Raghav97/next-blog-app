"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../../../Assets/assets'
import { title } from 'process'
import axios from 'axios'
import { toast, useToast } from 'react-toastify'

const page = () => {

    const [image, setImage] = useState(false);

    const [data , setData] = useState({
      title: "",
      description: "",
      category: "Startup" ,
      author: "Alex Bennett" ,
      authorImg:"/author_img.png"
    })
  
     const onChangeHandler  = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData( data => ({...data,[name]:[value]}));
  
        console.log(data);
     }
  
     const onSubmitHandler = async (event) =>{
      event.preventDefault();
      const formData= new FormData();
      formData.append('title' , data.title);
      formData.append('description' , data.description);
      formData.append('category' , data.category);
      formData.append('author' , data.author);
      formData.append('authorImg' , data.authorImg);
      formData.append('image' ,image);
  
      const response = await axios.post('/api/blog',formData )
      if(response.data.success){
  
        toast.success(response.data.message);
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Startup" ,
          author: "Alex Bennett" ,
          authorImg:"/author_img.png"
        })
  
      }else{
        console.log("something wrong")
        toast.error("Something Went Wrong Add Blog")
      }
     }



  return (
    <>
    <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16 pb-5 '>
 <p className='text-xl'>Upload Thumbnail</p>

 <label htmlFor="image">
  <Image className='  mt-4 rounded-sm text-black' src={!image?assets.upload_area:URL.createObjectURL(image)} width={180} height={70}  alt=''/>
 </label>
 <input  onChange={(event)=>setImage(event.target.files[0])} type="file" id='image' hidden required/>
 <p className='mt-4 text-xl'> Blog Title</p>
 <input name='title' onChange={onChangeHandler} className=' bg-slate-700   w-full sm:w-[500px]  mt-4 px-5 py-3  border rounded-md md:w-[400px]' type="text" placeholder='Type Here' required />
 <p className='mt-4 text-xl'> Blog Description</p>
 <textarea name='description' onChange={onChangeHandler} className=' bg-slate-700   w-full sm:w-[500px] mt-4 px-5 py-3  border rounded-md md:w-[400px]'  placeholder='Write Your Content Here' rows={6} required />
 <p className='text-xl mt-4'>Category</p>
 <select onChange={onChangeHandler} value={data.category} className='bg-slate-700 px-4 py-3 mt-4 w-40 border rounded-md  ' name="category" id=""> 
  <option value="Startup">Startup</option>
  <option value="Technology">Technology</option>
  <option value="LifeStyle">LifeStyle</option>
 </select>
<br />
 <button type='submit' className='mt-8 w-40 h-12 bg-slate-700 rounded-md hover:bg-slate-500 '>Submit</button>
    </form>
        

  </>
  )
}

export default page
