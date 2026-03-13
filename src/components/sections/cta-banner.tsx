import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export function CtaBanner({ title = "Ready to Discuss Your Legal Needs?", subtitle = "Schedule a confidential consultation with our experienced team today." }: CtaBannerProps) {
  return (
    <section className="py-24 bg-primary">
      <Container className="text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <Link href="/contact">Contact Us Now</Link>
        </Button>
      </Container>
    </section>
  );
}