import React from 'react'

export default function HomeSerCard({title,para}) {
  return (
    <>
    <div className='bg-white text-black text-center pt-4 pt-md-0  rounded randomCard'>
        <h2 className='fs-1 fw-bold'>{title}</h2>
        <p>{para}</p>
    </div>
    </>
  )
}
