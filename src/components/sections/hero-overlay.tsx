import { images } from "@/config/images";
import { Container } from "@/components/ui/container";

interface HeroOverlayProps {
  title: string;
  subtitle?: string;
}

export function HeroOverlay({ title, subtitle }: HeroOverlayProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src={images["hero-alt"].src} 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <Container className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-slate-200 font-light">{subtitle}</p>}
      </Container>
    </section>
  );
}