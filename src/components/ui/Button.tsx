import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#C5A059] text-white hover:bg-[#b08d4b] focus-visible:ring-[#C5A059] shadow-md",
        secondary: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white focus-visible:ring-slate-900",
        ghost: "text-slate-600 hover:text-[#C5A059] hover:bg-transparent underline decoration-2 underline-offset-4",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6",
        lg: "h-14 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };