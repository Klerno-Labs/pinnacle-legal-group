import { ImageSlot, images } from "@/config/images";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  title: string;
  imageKey: ImageSlot;
}

export function TeamCard({ name, title, imageKey }: TeamCardProps) {
  const img = images[imageKey];
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-shadow group">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={img.src} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-serif font-bold text-primary mb-1">{name}</h3>
        <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">{title}</p>
        <button className="mx-auto text-accent hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}