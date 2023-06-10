"use client";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { NSHome } from "../../home";

const CollectionCard: React.FC<NSHome.ICollection> = ({
  id,
  image,
  placesCount,
  title,
}) => {
  return (
    <div
      className={"h-80 rounded-lg overflow-hidden relative text-white"}
      style={{
        background: `url("${image}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black">
        <h1 className="text-lg">{title}</h1>
        <p className="flex items-center gap-2 text-sm">
          {placesCount} Places <AiFillCaretRight size={15} />
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
