import Link from "next/link";

const Hero = () => {
  return (
    <div>
      {" "}
      <section className="relative h-[90vh] bg-[url('/hero.png')] bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="inline-block text-[10px] sm:text-[12px] tracking-[0.5em] uppercase mb-6 font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
            A New Era of Sophistication
          </span>
          <h1 className="brillant text-5xl sm:text-7xl lg:text-9xl mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Timeless Elegance
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Link
              href="/collections"
              className="px-10 py-3.5 bg-white text-black text-[10px] tracking-[0.2em] font-bold uppercase transition-all duration-300 hover:bg-white/90 hover:px-12"
            >
              Discover the Collections
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
