import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {

    return (
        <div className="z-10 sticky left-0 top-0 w-full shadow-md bg-white flex p-4 justify-between items-center gap-4">
            <Link className="md:hidden block" href="/admin/dashboard">
                    <Image
                        src="/home/logo_dark.png"
                        alt="logo"
                        width={100}
                        height={25}
                    />
            </Link>
            <IoNotificationsOutline size={25} />
        </div>
    )
}

export default Nav;