"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { LuLayoutDashboard } from "react-icons/lu"
import { MdRestaurantMenu } from "react-icons/md"
import { BiFoodMenu } from "react-icons/bi"
import { CgMenuRightAlt, CgMenu } from "react-icons/cg"
import { IconType } from "react-icons"
import { usePathname, useRouter } from 'next/navigation';
import { useMediaQuery } from "react-responsive";
import Nav from "./Nav"

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const path = usePathname();

    const isDownXl = useMediaQuery({ query: "(max-width: 1200px)" });

    useEffect(() => {
        if (isDownXl) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    }, [isDownXl]);

    const tabs = [
        {
            link: "/admin/dashboard",
            Icon: LuLayoutDashboard,
            label: "Dashboard",
        },
        {
            link: "/admin/menu",
            Icon: MdRestaurantMenu,
            label: "Menu",
        },
        {
            link: "/admin/orders",
            Icon: BiFoodMenu,
            label: "Orders",
        },
    ]

    return (
    <>
        <Nav />
        <div className={`
            z-20 p-4 md:w-fit md:h-screen fixed md:top-0 md:left-0 transition-all bg-black
            bottom-0 w-screen
            ${collapsed ? "collapsed" : "no-collapsed"}
        `}>

            <button 
                onClick={() => setCollapsed(p => !p)} 
                className="hidden md:block absolute left-full rounded-r-lg cursor-pointer top-1 p-4"
            >
                {
                    collapsed ?
                        <CgMenu size={20} /> :
                        <CgMenuRightAlt size={20} className="text-blue-500" />
                }
            </button>

            <div className="flex md:flex-col flex-row justify-between md:justify-start gap-2">
                { !collapsed &&
                <div className="p-4 h-20">
                    <Link href="/admin/dashboard">
                        <Image
                            src="/home/logo.png"
                            alt="logo"
                            width={100}
                            height={25}
                        />
                    </Link> 
                </div>
                }
                {
                    tabs.map(({ link, Icon, label }, _) => {
                        return (
                            <Tab
                                key={_}
                                link={link}
                                label={label}
                                Icon={Icon}
                                active={path.endsWith(link)}
                                collapsed={collapsed}
                            />
                        )
                    })
                }
            </div>
        </div>
    </>
    )
}

export default Sidebar

const Tab: React.FC<{
    link: string;
    label: string;
    collapsed?: boolean;
    Icon: IconType;
    active?: boolean;
}> = ({ link, collapsed = false, label, Icon, active = false }) => {
    const router = useRouter();
    const isDownMd = useMediaQuery({ query: "(max-width: 764px)" });

    return (
        <Link className={"text-white relative transition-all flex gap-2 p-4 hover:bg-white hover:bg-opacity-20 rounded-lg items-center"}
            href={link}
        >
            {active && <div className="absolute h-[2px] w-14 md:h-14 md:w-[2px] bg-white rounded-lg" 
            style={!isDownMd ? {right: "calc(100% + 13px)"}:{top:"calc(100% + 13px)", right: 0}}/>
            }
            <Icon size={20} /> {!collapsed ? label : ''}
        </Link>
    )
}