import React from "react";
import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-md font-medium transition focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-700  ",
        secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
        ghost: "text-gray-700 hover:bg-gray-100",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  fullWidth,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
