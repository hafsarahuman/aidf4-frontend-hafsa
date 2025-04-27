import * as React from "react";

export const Input = React.forwardRef(({ type = "text", placeholder, className = "", ...props }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";
