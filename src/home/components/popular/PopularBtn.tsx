import React from "react";
import { NSHome } from "../../home";
import { AiOutlineRight } from "react-icons/ai";

const PopularBtn: React.FC<NSHome.IPopular> = ({ name, placeCount }) => {
  return (
    <div className="flex transition-all cursor-pointer rounded-md items-center justify-between border-[1px] border-gray-200 p-4 hover:shadow-md">
      <div>
        <h1 className="text-lg text-gray-800">{name}</h1>
        <p className="font-light text-gray-500">{placeCount} places</p>
      </div>
      <AiOutlineRight size={18} color="gray" />
    </div>
  );
};

export default PopularBtn;
