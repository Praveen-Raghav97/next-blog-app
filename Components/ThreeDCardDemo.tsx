"use client";
import { blog_data } from "../Assets/assets";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({title, description ,image,category,id}) {
  return (
   
<CardContainer className="">
      <CardBody className=" max-w-[330px] bg-gray-50  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

      <CardItem translateZ="100" className="w-full ">
        <Link href={`/blogs/${id}`}>
        <Image
            src= {image}
            height="400"
            width="400"
            className=" rounded-xl group-hover/card:shadow-xl"
            alt=" "
            priority ={true}
            loading='eager'
          />
        </Link>
          
        </CardItem>
        <CardItem
          translateZ="50" >
         <p className="ml-5 mt-5 px-2 py-1 rounded-sm inline-block text-black bg-white text-sm ">{category}</p>
        </CardItem>
        <CardItem
          
          translateZ="60"
          className="p-5"
        >
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-400">{title}</h5>
        <p className="mb-3 text-sm tracking-tight text-gray-300"
        dangerouslySetInnerHTML={{__html:description.slice(0, 100)}}
        ></p>
        </CardItem>
        
        <div className="inline-flex items-center py-2 font-semibold text-center">
         
          <CardItem
            translateZ={20}
           className=" rounded-xl  dark:text-white"
          >
            <Link href={`/blogs/${id}`}> Read more  →</Link>
            
         
           
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
    
    
  );
}
