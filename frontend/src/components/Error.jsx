import React from 'react';
import { useNavigate,Link } from 'react-router-dom';


export default function img() {
  const navigate=useNavigate();
  return (
    <>
    <div className="container mt-5 pt-5">
        <div className="row text-center">
           <div className="col mt-5 pt-5 pt-md-0 ">
           <img src="images/404-page.gif" className='rounded img-fluid error-img' alt="404 image"  />
           </div>
           <p className='mt-3'>404 Page not found.... </p>
          <div>
          <button onClick={() => navigate(-1)} className="btn btn-dark w-25 fs-5">Go back</button>
          </div>
        </div>
    </div>
    </>
  )
}
