import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { LuDot } from "react-icons/lu";

export default function StudyCard() {
const[getData,setGetData]=useState({});
const[loading,setLoading]=useState(true);
let name1=useLoaderData();

    const Studydata=async()=>{
        const res=await fetch(`https://e-learning-backend-vkss.onrender.com/api/study/${name1}`,{
            method:"GET",
            headers:{
                 "Content-Type":"application/json"
            }
        });
        const resData=await res.json();
        // console.log(resData.data);
        
        setGetData(resData.data);
        setLoading(false);
        
    }

    useEffect(() => {
        if (name1) {
            Studydata();
        }
    }, [name1]);

    let{name,description,difference,get_started,why_learn}=getData;
    // console.log(getData);
    
if(loading){
    return(
        <div className="container mt-5 p-5 flex justify-content-center align-items-center">
           <div className="row ">
            
            <h2>Loading.....</h2>
            
           </div>
        </div>
    )
}

  return (
    <>
    <div className="container mt-5 p-5">
        <div className="row">
            <div className="col">
                <h1>{name}</h1>
                <p className='ms-sm-5 mt-5 pb-4'>{description}</p>
                <hr className='z-n1 '/>
                <p className=' mt-4 pb-4'><LuDot className='fs-1'/> Why Learn <b> {name}</b>?</p>
                <p className='ms-sm-5 mt-2 pb-4'>{why_learn}</p>
                <hr className='z-n1 ' />
                <p className=' mt-4 pb-4'><LuDot className='fs-1'/>How Differnet to other languages ?</p>
                <p className='ms-sm-5 mt-2 pb-4'>{difference}</p>
                <hr />
                <p className=' mt-4 pb-4'><LuDot className='fs-1'/>Get Started</p>
                <p className='ms-sm-5 mt-2 pb-4'>{get_started}</p>
            </div>
        </div>
    </div>
    
    </>
  )
}
