"use client";

import Container from "@/src/common/components/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useLayoutEffect } from "react";
import { MdOutlineBrunchDining, MdDeliveryDining } from "react-icons/md";
import { BiDrink } from "react-icons/bi";

const Tabs = () => {
  const path = usePathname();

  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (path.includes("/delivery")) {
      setActive(0);
    } else if (path.includes("/dining")) {
      setActive(1);
    } else {
      setActive(2);
    }
  }, [path]);

  return (
    <div className="border-b-[1px] border-gray-200">
      <Container className="py-4 flex gap-12 items-center overflow-x-auto">
        <Link
          className={`text-lg md:text-xl font-medium flex gap-2 items-center relative ${
            active === 0 ? "text-red-500" : "text-gray-600"
          }`}
          href="/nagpur/delivery"
        >
          <span
            className={`w-14 h-14 flex justify-center items-center rounded-full ${
              path.includes("/delivery") ? "bg-red-50" : "bg-gray-100"
            }`}
          >
            <MdDeliveryDining size={25} />
          </span>
          Delivery
          {active === 0 && (
            <div className="w-full h-[2px] bg-red-500 absolute top-[120%]" />
          )}
        </Link>
        <Link
          className={`text-lg md:text-xl font-medium flex gap-2 items-center relative ${
            active === 1 ? "text-red-500" : "text-gray-600"
          }`}
          href="/nagpur/dining"
        >
          <span
            className={`w-14 h-14 flex justify-center items-center rounded-full ${
              active === 1 ? "bg-red-50" : "bg-gray-100"
            }`}
          >
            <MdOutlineBrunchDining size={25} />
          </span>
          Dining
          {active === 1 && (
            <div className="w-full h-[2px] bg-red-500 absolute top-[120%]" />
          )}
        </Link>
        <Link
          className={`text-lg md:text-xl font-medium flex gap-2 items-center relative ${
            active === 2 ? "text-red-500" : "text-gray-600"
          }`}
          href="/nagpur/nightlife"
        >
          <span
            className={`w-14 h-14 flex justify-center items-center rounded-full ${
              active === 2 ? "bg-red-50" : "bg-gray-100"
            }`}
          >
            <BiDrink size={22} />
          </span>
          Nightlife
          {active === 2 && (
            <div className="w-full h-[2px] bg-red-500 absolute top-[120%]" />
          )}
        </Link>
      </Container>
    </div>
  );
};

export default Tabs;
