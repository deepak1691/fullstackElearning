import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="container border rounded mt-4 p-4 ">
        <div className=" mb-3">
          <Skeleton width={150} height={100} className='rounded z-n1'/>
        </div>
        <div>
          <Skeleton height={15} className="mb-2 z-n1" />
          <Skeleton height={15} className="mb-2 z-n1" />
          <Skeleton height={40} className="mb-2 z-n1" />
        </div>
      </div>
    </SkeletonTheme>
  )
}
