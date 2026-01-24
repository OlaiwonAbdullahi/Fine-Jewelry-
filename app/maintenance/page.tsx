export default function Maintenance() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] bg-emerald-dark text-cream-primary px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 text-center space-y-8">
        <div className="w-16 h-16 border border-gold-primary rotate-45 mx-auto mb-8 flex items-center justify-center">
          <div className="w-12 h-12 bg-gold-primary/20"></div>
        </div>

        <h1 className="brillant text-5xl md:text-6xl text-gold-champagne">
          Polishing Our Gems
        </h1>

        <p className="fancy text-lg md:text-xl text-beige-pearl max-w-lg mx-auto leading-relaxed">
          We are currently enhancing the A3 experience. We will be back shortly
          with renewed brilliance.
        </p>

        <div className="pt-8">
          <p className="fancy text-sm text-gold-muted uppercase tracking-widest">
            Expected Return: 2 Hours
          </p>
        </div>
      </div>
    </div>
  );
}
