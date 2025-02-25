import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import {useAuth} from '../../../store/Auth';


export default function RatingCard() {
  const {user,isLoggedIn}=useAuth();
  const[userData,setUserData]=useState(true);
 
  // console.log(isLoggedIn);

    const[rating,setRating]=useState({
        halfrating:1,
        msg:"",
        
      });

      //rating handle
     const handleChange=(e)=>{
   if(user){
    //  console.log(user);
   
      let{name,value}=e.target;
    
      setRating({
        ...rating,[name]:value,
        username:user.username
      });
    
   }
      // setUserData(false);
     
      console.log(rating); 
    }
    //handle rating form submit
    
    const handleSubmit=async(e)=>{
      e.preventDefault();
      
      if (!isLoggedIn) {
        toast.error("You need to be logged in to submit a rating.");
        setRating({
          halfrating:1,
          msg:""
          });
        return ;  // Prevent submission if not logged in
      }

    const response=await fetch("https://e-learning-backend-vkss.onrender.com/api/rating",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(rating),
  });
  const result=await response.json();
  // console.log(result);


   if(response.ok){
      setRating({
          halfrating:1,
          msg:""
          });
          toast.success(result.message, {
              icon: '👏',
             
            });
   }else{
      toast.error("not submit")
   }
  
      
    }

   

  return (
    <>
 
     <form onSubmit={handleSubmit} >
  
  <Stack spacing={1}>
      <Rating name="halfrating"   precision={1} value={rating.halfrating} onChange={handleChange} sx={{'.MuiRating-icon': { backgroundColor: 'white',}}}/> 
    </Stack>
 
    <textarea className='form-control mt-3' value={rating.msg} name="msg" id="msg" placeholder='Give your feedback.....' style={{height:"150px"}} onChange={handleChange} required></textarea>
    <Stack spacing={2} direction="row" className='mt-3'>
    <Button type='submit' variant="contained">submit</Button>
    </Stack>
  </form>
    </>
  )
}
