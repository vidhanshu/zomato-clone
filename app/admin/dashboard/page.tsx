"use client";
import React from 'react'
import Chart from "chart.js/auto";
import DashboardCard from "@/src/admin/components/DashboardCard";
import { MdRestaurantMenu } from "react-icons/md";
import Card from '@/src/common/components/Card';

const Admin = () => {

   return (
      <div className="p-2 md:p-4 xl:p-8 bg-gray-50 min-h-[100vh] flex flex-col gap-8">
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <DashboardCard
               Icon={MdRestaurantMenu}
               title="Total Menu"
               count={120}
               percent={50.6}
               mode="dark"
            />
            <DashboardCard
               Icon={MdRestaurantMenu}
               title="Total Menu"
               count={120}
               percent={30}
            />
            <DashboardCard
               Icon={MdRestaurantMenu}
               title="Total Menu"
               count={120}
               percent={16.8}
            />
            <DashboardCard
               Icon={MdRestaurantMenu}
               title="Total Menu"
               count={120}
               percent={59.6}
            />
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="h-[400px]">

            </Card>
            <Card>

            </Card>
         </div>
      </div>
   )
}

export default Admin