"use client"
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { ThreeDCardDemo } from "../Components/ThreeDCardDemo";

import { WavyBackgroundDemo } from "../Components/WavyBackgroundDemo";
import Footer from "../Components/Footer";
import BlogList from "../Components/BlogList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    
    <div className= "bg-zinc-50 dark:bg-zinc-900  text-slate-950">
      <ToastContainer theme="dark"/>
      <Navbar/>
    <Header/>
    <BlogList/>
      <Footer/>
      
    </div>
  );
}
