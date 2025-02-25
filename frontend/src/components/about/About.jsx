import React, { useState } from 'react'
import {useAuth} from '../../store/Auth';

export default function About() {
    const{user}=useAuth();
    // console.log(user);
    // console.log("admin",user.isAdmin);
    
    
    // console.log(user.username);
    
  return (
   <>
     <div className="container  pt-5 hero">
                <div className="row ">
                    <div className="col-md-6 order-2 order-md-1 ps-5 ">
                        <p className='m-0'>Welcome, {user?user.username:"Learner's"}</p>
                        <h1>Why Choose Us?</h1>
                        <p className='mt-5 pe-3 pe-md-2'>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends
                        </p>
                        <p className='mt-5 pe-3 pe-md-2'>Customization: We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.
                        </p>
                        <p className='mt-5 pe-3 pe-md-2'>Customer-Centric Approach: We prioritize your satisfaction  and provide top-notch support to address your IT concerns
                        </p>
                        <p className='mt-5 pe-3 pe-md-2'>Affordability: We offer competitive pricing without compromising on the quality of our services.
                        </p>
                        <p className='mt-5 pe-3 pe-md-2'> Reliability: Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.</p>
                            <div className='mt-5'>
                                <button className='btn btn-primary fs-4'>Connect Now</button>
                                <button className='btn btn-outline-secondary fs-4 text-white ms-4'>Learn More</button>
                            </div>
                    </div>
                    <div className="col-md-5 offset-md-1 d-flex d-md-block justify-content-center order-1 order-md-2 mb-5 pb-4 mb-md-0 pb-md-0">
                        <img src="images/about.png" alt="about hero img" className='img-fluid' style={{maxWidth:"80%"}}/>
                    </div>
                </div>
            </div>
   
   </>
  )
}
