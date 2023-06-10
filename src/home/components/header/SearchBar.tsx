import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="shadow-md border-[1px] border-gray-200 max-w-3xl w-full bg-white px-3 py-2 rounded-md flex gap-3 items-center">
      <div className="flex items-center gap-1 flex-1 max-w-[30%]">
        <HiLocationMarker size={32} className="text-pink-400" />
        <input
          disabled
          className="w-full focus:outline-none p-2 text-black placeholder:text-sm"
          placeholder="Nagpur"
          type="text"
        />
      </div>
      <div className="h-5 w-[2px] bg-gray-300" />
      <div className="flex items-center gap-1 flex-1">
        <CiSearch size={25} color="gray" />
        <input
          className="w-full focus:outline-none p-2 text-black placeholder:text-sm"
          placeholder="Search for the restaurants, cuisine or a dish"
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchBar;
