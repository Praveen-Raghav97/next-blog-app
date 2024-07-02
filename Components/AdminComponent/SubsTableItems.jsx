import React from 'react'

const SubsTableItems = ({email, date, mongoId, deleteEmail}) => {
  const EmailDate = new Date(date);
  return (
    <tr className='bg-slate-900 border-b text-left'>
    <th scope='row' className='px-6 py-4 text-medium whitespace-nowrap text-white'>
    {email?email:"no email"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>
            {EmailDate.toDateString()}
            </td>
            <td onClick={()=>deleteEmail(mongoId)} className='px-6 py-4 cursor-pointer'>X</td>  
    </tr>
  )
}

export default SubsTableItems
