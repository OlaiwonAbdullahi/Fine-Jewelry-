import Link from "next/link";

const About = () => {
  return (
    <div>
      <section className="py-24 bg-neutral-50 border-y border-border/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] tracking-[0.4em] font-medium text-foreground/40 uppercase mb-8 block">
            Our Heritage
          </span>
          <h2 className="brillant text-4xl sm:text-6xl mb-12">
            Crafting Dreams Since 1924
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-foreground/70 font-light tracking-[0.05em] mb-12">
            At A3 Fine Jewelry, every piece tells a story of heritage, passion,
            and unparalleled craftsmanship. For over a century, we have been the
            custodians of the world&apos;s most rare gems, transforming
            nature&apos;s wonders into timeless symbols of love and legacy.
          </p>
          <Link
            href="/about"
            className="inline-block text-[10px] tracking-[0.3em] font-bold uppercase border-b border-black pb-2 hover:opacity-60 transition-opacity"
          >
            Discover Our Story
          </Link>
        </div>
      </section>

      {/* Gift Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-neutral-100" />
        <div className="relative z-10 max-w-2xl">
          <span className="text-[10px] tracking-[0.4em] text-foreground/40 uppercase mb-6 block">
            Art of Gifting
          </span>
          <h2 className="brillant text-4xl sm:text-5xl mb-8 italic">
            The Perfect Gift
          </h2>
          <p className="text-xs tracking-widest text-foreground/60 leading-loose mb-10 uppercase">
            Wrapped in our signature box, your gift becomes an unforgettable
            moment of joy.
          </p>
          <div className="flex gap-8 justify-center">
            <Link
              href="/gifts"
              className="text-[10px] tracking-[0.3em] font-bold uppercase border-b border-black pb-1"
            >
              For Her
            </Link>
            <Link
              href="/gifts"
              className="text-[10px] tracking-[0.3em] font-bold uppercase border-b border-black pb-1"
            >
              For Him
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
