import React, { FC } from "react";

const FilterCard: FC<{
  onClick: () => void;
  icon?: React.ReactNode;
  label: string;
}> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-[1px] border-gray-300 text-gray-500 flex gap-2 p-2 rounded-lg items-center text-sm hover:bg-gray-100"
    >
      {icon} {label}
    </button>
  );
};

export default FilterCard;
