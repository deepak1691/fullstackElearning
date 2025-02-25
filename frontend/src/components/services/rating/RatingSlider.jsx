import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RatingData from './RatingData';

export default function RatingSlider() {

    const[data,setData]=useState([]);

      //api for get the rating data
      const ratingData=async()=>{
        const response=await fetch("https://e-learning-backend-vkss.onrender.com/api/ratingdetails",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        });
        const result=await response.json();
        // console.log(result[0].msg);
        
        setData(result);
    }
    
    useEffect(()=>{
        ratingData();
    },[]);


    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <>
 <div className="mt-5 pt-5 ">
  <h2 className='mb-5 ps-4 text-decoration-underline'>Reviews of our Student's</h2>
  <Carousel
   responsive={responsive}
   infinite={true}  // Enables infinite looping
   autoPlay={true}  // Enables autoplay
   autoPlaySpeed={1500}  // Set the interval for auto-play (in ms)
   transitionDuration={2000}  // Controls the speed of each transition (in ms)
   showDots={true}  // Display dots for navigation
   customTransition="transform .5"  // Custom transition effect
   swipeable={true}
   arrows={false} 
  
   >
{
  data.map((crr)=>{
    return <RatingData key={crr._id} objData={crr}/>
  })
}
</Carousel>
  </div>
    </>
  )
}
