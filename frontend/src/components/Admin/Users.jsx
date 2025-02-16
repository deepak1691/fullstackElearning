import React, { useEffect, useState } from 'react'
import UserAdmin from "./UserAdmin";
import { useAuth } from "../../store/Auth";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



export default function ContactAdmin() {
  const[contactData,setContactData]=useState([]);
   const {BearerToken}=useAuth();
   const navigate=useNavigate();

  const contactApi=async()=>{
    const response=await fetch("http://localhost:8080/api/admin/users",{
      method:"GET",
      headers:{
        "Authorization":BearerToken,
    }
    });
    const result=await response.json();
    // console.log(result);
    
    if(response.ok){
     await setContactData(result.userData);
    //  toast.success(result.message);
    }else{
      toast.error(result.message);
      navigate("/")
    }
  }
  useEffect(()=>{
    contactApi();
  },[])
  
  // const paramData=useLoaderData();

  // console.log("para",paramData);

  
  return (
    <>
    <div className="container fs-5">
      <div className="row">
        <table className='table  '>
          <thead>
            <tr >
              <th>S.No</th>
              <th>User Name</th>
              <th> E-Mail</th>
              <th>Phone</th>
              <th>isAdmin</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              contactData.map((crr,indx)=>{
                  return <tr  key={indx}><UserAdmin indx={indx+1}  data={crr} contactApi={contactApi}/></tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

