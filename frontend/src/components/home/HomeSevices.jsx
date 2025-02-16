import React from 'react'
import HomeSerCard from './HomeSerCard'

export default function HomeSevices() {
  return (
    <>
    <div className="container my-5 px-5 py-5">
        <div className="row cardDetails rounded">
            <div className="col-6 mt-3  col-md-3"><HomeSerCard title="50+" para="Registered Student's"/></div>
            <div className="col-6 mt-3  col-md-3"><HomeSerCard title="10,000+" para="Happy Student's"/></div>
            <div className="col-6 mt-3 col-md-3"><HomeSerCard title="500+" para="Best Teacher's"/></div>
            <div className="col-6 mt-3 col-md-3"><HomeSerCard title="24/7" para="Services"/></div>
        </div>
    </div>
    </>
  )
}
