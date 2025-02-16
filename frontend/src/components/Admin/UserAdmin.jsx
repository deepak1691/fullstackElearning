import React from 'react';
import { MdDelete } from "react-icons/md";
import { useAuth } from "../../store/Auth";
import { FaCheck,FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function UserAdmin({indx,data,contactApi}) {
  const {BearerToken}=useAuth();
    let{_id}=data;

    const handleClick=async(id)=>{
          
            // console.log(params.id);
        
            const response= await fetch(`https://e-learning-backend-vkss.onrender.com/api/admin/users/${id}`,{
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
   <td className='ps-3'>{indx} .</td>
   <td>{data.username}</td>
   <td>{data.email}</td>
   <td>{data.phone}</td>
   <td>{data.isAdmin?<FaCheck style={{color:"green"}}/>:<RxCross2 style={{color:"red"}}/>}</td>
   <td><NavLink to={`/admin/edit/${_id}`}><FaEdit style={{color:"black"}}/></NavLink></td>
  {!data.isAdmin?(<td className='fs-2'><button className='border border-none' onClick={()=>{handleClick(_id)}}><MdDelete/></button></td>):(<td></td>)}
   </>
  )
}
