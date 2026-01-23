import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurStory() {
  return (
    <PageLayout>
      <section className="bg-cream-primary py-20 md:py-32 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <span className="fancy text-gold-deep tracking-widest uppercase text-sm mb-4 block">
            Est. 2024
          </span>
          <h1 className="brillant text-5xl md:text-7xl text-emerald-primary mb-8">
            The Legacy of A3
          </h1>
          <p className="fancy text-lg md:text-xl text-charcoal-dark leading-relaxed max-w-2xl mx-auto">
            Born from a desire to bridge timeless elegance with modern
            craftsmanship, A3 Fine Jewelry represents the pinnacle of artisanal
            excellence.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] bg-beige-pearl overflow-hidden rounded-sm">
            <div className="absolute inset-0 flex items-center justify-center text-gold-muted/30 text-6xl brillant">
              Image
            </div>
          </div>
          <div className="space-y-6 md:pl-12">
            <h2 className="brillant text-4xl text-emerald-primary">
              Master Craftsmanship
            </h2>
            <p className="fancy text-charcoal-dark leading-loose">
              Every piece in our collection is a testament to the hands that
              shaped it. We work with third-generation artisans who treat gold
              and gemstones not as materials, but as mediums of art.
            </p>
            <div className="h-px w-24 bg-gold-primary/50 my-6"></div>
            <p className="fancy text-charcoal-dark leading-loose">
              From the initial sketch to the final polish, our process is
              unhurried and uncompromising.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-primary text-cream-primary py-24 my-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="brillant text-3xl md:text-5xl leading-tight max-w-4xl mx-auto">
            "Jewelry is not just an accessory. It is a memory, captured in gold
            and stone, designed to outlive us all."
          </blockquote>
          <cite className="fancy mt-8 block text-gold-primary not-italic">
            — The Founders
          </cite>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 md:pr-12">
            <h2 className="brillant text-4xl text-emerald-primary">
              Ethical Sourcing
            </h2>
            <p className="fancy text-charcoal-dark leading-loose">
              Beauty without conscience is hollow. We ensure every diamond is
              conflict-free and every gram of gold is responsibly mined.
              Transparency is the bedrock of our trust.
            </p>
            <Button
              variant="outline"
              className="border-gold-primary text-emerald-primary hover:bg-gold-primary hover:text-white mt-4 fancy"
            >
              View Sustainability Report
            </Button>
          </div>
          <div className="order-1 md:order-2 relative aspect-[3/4] bg-beige-pearl overflow-hidden rounded-sm">
            <div className="absolute inset-0 flex items-center justify-center text-gold-muted/30 text-6xl brillant">
              Image
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
