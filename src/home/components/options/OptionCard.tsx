"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NSHome } from "../../home";

const OptionCard: React.FC<NSHome.IOption> = ({ desc, image, title, link }) => {
  return (
    <Link
      href={link}
      className="md:hover:scale-105 transition-all cursor-pointer h-72 rounded-3xl overflow-hidden border-[1px] border-gray-200"
    >
      <div className="h-[60%] relative">
        <Image className="object-cover" src={image} alt="logo" fill />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="mt-1 text-gray-500">{desc}</p>
      </div>
    </Link>
  );
};

export default OptionCard;
