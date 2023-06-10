import React from 'react'
import Container from "@/src/common/components/Container"

const Header = () => {
    return (
        <Container className="py-0">
            <img
                src={"/nagpur/pablo.png"}
                alt=""
                width={"100%"}
                className='rounded-lg'
            />
        </Container>
    )
}

export default Header