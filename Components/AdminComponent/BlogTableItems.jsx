import {assets} from '../../Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItems = ({authorImg, title, date, deleteBlog, mongoId}) => {
    const Blogdate = new Date(date);
  return (
    <tr className='bg-black border-b'>
      <th scope='row' className='items-center gap-3 hidden sm: py-4 px-6 font-medium text-white whitespace-nowrap '>
        <Image src={authorImg?authorImg:assets.profile_icon} width={50} height={50} className='hidden' alt=''
        />
      </th>
      <td className='px-6 py-4'>
        {title?title:"no title"}
      </td>
      <td className='px-6 py-4'>
        {Blogdate.toDateString()?Blogdate.toDateString():"no date"}
      </td>
      <td onClick={()=> deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
        X
      </td>
    </tr>
  )
}

export default BlogTableItems
