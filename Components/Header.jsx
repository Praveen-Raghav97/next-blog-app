"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "../Components/ui/AuroraBackground";
import Image from "next/image";
import { assets } from "../Assets/assets";
import { BackgroundBeams } from "./ui/background-beams";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {

 const [email , setEmail] = useState("")


 const OnSubmitHandler = async (e) =>{
  e.preventDefault;
   const formData = new FormData()
   formData.append("email", email);
   const response = await axios.post('/api/email' , formData)

   if (response.data.success) {
     toast.success(response.data.msg);
     setEmail("")
   }else{
    toast.error( {message:"Something Went Wrong Subscription"})
   }
 }
  return (
    <AuroraBackground>
     <BackgroundBeams/>
      <div
        
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Your words can change the world.</div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">One blog post at a time. Write with passion, share with purpose.</div>
      
       <form action={OnSubmitHandler} className="flex justify-center gap-1 sm:gap-1  max-w[500px] scale-75 sm:scale-100 mx-auto mt-10 ">
 <input 
          type="email"
          className="pl-5   sm:w-auto   border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-4 py-2"
          placeholder="Enter Your Email @"
          required
          value={email} onChange={(e)=>setEmail(e.target.value)}
        />
        <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-md  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Subscribe
        </button>
       </form>
       
      </div>
    
    </AuroraBackground>
    
  );
};

export default Header;
