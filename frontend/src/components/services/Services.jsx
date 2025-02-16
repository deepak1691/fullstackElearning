import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loading from './Loading';


export default function Services() {
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
          {Array(service.length).fill(0).map((_, i) => (
            <div className="col-md-4 col-sm-6 px-5 px-md-2 px-sm-2" key={i}>
              <Loading />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
 return (
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
   
  </div>
  </>
)
}
