export default function ImpactStatement() {
  return (
    <section className="py-24">
      <div className="max-w-[1700px] mx-auto px-8">
        <div className="flex items-center justify-center gap-14 ml-5">
          {/* White bar with gradient fade */}
          <div className="hidden lg:flex items-stretch flex-shrink-0">
            <div
              className="w-44 h-75"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.1))",
              }}
            />
            <div className="w-1.5 h-75 bg-white rounded-r-full" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white leading-tight mb-6">
              In a world full of noise, understanding is the loudest voice.
            </h2>
            <p className="text-white/60 font-sans text-lg">
              Over <span className="text-white font-semibold">70+ million</span>{" "}
              people worldwide rely on sign language as their primary means of
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

