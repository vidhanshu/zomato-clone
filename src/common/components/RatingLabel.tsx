import React, { FC } from 'react'
import { AiFillStar } from 'react-icons/ai'

const RatingLabel: FC<{
  rating: number;
  className?: string;
}> = ({ rating, className }) => {
  return (
    <span className={`${rating > 3 ? "bg-green-700" : rating > 2 ? "bg-yellow-500" : "bg-red-600"} px-1 text-sm rounded-md text-white flex gap-1 items-center w-fit ${className}`}>{rating} <AiFillStar size={15} /></span>
  )
}

export default RatingLabel