import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
          Vantum ERP
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          The modular distribution ERP built for modern enterprises. Powered by
          a manifest-driven architecture and vertical slices.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 rounded-full text-base"
          >
            <Link href="#waitlist">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-12 px-8 rounded-full text-base hover:bg-transparent hover:text-primary"
          >
            <Link href="https://github.com/vantumerp" className="group">
              View on GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
