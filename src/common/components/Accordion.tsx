"use client";

import React, { FC, useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Accordion: FC<{ title: string; description: React.ReactNode }> = ({
  description,
  title,
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="p-4 bg-white border-[1px] border-gray-200 rounded-md">
      <div
        onClick={() => setActive((e) => !e)}
        className="text-xl font-light flex items-center justify-between cursor-pointer"
      >
        {title}
        {
            active ?
            <RxCaretUp color="gray" />:
            <RxCaretDown color="gray" />
        }
      </div>
      <div className={`font-light text-gray-500 leading-7 ${active && "mt-5"}`}>
        {active && description}
      </div>
    </div>
  );
};

export default Accordion;
