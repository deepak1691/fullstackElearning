import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useAuth } from "../../store/Auth";
import toast from 'react-hot-toast';

export default function EdithAdmin() {
      const[contactData,setContactData]=useState({
        username: '',
        email: '',
        isAdmin: '',
        phone: ''
      });
       const {BearerToken}=useAuth();
    const id=useLoaderData();
    const navigate=useNavigate();
    // console.log(id);
    
    const contactApi=async()=>{
        const response=await fetch(`https://e-learning-backend-vkss.onrender.com/api/admin/edit/${id}`,{
          method:"GET",
          headers:{
            "Authorization":BearerToken,
        }
        });
        const result=await response.json();
        // console.log(result);
        
        if(response.ok){
         await setContactData(result.data);
         toast.success(result.message);
        }else{
          toast.error(result.message);
          navigate("/")
        }
      }
      useEffect(()=>{
        contactApi();
      },[]);

      const handleChange=(e)=>{
        let{name,value}=e.target;
        setContactData({
          ...contactData,[name]:value
        })
      }

      const handlSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch(`https://e-learning-backend-vkss.onrender.com/admin/edit/${id}`,{
          method:"PUT",
          headers:{
            "Authorization":BearerToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData),
        
        });

        const result=await response.json();
        // console.log(result);
        
        if(response.ok){
          toast.success(result.message);
          navigate("/admin/users");
         }else{
           toast.error(result.message);
           navigate("/")
         }
      }
    
  return (
   <>
   <div className="container">
      <div className="row">
        <div className="col-md-6  ">
          <h1>Edit Form</h1>
          <form onSubmit={handlSubmit} >
          <label htmlFor="username" className="form-label mt-2"> Name</label>
          <input type="text" name='username' className="form-control" id="username" placeholder="enter your username" value={contactData.username} onChange={handleChange} required/>

          <label htmlFor="email"className="form-label mt-2">Email</label>
          <input type="email" name='email' className="form-control" id="email"placeholder="enter your email" value={contactData.email} onChange={handleChange} required/>

          <label htmlFor="isAdmin"className="form-label mt-2">isAdmin</label>
          <input type="text" name='isAdmin' className="form-control" id="isAdmin"placeholder="enter your isAdmin" value={contactData.isAdmin} onChange={handleChange} required/>

          <label htmlFor="phone"className="form-label mt-2">Phone</label>
          <input type="number" name='phone' className="form-control" id="phone"placeholder="enter your phone number" value={contactData.phone} onChange={handleChange} required/>

          <button className='btn btn-primary mt-5  fs-4 px-4'>Edit</button>
          </form>
        </div>
      </div>
    </div>
   </>
  );
}
