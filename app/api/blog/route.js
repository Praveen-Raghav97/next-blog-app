import { ConnectDb } from "../../../lib/config/db"
import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises'
import { title } from "process";
  import BlogModel from '../../../lib/models/BlogModel.js'

  const fs = require('fs');

 const LoadDB = async () =>{
    await ConnectDb();
 }

 LoadDB();


  //Api End Point Get All Blogs
  export async function GET(request){
    const blogs = await BlogModel.find({})
    const blogId = request.nextUrl.searchParams.get("id");

    //Showing one blog
    if(blogId){
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json(blog);
      //Showing All Blogs
    }else{
      return NextResponse.json({
        blogs
     })
    }
   
 }

//Api End Point for upload Blogs

 export async function POST(request){
    
  const formData = await request.formData();
  const timestamp = Date.now();


  // Method For Storing Image
          const image = formData.get('image');
           const imageByteData = await image.arrayBuffer();
          const buffer = Buffer.from(imageByteData);

          const path = `./public/${timestamp}_${image.name}`;
            
          await writeFile(path,buffer);

          const imgUrl= `/${timestamp}_${image.name}`
         
          console.log(imgUrl);
          
         //Create Method To Store Otherr Info About blog

           const blogData = {
            title : ` ${formData.get('title')}`,
            description : ` ${formData.get('description')}`,
            category : ` ${formData.get('category')}`,
            author : ` ${formData.get('author')}`,
            image : `${imgUrl}`,
            authorImg: `${formData.get('authorImg')}`

           }
  

          await BlogModel.create(blogData)
           console.log("blog saved")


           return Response.json({
            success:true,
            message:'Blog Added Succesfully',
            status:(200)
           })
 }


 export async function  DELETE(request){
      
  const id = await request.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}` , ()=>{});

  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({msg:"Blog Deleted Succesfully"})

 }