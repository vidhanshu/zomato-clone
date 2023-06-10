import Link from "next/link";
import { FC } from "react"

const Tab: FC<{
    href: string;
    active: boolean;
    label:string;
}> = ({ active, href,label }) => {
    return (
        <Link
            className={`text-lg md:text-xl font-medium flex gap-2 items-center relative ${active ? "text-red-500" : "text-gray-600"
                }`}
            href={href}
        >
            {label}
            {active && (
                <div className="w-full h-[2px] bg-red-500 absolute top-[150%]" />
            )}
        </Link>
    )
}

export default Tab;