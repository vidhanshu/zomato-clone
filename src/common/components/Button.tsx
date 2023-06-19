import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  variant?: "primary" | "secondary";
}
const Button: FC<ButtonProps> = ({
  className,
  buttonText,
  variant = "primary",
  ...props
}) => {
  if (variant === "primary") {
    return (
      <button
        {...props}
        className={`${props.disabled
            ? "bg-gray-300 cursor-not-allowed"
          : "bg-red-500 hover:bg-red-600"
          } min-w-[100px] px-4 py-3 text-white rounded-lg ${className}`}
      >
        {buttonText ?? "Button"}
      </button>
    );
  }
  return (
    <button
      {...props}
      className={`${props.disabled
          ? "bg-gray-300 cursor-not-allowed"
        : "bg-gray-50 hover:bg-gray-100"
        } min-w-[100px] px-4 py-3 text-black rounded-lg ${className}`}
    >
      {buttonText ?? "Button"}
    </button>
  );
};

export default Button;
