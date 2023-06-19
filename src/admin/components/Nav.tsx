"use client";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import HoverMenu from "@/src/common/components/HoverMenu";
import { PROFILE_MENU } from "@/src/home/utils";

const Nav = () => {

    const isDownMd = useMediaQuery({query: "(max-width:764px)"})

    return (
        <div className="z-10 sticky left-0 top-0 w-full shadow-md bg-white flex p-4 justify-between items-center gap-4">
            {isDownMd && 
                <Link href="/admin/dashboard">
                    <Image
                        src="/home/logo_dark.png"
                        alt="logo"
                        width={100}
                        height={25}
                    />
                </Link>
            } 
            <IoNotificationsOutline size={25} />
        </div>
    )
}

export default Nav;