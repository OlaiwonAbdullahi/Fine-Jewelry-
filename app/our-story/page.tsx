"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const LuxuryImage = ({ alt = "Jewelry Image" }: { alt?: string }) => {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden bg-beige-pearl/30">
      <div className="absolute inset-0 bg-neutral-200 transition-transform duration-1000 ease-out group-hover:scale-105">
        <div className="flex h-full w-full items-center justify-center text-gold-muted/20 text-4xl font-serif">
          [Image]
        </div>
      </div>
      <div className="absolute inset-0 border border-white/0 transition-colors duration-700 group-hover:border-white/20" />
    </div>
  );
};

export default function OurStory() {
  return (
    <div className="bg-cream-primary selection:bg-gold-primary/30 selection:text-emerald-primary overflow-x-hidden">
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent opacity-60" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block border-b border-gold-primary/40 pb-2 text-xs font-medium tracking-[0.3em] uppercase text-gold-deep mb-8">
              Est. 2024
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="brillant text-6xl md:text-8xl text-emerald-primary mb-10 leading-[0.9] tracking-tight">
              The Legacy <br /> of{" "}
              <span className="italic font-light">Artistry</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="h-16 w-[1px] bg-gold-primary/30 mx-auto mb-10"></div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="fancy text-lg md:text-2xl text-charcoal-dark/80 leading-relaxed max-w-xl mx-auto font-light">
              Born from a desire to bridge timeless elegance with modern
              craftsmanship, A3 Fine Jewelry represents the pinnacle of
              artisanal excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn>
            <LuxuryImage />
          </FadeIn>

          <div className="space-y-8 md:pl-8">
            <FadeIn delay={0.2}>
              <h2 className="brillant text-4xl md:text-5xl text-emerald-primary">
                Master{" "}
                <span className="italic block text-gold-primary">
                  Craftsmanship
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="fancy text-charcoal-dark leading-loose text-lg font-light">
                Every piece in our collection is a testament to the hands that
                shaped it. We work with third-generation artisans who treat gold
                and gemstones not as materials, but as{" "}
                <span className="italic text-emerald-primary">
                  mediums of art
                </span>
                .
              </p>

              <div className="h-px w-full max-w-[100px] bg-gold-primary/30 my-8"></div>

              <p className="fancy text-charcoal-dark/80 leading-loose">
                From the initial sketch to the final polish, our process is
                unhurried and uncompromising.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative bg-emerald-primary py-32 md:py-40 my-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <FadeIn>
            <blockquote className="brillant text-3xl md:text-6xl text-cream-primary leading-tight max-w-5xl mx-auto">
              "Jewelry is not just an accessory. It is a memory, captured in
              gold and stone."
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.2}>
            <cite className="fancy mt-10 block text-gold-primary tracking-widest text-sm uppercase not-italic">
              — The Founders
            </cite>
          </FadeIn>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 md:py-32 mb-20">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1 space-y-8 md:pr-8">
            <FadeIn>
              <h2 className="brillant text-4xl md:text-5xl text-emerald-primary">
                Ethical{" "}
                <span className="italic block text-gold-primary">Sourcing</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="fancy text-charcoal-dark leading-loose text-lg font-light">
                Beauty without conscience is hollow. We ensure every diamond is
                conflict-free and every gram of gold is responsibly mined.
                Transparency is the bedrock of our trust.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Button
                variant="outline"
                className="group relative overflow-hidden rounded-none border border-gold-primary/50 bg-transparent px-8 py-6 text-emerald-primary transition-all hover:border-gold-primary hover:bg-transparent"
              >
                <span className="relative z-10 fancy tracking-wide transition-colors group-hover:text-white">
                  View Sustainability Report
                </span>
                <span className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-gold-primary transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              </Button>
            </FadeIn>
          </div>

          <div className="order-1 md:order-2">
            <FadeIn delay={0.2}>
              <LuxuryImage />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 border-y border-border/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-[10px] tracking-[0.4em] font-medium text-foreground/40 uppercase mb-8 block">
              Our Heritage
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="brillant text-4xl sm:text-6xl mb-12">
              Crafting Dreams Since 1924
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/70 font-light tracking-[0.05em] mb-12">
              At A3 Fine Jewelry, every piece tells a story of heritage,
              passion, and unparalleled craftsmanship. For over a century, we
              have been the custodians of the world&apos;s most rare gems,
              transforming nature&apos;s wonders into timeless symbols of love
              and legacy.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/about"
              className="inline-block text-[10px] tracking-[0.3em] font-bold uppercase border-b border-black pb-2 hover:opacity-60 transition-opacity"
            >
              Discover Our Story
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
