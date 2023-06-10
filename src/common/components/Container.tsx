import React from "react";

interface ContainerProps<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
  className?: string;
}

function Container<T extends React.ElementType = "button">({
  as,
  children,
  className,
}: ContainerProps<T>) {
  const Component = as || "section";
  return (
    <Component
      className={`px-3 xl:px-0 max-w-screen-xl m-auto py-10 ${className}`}
    >
      {children}
    </Component>
  );
}
export default Container;
