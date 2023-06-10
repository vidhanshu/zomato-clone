"use client";

import { useState } from "react";
import Container from "../../common/components/Container";
import Image from "next/image";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import SearchBar from "@/src/home/components/header/SearchBar";
import { PROFILE_MENU } from "@/src/home/utils";
import HoverMenu from "@/src/common/components/HoverMenu";
import Link from "next/link";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <Container as="nav" className="pt-4 flex justify-between items-center">
      <Link href="/">
        <Image src="/home/logo_dark.png" alt="logo" width={120} height={20} />
      </Link>
      <div className="hidden md:block">
        <SearchBar />
      </div>
      <div
        onMouseOver={() => setProfileMenu(true)}
        onMouseLeave={() => setProfileMenu(false)}
        className="flex gap-2 items-center font-semibold cursor-pointer relative select-none"
      >
        <div className="h-10 w-10 rounded-full relative overflow-hidden">
          <Image className="" src="/avatar.png" fill alt="logo" />
        </div>
        Vidhanshu
        {profileMenu ? (
          <AiOutlineUp size={18} color="black" />
        ) : (
          <AiOutlineDown size={18} color="black" />
        )}
        <HoverMenu
          menuItems={PROFILE_MENU}
          onClose={() => setProfileMenu(false)}
          open={profileMenu}
        />
      </div>
    </Container>
  );
};

export default Navbar;
