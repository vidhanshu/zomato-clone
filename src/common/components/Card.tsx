import React from "react";

export default function Card({
    children,
    className = ''
}:{
    children: React.ReactNode;
    className?: string;
}) {
    return (
    <div className={`p-4 shadow-lg rounded-lg ${className}`}>
        {children}
    </div>)
}