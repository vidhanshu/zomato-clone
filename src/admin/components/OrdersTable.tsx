import React from 'react'
import { HiArrowsUpDown } from 'react-icons/hi2'
import { RxDotsHorizontal } from 'react-icons/rx'
import { ORDERS } from '../utils/constants'

const OrdersTable = () => {
    return (
        <table className="w-full text-center">
            <thead>
                <tr className=''>
                    <th className="text-gray-500 font-semibold text-xl p-4">No</th>
                    <th className="text-gray-500 font-semibold text-xl p-4">
                        <button className="flex items-center gap-2 w-fit m-auto cursor-pointer">
                            Id <HiArrowsUpDown />
                        </button>
                    </th>
                    <th className="text-gray-500 font-semibold text-xl p-4">
                        <button className="flex items-center gap-2 w-fit m-auto cursor-pointer">
                            Date <HiArrowsUpDown />
                        </button>
                    </th>
                    <th className="text-gray-500 font-semibold text-xl p-4">Status</th>
                    <th className="text-gray-500 font-semibold text-xl p-4">
                        <button className="flex items-center gap-2 w-fit m-auto cursor-pointer">
                            Amount <HiArrowsUpDown />
                        </button>
                    </th>
                    <th className="text-gray-500 font-semibold text-xl p-4">View</th>
                </tr>
            </thead>
            <tbody>
                {
                    ORDERS.map((e, _) => (
                        <tr key={_} className='border-t-[1px]'>
                            <td className="p-4 font-semibold">{e.id}</td>
                            <td className="p-4 font-semibold">#{e.id}</td>
                            <td className="p-4 font-semibold whitespace-nowrap">{e.date}</td>
                            <td className="p-4 font-semibold">{e.status}</td>
                            <td className="p-4 font-semibold">{e.amount}</td>
                            <td className="p-4 font-semibold cursor-pointer">
                                <RxDotsHorizontal size={25} className="m-auto" />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default OrdersTable