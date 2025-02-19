import React from "react";
import clsx from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <div
        className={clsx(
          "flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
      >
        {icon && <span className="mr-2 text-gray-500">{icon}</span>}
        <input className="w-full outline-none bg-transparent" {...props} />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
