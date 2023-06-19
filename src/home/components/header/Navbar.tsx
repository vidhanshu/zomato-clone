"use client";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import Image from "next/image";
import { IoClose, IoLogoGooglePlaystore } from "react-icons/io5";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Container from "@/src/common/components/Container";
import { useMediaQuery } from "react-responsive";
import HoverMenu from "@/src/common/components/HoverMenu";
import { PROFILE_MENU } from "../../utils";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);

  const isUpMd = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    if (isUpMd) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [isUpMd]);

  return (
    <Container
      as="nav"
      className="flex justify-between items-center py-4 text-lg text-white relative"
    >
      <h1 className="hidden md:flex text-white gap-2 items-center text-sm font-semibold">
        <IoLogoGooglePlaystore size={18} /> Get the App
      </h1>
      {
        <HiBars3
          className="md:hidden"
          color="white"
          size={32}
          onClick={() => setActive((e) => !e)}
        />
      }

      {active && (
        <ul
          className="
        bg-white fixed w-screen h-screen flex-col text-black left-0 top-0 z-10 p-4 font-light
        md:flex md:flex-row md:h-auto md:w-auto md:gap-8 md:items-center md:static md:bg-transparent md:text-white
        "
        >
          <li
            className="
          flex justify-between items-center
          md:hidden
          "
          >
            <IoClose
              size={32}
              className="cursor-pointer"
              onClick={() => setActive(false)}
            />
            <Image
              src="/home/logo_dark.png"
              alt="logo"
              width={150}
              height={50}
            />
          </li>
          <li className="mt-10 md:mt-0">
            <Link href="/">Investor Relations</Link>
          </li>
          <li className="mt-10 md:mt-0">
            <Link href="/">Add restaurant</Link>
          </li>
          <li
            onMouseOver={() => setProfileMenu(true)}
            onMouseLeave={() => setProfileMenu(false)}
            className="mt-10 md:mt-0 flex gap-2 items-center font-semibold cursor-pointer relative select-none"
          >
            <div className="h-10 w-10 rounded-full relative overflow-hidden">
              <Image className="" src="/avatar.png" fill alt="logo" />
            </div>
            Vidhanshu
            {profileMenu ? (
              <AiOutlineUp size={18} color="white" />
            ) : (
              <AiOutlineDown size={18} color="white" />
            )}
            <HoverMenu
              menuItems={PROFILE_MENU}
              onClose={() => setProfileMenu(false)}
              open={profileMenu}
            />
          </li>
        </ul>
      )}
    </Container>
  );
};

export default Navbar;
