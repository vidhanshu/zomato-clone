"use client";

import Container from "@/src/common/components/Container";
import { usePathname } from "next/navigation";
import React, { useState, useLayoutEffect } from "react";
import Tab from "./Tab";

const Tabs = ({ slug }: { slug: string }) => {
    const path = usePathname();

    const [active, setActive] = useState(0);

    useLayoutEffect(() => {
        if (path.includes("/overview")) {
            setActive(0);
        } else if (path.includes("/reviews")) {
            setActive(1);
        } else {
            setActive(2);
        }
    }, [path]);

    const TabList = [
        {
            label: "Overview",
            href: `/nagpur/${slug}/overview`,
        },
        {
            label: "Reviews",
            href: `/nagpur/${slug}/reviews`,
        },
        {
            label: "Menu",
            href: `/nagpur/${slug}/menu`,
        },
    ]

    return (
        <Container className="py-4 flex gap-12 items-center overflow-x-auto border-b-[1px] border-gray-200">
            {
                TabList.map((e, _) => <Tab key={_} active={
                    active == _
                } {...e} />)
            }
        </Container>
    );
};

export default Tabs;
