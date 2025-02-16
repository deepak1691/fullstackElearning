import React from 'react'

export default function Hero() {
    return (
        <>
            <div className="container  pt-5 hero">
                <div className="row ">
                    <div className="col-md-6 order-2 order-md-1 ps-5 ">
                        <p className='m-0'>We are excited start with you</p>
                        <h1>Welcome to E-Learning</h1>
                        <p className='mt-4'>Welcome to E-Learning, where learning meets convenience. Explore interactive lessons, track your progress, and enhance your skills at your own pace. 
                            Let’s make learning easier and more fun !</p>
                            <div className='mt-5'>
                                <button className='btn btn-primary fs-4'>Connect Now</button>
                                <button className='btn btn-outline-secondary fs-4 text-white ms-4'>Learn More</button>
                            </div>
                    </div>
                    <div className="col-md-5 offset-md-1 d-flex d-md-block justify-content-center order-1 order-md-2 mb-5 pb-4 mb-md-0 pb-md-0">
                        <img src="images/home.png" alt="hero img" className='img-fluid' style={{maxWidth:"80%"}}/>
                    </div>
                </div>
            </div>
        </>
    )
}
