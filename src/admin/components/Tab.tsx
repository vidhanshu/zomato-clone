"use client";
import { useMediaQuery } from "react-responsive";
import { IconType } from "react-icons"
import Link from "next/link";


const Tab: React.FC<{
    link: string;
    label: string;
    collapsed?: boolean;
    Icon: IconType;
    active?: boolean;
}> = ({ link, collapsed = false, label, Icon, active = false }) => {
    const isDownMd = useMediaQuery({ query: "(max-width: 764px)" });

    return (
        <Link className={"text-white relative transition-all flex gap-2 p-4 hover:bg-white hover:bg-opacity-20 rounded-lg items-center"}
            href={link}
        >
            {
                active && <div className="right-0 top-[calc(100%+13px)] md:right-[calc(100%+13px)] absolute h-[2px] w-14 md:h-14 md:w-[2px] bg-white rounded-lg" />
            }
            <Icon size={20} /> {!collapsed ? label : ''}
        </Link>
    )
}
export default Tab;