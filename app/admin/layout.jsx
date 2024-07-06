"use client"
/** @format */

import Image from "next/image";
import Sidebar from "../../Components/AdminComponent/Sidebar";

import { assets } from "../../Assets/assets";
import {  ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


export default function Layout({ children }) {
 

  
    const router = useRouter();
  return (
    <>
      <div className="flex text-white bg-slate-950">
        <ToastContainer className=' text-slate-950'/>
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px]  border border-white px-10">
          <Image src={assets.profile_icon} width={40} alt="" />
          <Image  className="text-white cursor-pointer w-auto h-auto" src={assets.back_icon1} onClick={() => router.back()}  width={25} height={25} alt=""/>
            
           
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
