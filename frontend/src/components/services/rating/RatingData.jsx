import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FaUserCircle } from "react-icons/fa";


export default function RatingData({objData}) {
   
      
      
//    console.log(objData);
   
  return (
    <>
    <div className=' ms-5 mb-5 pb-5 d-flex flex-column  align-items-center border rounded w-75 h-75 px-3' >
            <div className='d-flex py-4'>
            <FaUserCircle className='mt-2'/><p className='ps-2'>{objData.username}</p>
            </div>
            <p>msg: {objData.msg}</p>
            <Stack spacing={1} >
          <Rating name="halfrating"  precision={1} value={objData.halfrating}/> 
         </Stack>
    </div>
    </>
  )
}
