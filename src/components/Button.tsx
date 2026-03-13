import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
}

export function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-md";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-[#b08d4b] focus:ring-accent/20",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/20",
    ghost: "bg-transparent text-muted hover:text-accent underline decoration-2 underline-offset-4",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}