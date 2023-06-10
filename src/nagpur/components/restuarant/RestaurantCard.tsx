import React, { FC } from "react";
import Link from "next/link";
import { NSNagpur } from "../../nagpur";
import Image from "next/image";
import { stringShortener } from "../../utils/methods";
import RatingLabel from "@/src/common/components/RatingLabel";

const RestaurantCard: FC<NSNagpur.IRestaurant> = ({
  desc,
  distance,
  image,
  location,
  name,
  price,
  rating,
  offer,
}) => {
  return (
    <Link href="/nagpur/slug/overview" className="p-3 rounded-lg hover:shadow-lg cursor-pointer">
      <div className="relative h-[248px] min-w-[300] rounded-lg overflow-hidden">
        <Image fill src={image} alt="" className="object-cover" loading="lazy" />
        <span className="absolute bottom-2 right-4 bg-white px-2 text-sm rounded-md">
          {distance} km
        </span>
        <span className="bg-blue-500 text-white absolute left-0 bottom-2 p-[5px] text-xs">{offer}</span>
      </div>
      <div className="mt-2">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-medium">{name}</h1>
          <RatingLabel
            rating={rating}
          />
        </div>
        <div className="text-gray-500 flex justify-between items-center">
          <p>{stringShortener(desc, 100)}</p>
          <p>{price}</p>
        </div>
        <p className="text-sm text-gray-400">{location}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
