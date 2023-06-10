"use client";
import { FC } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "./Button";

export const Modal: FC<{
  title:string;
  children: React.ReactNode;
  onClose: ()=>void;
  onSubmit: ()=>void;
}> = ({ children, title, onClose, onSubmit }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center p-3">
      <div onClick={onClose} className="w-full h-full bg-[rgba(0,0,0,0.3)] absolute top-0 left-0" />

      <div className="bg-white rounded-lg shadow-lg z-10 w-full max-w-lg">
        <div className="border-b-[1px] border-gray-300 py-4 px-3 flex items-center justify-between">
          <h1 className="text-2xl font-medium">{title}</h1>
          <RxCross2 onClick={onClose} className="cursor-pointer" size={32} />
        </div>
        {children}
        <div className="border-t-[1px] border-gray-300 p-3 flex justify-end gap-4">
          <Button variant="primary" buttonText="Clear all" />
          <Button variant="secondary" buttonText="Apply" />
        </div>
      </div>
    </div>
  );
};
