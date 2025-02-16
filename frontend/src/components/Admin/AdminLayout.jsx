import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from "../../store/Auth"
import toast from 'react-hot-toast';

export default function AdminLayout() {
  const{user,isLoggedIn,isLoading}=useAuth();
  // console.log("user",user);
  // console.log("login",isLoggedIn);
  // console.log("admin",user.isAdmin);

  

  if(!isLoggedIn){
    toast.error("You are not loggedIn!!");
   
  return<>
  {
       <Navigate to="/login"/>
  }
  </>
  }

  
  if (isLoading) {
    return (
      <div
        className="container mt-5 p-5 d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <h2>Loading...</h2>
      </div>
    );
  }

  if(!user.isAdmin){
  
    toast.error("You are not an Admin!!");
   
    return<>
    {
         <Navigate to="/"/>
    }
    </>
  }
    return (
      <>
      <div className="container mt-5 p-5 ">
          <div className="row ">
            <h1 className='my-5 pt-3 text-decoration-underline'>ADMIN</h1>
     
         <header className='col-md-4'>
          <ul className='d-flex flex-row flex-md-column'>
              <li><NavLink to="/admin/users">User</NavLink></li>
              <li><NavLink to="/admin/contacts">Contact</NavLink></li>
          </ul>
         </header>
        
       <div className='col-md-8 table-responsive mt-4 mt-md-0'>
        <h2>Welcome to Admin Pannel :)</h2>
       <Outlet/>
       </div>
       </div>
       </div>
      </>
    )
  }

 

