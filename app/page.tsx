export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-amber-50 brillant">
      <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          <div className="mb-8 inline-block">
            <span className="inline-block rounded-none uppercase border border-emerald-200 px-4 py-2 text-sm font-light text-emerald-800">
              Heritage Meets Elegance
            </span>
          </div>
          <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
            <span className="text-slate-900">A3 Fine </span>
            <span className="bg-linear-to-r from-[#1a3d32] to-[#c9a961] bg-clip-text text-transparent font-medium">
              Jewelry
            </span>
          </h1>

          <p className="mb-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-extralight">
            Where heritage meets contemporary elegance. The pinnacle of luxury
            craftsmanship, defined by sophistication, timelessness, and
            exclusivity.
          </p>

          <div className="mb-12 flex justify-center gap-1">
            <div className="h-1 w-12 bg-[#1a3d32]"></div>
            <div className="h-1 w-12 bg-[#c9a961]"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#collections"
              className="px-8 py-3 bg-[#1a3d32] text-white font-light rounded-none hover:bg-emerald-700 transition-colors"
            >
              Coming Soon:)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
