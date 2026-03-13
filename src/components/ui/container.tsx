import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full max-w-[1300px] mx-auto px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}