"use client";

import React from "react";

const SelectField: React.FC<{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
}> = ({ options, setValue, value, className }) => {
  return (
    <select
      className={`cursor-pointer p-2 border-[1px] focus:outline-none rounded-md focus:outline-[2px] outline-red-500 ${className}`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map(({ value, label }, _) => (
        <option key={_} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
