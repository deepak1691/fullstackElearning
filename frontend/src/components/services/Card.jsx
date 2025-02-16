import React from 'react';


export default function Card({data}) {
 
  let{service, provider, price, description }=data
  return (
    <>
    
      <div className=' border border-white rounded mt-4 px-4' style={{minHeight:"362px"}}>
     
      
      <img src="images/services.png" alt="serviceimg" style={{width:"50%"}} className='mb-5 img-fluid offset-2 pt-2'/> <br />
      <div className='d-flex justify-content-between px-3'>
      <span className=' fs-5'>{provider}</span> <span className=' fs-5'>₹{price}</span>
      </div>
       <p className='fs-1'><b>{service}</b></p>
       <p>{description}</p>
     
   
      </div>
   
    </>
  )
}
