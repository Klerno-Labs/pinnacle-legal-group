import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, href, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-accent font-bold uppercase tracking-wider transition-all duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-accent text-white hover:bg-[#b08d4b] hover:-translate-y-1 shadow-sm hover:shadow-md",
      secondary: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
      ghost: "bg-transparent text-primary hover:bg-slate-100",
    };

    const sizes = {
      sm: "px-6 py-2 text-xs",
      md: "px-8 py-3 text-sm",
      lg: "px-10 py-4 text-base",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={disabled || isLoading} {...props}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };