import { NextResponse } from 'next/server';
import {ConnectDb} from '../../../lib/config/db'
import EmailModel from '../../../lib/models/EmailModel';


//DATABASE CONNNECTION
const LoadDB = async () =>{
    await ConnectDb();
 }

 LoadDB();


export async function POST(request){
    const formData= await request.formData();
    const emailData= {
        email:`${formData.get('email')}`,
    }
      
    await EmailModel.create(emailData);
    return NextResponse.json({success:true, msg:" Subscribed Succesfully"})
}

//Get Method For Getting All emails

export async function GET(request){
   const email = await EmailModel.find({});

   return NextResponse.json({email})
}

//Delet Method for Emails
export async function  DELETE(request){
      
    const id = await request.nextUrl.searchParams.get('id');
    const email = await EmailModel.findById(id);
  
  
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Email Deleted Succesfully"})
  
   }