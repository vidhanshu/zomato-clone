import Link from "next/link";
import React, { FC } from "react";
import { NSComponents } from "./Components";

const HoverMenu: FC<NSComponents.IHoverMenuProps> = ({
  menuItems,
  onClose,
  open,
}) => {
  return (
    <div
      className={`z-30 border-[1px] border-gray-200 bg-white overflow-hidden w-full rounded-md shadow-lg absolute top-full left-0 ${open? "block":"hidden"}`}
    >
      <ul className="font-normal text-gray-500">
        {menuItems.map((item, index) => (
          <li key={index}>
            {typeof item.onClick !== "undefined" ? (
              <button
                disabled={item.isDisabled}
                className="hover:bg-gray-100 px-3 py-2 rounded-md w-full text-left"
                onClick={() => {
                    onClose();
                    item.onClick && item.onClick();
                }}
              >
                {item.label}
              </button>
            ) : (
              <button
              className="hover:bg-gray-100 px-3 py-2 rounded-md w-full text-left" disabled={item.isDisabled}
              >
                <Link className="w-full h-full" href={item.link || "/"}>{item.label}</Link>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HoverMenu;
