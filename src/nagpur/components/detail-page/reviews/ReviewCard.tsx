import { NSNagpur } from "@/src/nagpur/nagpur";
import Image from "next/image";
import React from "react";
import RatingLabel from '@/src/common/components/RatingLabel';

const ReviewCard:React.FC<NSNagpur.IReview & {className?: string}> = ({comment, name, rating, className}) => {
    return (
        <div className={`flex flex-col gap-3  ${className}`}>
            <div className="flex gap-2 items-center">
                <Image src="/avatar.png" width={40} height={40} className="object-cover rounded-full" alt="" />
                <h1 className="font-semibold text-lg">
                    {name}
                </h1>
            </div>
            <div className="flex flex-col gap-2">
                <RatingLabel rating={rating} />
                <p>
                    {comment}
                </p>
            </div>
        </div>
    )
}

export default ReviewCard;