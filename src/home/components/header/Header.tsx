"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="h-[60vh] bg-[url('/home/bg.png')] bg-no-repeat bg-center bg-cover text-white">
      <Navbar />
      <div className="p-3 md:p-0 flex flex-col m-auto justify-center items-center gap-8 h-[70%]">
        <Image
          src="/home/logo.png"
          alt="logo"
          width={300}
          height={300}
        />
        <h1 className="text-2xl text-center md:text-4xl">Discover the best food & drinks in Nagpur</h1>
        <SearchBar/>
      </div>
    </div>
  );
};

export default Header;
