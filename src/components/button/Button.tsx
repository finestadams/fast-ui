import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition focus:ring-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-foreground-primary hover:bg-primary-hover active:bg-primary-active",
        alternative:
          "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-foreground-alternative focus:outline-none bg-alternative rounded-lg border border-alternative hover:bg-alternative/80 focus:z-10 focus:ring-4 focus:ring-alternative",
        ghost: "text-black hover:bg-ghost active:bg-ghost",
        outline:
          "border border-outline text-black hover:bg-outline active:bg-outline",
        link: "text-link hover:text-link-hover active:text-link-active underline",
        danger:
          "bg-danger text-foreground-danger hover:bg-danger-hover active:bg-danger-active",
        dark: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
        gradientMonochrome:
          "text-foreground-primary bg-gradient-to-r from-primary via-primary-hover to-primary-active hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-primary",
        gradientDuotone:
          "text-foreground-primary bg-gradient-to-br from-primary to-link hover:bg-gradient-to-bl focus:ring-primary dark:focus:ring-primary",

        colorShadow:
          "text-foreground-primary bg-gradient-to-r from-primary via-primary-hover to-primary-active hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-primary/50 dark:shadow-lg dark:shadow-primary/80",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
      iconOnly: {
        true: "p-2",
      },
      pill: {
        true: "rounded-full",
        false: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      pill: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  fullWidth,
  iconOnly,
  pill,
  asChild,
  className,
  icon,
  children,
  ...props
}) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        buttonVariants({ variant, size, fullWidth, iconOnly, pill }),
        className
      )}
      {...props}
    >
      {icon && <span className={clsx(children ? "mr-2" : "")}>{icon}</span>}
      {children}
    </Component>
  );
};
