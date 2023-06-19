"use client";

import Container from "@/src/common/components/Container";
import { usePathname } from "next/navigation";
import React, { useState, useLayoutEffect } from "react";
import Tab from "./Tab";
import { NSComponents } from "../Components";

interface TabsProps {
    tabList: NSComponents.ITab[];
    containerClassName?: string;
}
const Tabs: React.FC<TabsProps> = ({ tabList, containerClassName }) => {
    const path = usePathname();

    const [active, setActive] = useState(0);

    useLayoutEffect(() => {
        tabList.forEach((e, _) => {
            const s = e.href.split("/");
            const p = `/${s[s.length - 1]}`;
            if (path.endsWith(p)) {
                setActive(_);
            }
        })
    }, [path, tabList]);

    return (
        <Container className={`py-4 flex gap-12 items-center overflow-x-auto border-b-[1px] border-gray-200 ${containerClassName}`}>
            {
                tabList.map((e, _) => <Tab key={_} active={active == _} {...e} />)
            }
        </Container>
    );
};

export default Tabs;
