import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../store/Auth';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate=useNavigate();
    const {setTokenInLs}=useAuth();
  const[login,setLogin]=useState({
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    
    let{name,value}=e.target;
    setLogin({
      ...login,[name]:value
    });
  }

  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response=await fetch("https://e-learning-backend-vkss.onrender.com/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(login)
      });
      const result=await response.json();
      console.log(result);

    if(response.ok){
      await setTokenInLs(result.token);
      setLogin({
       email:"",
       password:""
      });
      
      navigate("/");
      toast.success(result.msg);
    }else{
      toast.error(result.message);
    }
     
  }
  return (
    <>
    <div className="container  hero pt-5">
      <div className="row">
      <div className="col-md-6 d-flex d-md-block justify-content-center">
          <img src="images/login.png" alt="login_image" className='img-fluid' style={{maxWidth:"68%"}}/>
        </div>
        <div className="col-md-4 offset-md-1 mt-4 px-4 px-md-0">
          <h1>Login Form</h1>
       <form action="" onSubmit={handleSubmit}>
       <label htmlFor="email"className="form-label mt-3">Email</label>
          <input type="email" name='email' value={login.email} className="form-control" id="email"placeholder="enter your email" onChange={handleChange} required/>

          <label htmlFor="password"className="form-label mt-3">Password</label>
          <input type="password" name='password'  value={login.password} className="form-control" id="password"placeholder="enter your password" onChange={handleChange} required/>

          <button className='btn btn-primary mt-4 fs-4 px-4'>Login</button>
        
       </form>
       
        </div>
      </div>
    </div>
    </>
  )
}
