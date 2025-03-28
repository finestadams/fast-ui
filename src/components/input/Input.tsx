import React from "react";
import clsx from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
  inputSize?: "sm" | "md" | "lg";
}

export const Input: React.FC<InputProps> = ({
  error,
  icon,
  inputSize = "md",
  className,
  type = "text", // Default type is "text"
  ...props
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <div
        className={clsx(
          "flex items-center border rounded-md border-gray-500 transition focus-within:ring-2",
          {
            "px-2 py-1 text-xs": inputSize === "sm",
            "px-3 py-2 text-sm": inputSize === "md",
            "px-4 py-3 text-base": inputSize === "lg",
          },
          {
            "focus-within:ring-primary": !error,
            "border-red-500 focus-within:ring-red-500": error,
          },
          className
        )}
      >
        {icon && <span className="mr-2  ">{icon}</span>}
        <input
          // Pass the type prop to the input element
          className={clsx(
            "w-full outline-none bg-transparent",
            error ? "text-red-500" : "text-black"
          )}
          aria-invalid={!!error}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
