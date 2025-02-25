import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../store/Auth';
import toast from 'react-hot-toast';

export default function Contact() {
  const[contact,setcontact]=useState({
    username:"",
    email:"",
   msg:""
  });

  const[userData,setUserData]=useState(true);
  const {user,isLoggedIn}=useAuth();


  if(userData && user){
      setcontact({
        username:user.username,
        email:user.email,
        msg:""
      })
      setUserData(false);
  }

  const handleChange=(e)=>{
    
    let{name,value}=e.target;
    setcontact({
      ...contact,[name]:value
    });
  }

  const handleSubmit=async(e)=>{
      e.preventDefault();
      // console.log(contact);

      const response=await fetch("https://e-learning-backend-vkss.onrender.com/api/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(contact)
      });
      const result=await response.json();
      console.log(result);
    if(response.ok){
      setcontact({
        username:"",
        email:"",
       msg:""
      });
      toast('Thank you', {
        icon: '👏',
       
      });
    }else{
      toast.error(result.message);
    }
      
  }

  // if(!isLoggedIn){
  //   return<>
  //   <Navigate to="/login"/>
  //   {
  //     toast.error("You are not loggedIn!!")
  //   }
  //   </>
  // }
  return (
    <>
    <div className="container hero pt-5">
      <div className="row">
      <div className="col-md-6 d-flex d-md-block justify-content-center">
          <img src="images/support.png" alt="Contact_image" className='img-fluid' style={{maxWidth:"68%"}}/> <br /><br />
          <p className='d-none d-md-block text-decoration-underline' style={{color:"#535bf2"}} title='see location'><Link to="https://maps.app.goo.gl/FfQZanf8e69CZUz79" target='_blank'>Go to map....</Link>
          </p>
        </div>
        <div className="col-md-4 offset-md-1 mt-4 px-4 px-md-0">
          <h1>Contact Form</h1>
       <form action="" onSubmit={handleSubmit}>

       <label htmlFor="username"className="form-label mt-3">Name</label>
          <input type="text" name='username'  value={contact.username} className="form-control" id="username"placeholder="enter your name" onChange={handleChange} required/>

       <label htmlFor="email"className="form-label mt-3">Email</label>
          <input type="email" name='email' value={contact.email} className="form-control" id="email"placeholder="enter your email" onChange={handleChange} required/>

          <label htmlFor="msg" className='form-label mt-3'>Comments</label>

          <textarea className="form-control " placeholder="Leave a comment here" style={{height:"98px"}} id="msg" name='msg' value={contact.msg} cols="200" onChange={handleChange} required></textarea>
         
          <button className='btn btn-primary mt-4 fs-4'>Contact</button>
       </form>
        </div>
      </div>
      <div className="row mt-5 d-block d-md-none">
        <div className="col p-4">
        <iframe className='rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27946.978831165186!2d79.24197044126264!3d28.8872812596631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a8417d29a3d59%3A0x2b289acbd0e6af1c!2sBilaspur%2C%20Uttar%20Pradesh%20244921!5e0!3m2!1sen!2sin!4v1739428177315!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} ></iframe>
        </div>
      
    </div>
    </div>
    
   
    </>
  )
}
