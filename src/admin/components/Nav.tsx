"use client";

import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import HoverMenu from "@/src/common/components/HoverMenu";
import { PROFILE_MENU } from "@/src/home/utils";

const Nav = () => {
    const [profileMenu, setProfileMenu] = useState(false);

    return (
        <div className="z-10 sticky left-0 top-0 w-full shadow-md bg-white flex p-4 justify-end items-center gap-4">
            <IoNotificationsOutline size={25} />
        </div>
    )
}

export default Nav;