import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className="group bg-white p-8 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 border-t-4 border-transparent hover:border-accent"
    >
      <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-serif text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <span className="inline-flex items-center text-sm font-bold text-accent group-hover:underline">
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </span>
    </Link>
  );
}