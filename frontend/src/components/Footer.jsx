import React from 'react';
import { FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <div className="container-fluid mt-5 pt-5 footer">
      <div className="row text-center">
        <div className="col">
          <div>
         <p className='fs-4'> © E-Learning 2025 | All Rights Reserved</p>
          <p>Connect with us:</p>
          <div className='fs-2'>
            <Link to="https://www.facebook.com/"><FaFacebook/></Link> &nbsp;&nbsp;&nbsp;
           <Link to="https://www.instagram.com/accounts/login/?hl=en"><FaInstagram/></Link> &nbsp;&nbsp;&nbsp;
          <Link to="https://www.youtube.com/"><FaYoutube/></Link>  &nbsp;&nbsp;&nbsp;
          </div>
           
          </div>
          </div>
      </div>
      <span>@Deepak</span>
    </div>
    </>
  )
}
