import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/Auth';
import toast from 'react-hot-toast';
export default function Logout() {
    const[redirect,setRedirect]=useState(false);
    let {logout}=useAuth();
  useEffect(()=>{
    logout();
    toast.success('Logged out successfully!');
    setRedirect(true)
    
  },[logout])

  if(redirect){
    
    return <Navigate to="/login"/>
}

}
