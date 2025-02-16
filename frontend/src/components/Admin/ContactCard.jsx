import React from 'react';
import { MdDelete } from "react-icons/md";
import { useAuth } from "../../store/Auth";
import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';

export default function ContactCard({indx,data,contactApi}) {
  const {BearerToken}=useAuth();
    let{_id}=data;

    const handleClick=async(id)=>{
          
            // console.log(params.id);
        
            const response= await fetch(`https://e-learning-backend-vkss.onrender.com/api/admin/contact/${id}`,{
                method:"DELETE",
                headers:{
                    "Authorization":BearerToken,
                }
                
            });
            if(response.ok){
           const result= await response.json();
           toast.success(result.message);
              contactApi();
            
            }
    }
  return (
   <>
   <td>{indx} .</td>
   <td>{data.username}</td>
   <td>{data.email}</td>
   <td>{data.msg}</td>
   <td className='fs-2'><button className='border border-none' onClick={()=>{handleClick(_id)}}><MdDelete /></button></td>
   </>
  )
}
