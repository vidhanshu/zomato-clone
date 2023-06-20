"use client";
import React from 'react'
import DashboardCard from "@/src/admin/components/DashboardCard";
import { MdRestaurantMenu } from "react-icons/md";
import Card from '@/src/common/components/Card';
import { CategoryScale, ChartData } from "chart.js";
import Chart from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';
import OrdersTable from '@/src/admin/components/OrdersTable';

Chart.register(CategoryScale);

const orders: ChartData<"line", number[], string> = {
   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
   datasets: [
      {
         label: "Orders",
         backgroundColor: "black",
         data: [65, 59, 80, 81, 56, 90, 95],
         borderColor: "rgba(0, 0, 0, 0.5)"
      }
   ]
}
const earnings: ChartData<"bar", number[], string> = {
   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
   datasets: [
      {
         label: "Earnings",
         backgroundColor: "black",
         data: [65, 59, 80, 81, 56, 90, 95],
         borderColor: "rgba(0, 0, 0, 0.5)"
      }
   ]
}


const Admin = () => {

   return (
      <div className="px-2 pt-8 pb-[90px] md:p-4 xl:p-8 bg-gray-50 min-h-[100vh] flex flex-col gap-8">
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
            <Card className="h-fit border-[1px]">
               <Line
                  style={{
                     width: "100%",
                     margin: "auto"
                  }}
                  data={orders}
               />
            </Card>
            <Card className="h-fit border-[1px]">
               <Bar
                  style={{
                     width: "100%",
                     margin: "auto"
                  }}
                  data={earnings}
               />
            </Card>
         </div>

         <Card className='border-[1px] max-w-full overflow-x-auto'>
            <OrdersTable />
         </Card>
      </div>
   )
}

export default Admin