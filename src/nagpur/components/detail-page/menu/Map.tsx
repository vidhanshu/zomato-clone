import Image from "next/image";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { FaDirections } from "react-icons/fa";

const Map = () => {
    return (
        <div className="p-4 rounded-lg shadow-sm border-[1px] border-gray-200 w-full max-w-md">
            <h1 className="text-lg font-medium">Call</h1>
            <p className="text-red-500">+91 9012234345</p>
            <h1 className="mt-4 text-lg font-medium">Direction</h1>
            <Image
                width={400}
                height={300}
                alt=""
                src="https://maps.zomato.com/php/staticmap?center=21.1502810969,79.0678712726&maptype=zomato&markers=21.1502810969,79.0678712726,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250"
            />
            <p className="my-4">240 A, Maharaja Lane, Near Ranikothi Civil Line, Civil Lines, Nagpur</p>
            <div className="flex items-center gap-2">
                <button className="rounded-md flex items-center gap-2 border-[1px] px-2 py-1 hover:bg-gray-100">
                    <HiOutlineClipboardDocument size={20} /> Copy
                </button>
                <button className="rounded-md flex items-center gap-2 border-[1px] px-2 py-1 hover:bg-gray-100">
                    <FaDirections size={20} /> Direction
                </button>
            </div>
        </div>
    )
}

export default Map;