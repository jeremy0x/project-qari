import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Default: Urbanist pill button style
  "inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-qari-primary font-semibold px-7 py-2 text-base transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed font-urbanist cursor-pointer group",
  {
    variants: {
      variant: {
        default: "",
        glass:
          "bg-white/60 border border-qari-primary rounded-xl shadow-xl backdrop-blur-xl text-qari-primary hover:bg-qari-secondary/80 hover:shadow-2xl hover:border-qari-secondary/40 active:scale-95 transition-all duration-200",
      },
      size: {
        default: "h-11 text-base",
        sm: "h-9 text-sm px-4 py-1.5",
        lg: "h-14 text-lg px-8 py-3",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      variant,
      asChild = false,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      >
        <span className="flex items-center justify-center">
          <span>{children}</span>
          {rightIcon && variant === "glass" ? (
            <span className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-black transition-transform duration-200 group-hover:translate-x-1">
              {React.cloneElement(rightIcon as React.ReactElement, {
                className: "text-white w-4 h-4",
              })}
            </span>
          ) : rightIcon ? (
            <span className="ml-2 flex items-center">{rightIcon}</span>
          ) : null}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
