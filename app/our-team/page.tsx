"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TEAM = [
  {
    name: "Elena Vourdalak",
    role: "Maison Founder",
    bio: "Visionary leadership rooted in 20 years of Parisian haute couture.",
  },
  {
    name: "Arthur Pendelton",
    role: "Master Gemologist",
    bio: "A GIA-certified expert with an eye for the world's rarest stones.",
  },
  {
    name: "Sienna Kross",
    role: "Creative Director",
    bio: "Blending architectural precision with organic, flowing forms.",
  },
  {
    name: "Julian Baros",
    role: "Head Artisan",
    bio: "Third-generation goldsmith overseeing our dedicated atelier.",
  },
];

const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const MemberCard = ({
  member,
  index,
}: {
  member: (typeof TEAM)[0];
  index: number;
}) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-beige-pearl/40">
        <div className="absolute inset-0 bg-neutral-200 transition-all duration-1000 ease-out group-hover:scale-105">
          <div className="flex h-full w-full items-center justify-center text-gold-muted/20 text-4xl font-serif">
            [Portrait]
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="mt-6 space-y-2 border-l border-gold-primary/0 pl-0 transition-all duration-500 group-hover:border-gold-primary/50 group-hover:pl-4">
        <h3 className="brillant text-3xl text-emerald-primary transition-colors group-hover:text-gold-deep">
          {member.name}
        </h3>
        <p className="fancy text-xs font-bold tracking-[0.2em] uppercase text-charcoal-dark/60">
          {member.role}
        </p>
        <div className="h-0 overflow-hidden opacity-0 transition-all duration-700 ease-out group-hover:h-16 group-hover:opacity-100 group-hover:delay-100">
          <p className="pt-2 text-sm leading-relaxed text-charcoal-dark/80 font-light max-w-xs">
            {member.bio}
          </p>
        </div>
      </div>
      <div className="absolute top-4 right-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-primary text-emerald-primary shadow-sm hover:bg-emerald-primary hover:text-cream-primary">
          <ArrowUpRight size={18} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default function OurTeam() {
  return (
    <section className="bg-cream-primary py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col items-center text-center">
          <FadeIn>
            <span className="mb-6 block text-xs font-medium tracking-[0.3em] uppercase text-gold-deep">
              The Collective
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="brillant text-5xl md:text-7xl text-emerald-primary">
              The Minds{" "}
              <span className="italic font-light text-gold-muted">Behind</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-center text-lg font-light leading-relaxed text-charcoal-dark/80">
              United by a shared obsession for detail, our team comprises
              world-class gemologists, designers, and artisans dedicated to the
              exceptional.
            </p>
          </FadeIn>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, idx) => (
            <FadeIn key={idx} delay={0.2 + idx * 0.1}>
              <MemberCard member={member} index={idx} />
            </FadeIn>
          ))}
        </div>
        <div className="mt-32 border-t border-gold-primary/20 pt-16 text-center">
          <FadeIn delay={0.4}>
            <h4 className="brillant text-3xl text-emerald-primary mb-6">
              Join the Atelier
            </h4>
            <p className="fancy text-charcoal-dark/70 mb-8">
              We are always looking for exceptional talent to join our Paris &
              New York studios.
            </p>
            <a
              href="#"
              className="inline-block border-b border-gold-primary pb-1 text-sm uppercase tracking-widest text-gold-deep transition-colors hover:text-emerald-primary"
            >
              View Career Opportunities
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
