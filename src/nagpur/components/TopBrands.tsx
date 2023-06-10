"use client";
import Slider from "@/src/common/components/Slider";
import { TOP_BRANDS_SLIDER } from "../utils/constants";
import Image from "next/image";

const TopBrands = () => {
    return (
        <div>
            <Slider title="Top brands for you">
                {TOP_BRANDS_SLIDER.map(({ id, image, name }, _) => (
                    <div key={id}>
                        <div className="w-32 h-32 relative p-3 bg-red-500 shadow-md rounded-full">
                            <Image
                                src={image}
                                fill
                                className="rounded-full object-cover"
                                alt=""
                            />
                        </div>
                        <h1 className="font-medium mt-4 text-center">{name}</h1>
                    </div>
                ))}
            </Slider>

        </div>
    )
}

export default TopBrands;