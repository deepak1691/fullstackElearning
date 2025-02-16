import React from 'react'

export default function GetStarted() {
  return (
   <>
          <div className="container mt-5 pt-5">
                <div className="row">
                <div className="col-md-5 offset-md-1  d-flex d-md-block justify-content-center mb-5 pb-4 mb-md-0 pb-md-0">
                        <img src="/images/design.png" alt="hero img" className='img-fluid' style={{maxWidth:"70%"}}/>
                    </div>
                    <div className="col-md-6 ps-5 ">
                        <p className='m-0'>We are here to help you</p>
                        <h1 >Get Start today</h1>
                        <p className='mt-4'>Ready to begin your learning journey? Sign up now and access a world of interactive lessons, quizzes, and resources tailored to help you succeed. 
                            Start today and take the first step toward mastering new skills!</p>
                            <div className='mt-5'>
                                <button className='btn btn-primary fs-4'>Connect Now</button>
                                <button className='btn btn-outline-secondary fs-4 text-white ms-4'>Learn More</button>
                            </div>
                    </div>
                    
                </div>
            </div>
   </>
  )
}
