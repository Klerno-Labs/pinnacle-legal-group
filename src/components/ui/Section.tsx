import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "navy" | "grey";
  container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", container = true, children, ...props }, ref) => {
    const variants = {
      default: "bg-surface",
      navy: "bg-primary text-white",
      grey: "bg-slate-50",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "py-16 md:py-24 lg:py-32 w-full",
          variants[variant],
          className
        )}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4">{children}</div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };