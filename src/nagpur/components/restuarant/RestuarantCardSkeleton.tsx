import React from 'react'

const RestuarantCardSkeleton = () => {
  return (
    <div className='bg-white flex flex-col gap-2'>
        <div className='rounded-lg h-[200px] bg-gray-200'/>
        <div className='rounded-lg h-[30px] bg-gray-200'/>
        <div className='rounded-lg h-[20px] bg-gray-200 w-1/3'/>
    </div>
  )
}

export default RestuarantCardSkeleton