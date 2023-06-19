import Sidebar from '@/src/admin/components/Sidebar'
import React from 'react'

const Layout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div className="md:ml-[90px]">
                {children}
            </div>
        </>
    )
}

export default Layout