import React, { useRef } from 'react';
import { Form,useNavigate } from 'react-router-dom';
import {useAuth} from '../../store/Auth';
import toast from 'react-hot-toast';


export default function Signup () {
  const navigate=useNavigate();
  const {setTokenInLs}=useAuth();
  const formRef=useRef(null);

  const handleSubmit=async(e)=>{
      e.preventDefault();
// console.log(formRef.current);

      try {
        const res=new FormData(formRef.current);
        const data=Object.fromEntries(res);
        const response=await fetch("http://localhost:8080/api/signup",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        });
        const result=await response.json();
        console.log(result);
       if(response.ok){
        setTokenInLs(result.token);
        formRef.current.reset();
        toast.success(result.message);
        navigate("/");
        return null;
       }else{
        toast.error(result.message);
       }
        
      } catch (error) {
        console.log(error);
        
      }
  }
  
  return (
    <>
    <div className="container hero pt-5">
      <div className="row">
        <div className="col-md-6 d-flex d-md-block justify-content-center">
          <img src="images/register.png" alt="registration_image" className='img-fluid' style={{maxWidth:"70%"}}/>
        </div>
        <div className="col-md-4  offset-md-1 mt-4 px-4 px-md-0">
          <h1>Registration Form</h1>
          <Form ref={formRef} action='/signup' method='POST' onSubmit={handleSubmit}>
          <label htmlFor="username" className="form-label mt-2"> Name</label>
          <input type="text" name='username' className="form-control" id="username" placeholder="enter your username" required/>

          <label htmlFor="email"className="form-label mt-2">Email</label>
          <input type="email" name='email' className="form-control" id="email"placeholder="enter your email" required/>

          <label htmlFor="password"className="form-label mt-2">Password</label>
          <input type="password" name='password' className="form-control" id="password"placeholder="enter your password" required/>

          <label htmlFor="phone"className="form-label mt-2">Phone</label>
          <input type="number" name='phone' className="form-control" id="phone"placeholder="enter your phone number" required/>

          <button className='btn btn-primary mt-5  fs-4'>Register</button>
          </Form>
        </div>
      </div>
    </div>
    </>
  )
}
