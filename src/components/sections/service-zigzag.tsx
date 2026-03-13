import { ImageSlot, images } from "@/config/images";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceZigZagProps {
  title: string;
  description: string;
  imageKey: ImageSlot;
  reversed?: boolean;
  link: string;
}

export function ServiceZigZag({ title, description, imageKey, reversed, link }: ServiceZigZagProps) {
  const img = images[imageKey];
  return (
    <Container>
      <div className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${reversed ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2">
          <img 
            src={img.src} 
            alt={title}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-3xl font-serif font-bold text-primary">{title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          <Button asChild variant="secondary">
             <Link href={link}>Learn More</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}