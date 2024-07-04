"use client"
import React, { useEffect, useState } from 'react'
import SubsTableItems from '../../../Components/AdminComponent/SubsTableItems'
import axios from 'axios';
import { toast } from 'react-toastify';


const Page = () => {
  const[email, setEmails] = useState([]);

  const fetchEmailsData = async()  =>{
    
    const response = await axios.get('/api/email')
     
     setEmails(response.data.email)

    
  }

  const deleteEmail = async (mongoId) =>{
    const response = await axios.delete('/api/email',{
      params:{
        id:mongoId
      }
    })
    toast.success(response.data.msg);
    fetchEmailsData();
  }

  useEffect(()=>{
    fetchEmailsData();
  },[])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
     <h1>All Subscription</h1>
<div className='relative max-w-[800px] h-[80vh ] overflow-x-auto mt-4 border border-white'>

  <table className='w-full text-sm text-white'>
    <thead className='text-xs text-left uppercase bg-slate-700'>
      <tr>
        <th scope='column' className='px-6 py-3'>
          Email Subscription
        </th>
        <th scope='column' className='px-6 py-3 hidden sm:block '>
          Date
        </th>
        <th scope='column' className='px-6 py-3'>
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {email.map((item, index)=>{
        return <SubsTableItems key={index} mongoId={item._id} email={item.email} date={item.date} deleteEmail={deleteEmail} />
      })}
   
    </tbody>
  </table>

</div>




    </div>
  )
}

export default Page
