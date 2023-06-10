import React, { FC, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}
const InputField: FC<InputFieldProps> = ({
  className,
  errorMessage,
  ...props
}) => {
  return (
    <div>
      <input
        {...props}
        className={`px-4 py-3 w-full focus:outline-none border-[1px] ${errorMessage?"border-red-500":"border-gray-300"} rounded-lg ${className}`}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
