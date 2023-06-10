"use client"

import React, { FC } from 'react'
import Container from './Container'

const Slider: FC<{
    children: React.ReactNode;
    title?: string;
}> = ({ children, title }) => {
    return (
        <Container className='py-4'>
            {title && <h1 className="mb-6 text-2xl font-medium">{title}</h1>}
            <div className='overflow-y-scroll no-scroll'>
                <div className='flex gap-8'>
                    {children}
                </div>
            </div>
        </Container>
    )
}

export default Slider