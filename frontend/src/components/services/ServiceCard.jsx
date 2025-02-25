import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import RatingCard from "./rating/Rating"


export default function ServiceCard(){

 const[service,setService]=useState([]);
const[loading,setLoading]=useState(true);



  const serviceData=async()=>{
    try {
      const data=await fetch("https://e-learning-backend-vkss.onrender.com/api/services",{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
      });
      const resData=await data.json();
      // console.log("service data",resData.serviceData);
      setService(resData.serviceData);
      setLoading(false);
        
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    serviceData();
  
  },[]);





  if (loading) {
    return (
      <div className="container mt-5 p-5">
        <div className="row">
          {Array(6).fill(0).map((_, i) => (
            <div className="col-md-4 col-sm-6 px-5 px-md-2 px-sm-2" key={i}>
              <Loading/>
            </div>
          ))}
        </div>
      </div>
    );
  }

 return(
<>
<div className="container mt-5 p-5">
  <div className="row g-4">
    <h1 className='my-5 pt-3 text-decoration-underline'>Services</h1>
   
    {service.map((crr, indx) => (
      <div className="col-md-4 col-sm-6" key={indx}>
        <Card data={crr} />
      </div>
    ))}
</div>
 <div className="row">
 <div className="col-md-6 d-flex d-md-block justify-content-center mt-5 pt-5">
          <img src="/images/network.png" alt="login_image" className='img-fluid' style={{maxWidth:"68%"}}/>
        </div>
  <div className="col-md-4 mt-5 pt-5 offset-md-1">
 <h1 className='mt-3 mb-5'>Feedback</h1>
 <RatingCard/>

  </div>

 </div>
</div>
</>
 )
}

  function Card({data}) {
 
  let{service, provider, price, description }=data
  return (
    <>
    
      <div className=' border border-white rounded mt-4 px-4' style={{minHeight:"362px"}}>
     
      
      <img src="/images/services.png" alt="serviceimg" style={{width:"50%"}} className='mb-5 img-fluid offset-2 pt-2'/> <br />
      <div className='d-flex justify-content-between px-3'>
      <span className=' fs-5'>{provider}</span> <span className=' fs-5'>₹{price}</span>
      </div>
       <p className='fs-1'><b>{service}</b></p>
       <p>{description}</p>
     
   
      </div>
   
    </>
  )
}

