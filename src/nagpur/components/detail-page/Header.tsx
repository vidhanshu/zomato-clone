import React from 'react'
import Container from "@/src/common/components/Container"
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <Container className="py-0">
            <div className='flex gap-2'>
                <div className="min-h-[300px] w-[100%] md:w-[50%] relative overflow-hidden">
                    <Image src={"/nagpur/pablo.png"} fill className='object-cover' alt="" />
                </div>
                <div className='hidden lg:w-[25%] lg:flex lg:flex-col lg:gap-2'>
                    <Image src={"/nagpur/pablo.png"} width={400} height={400} alt="" />
                    <Image src={"/nagpur/pablo.png"} width={400} height={400} alt="" />
                </div>
                <div className="hidden md:block md:w-[55%] lg:w-[25%] relative overflow-hidden">
                    <Link href="/"  className="z-[1] bg-black bg-opacity-50 left-0 top-0 absolute w-full h-full flex justify-center items-center">
                        <h1 className="text-white text-lg">See more</h1>
                    </Link>
                    <Image src={"/nagpur/pablo.png"} fill className='object-cover' alt="" />
                </div>
            </div>
        </Container>
    )
}

export default Header