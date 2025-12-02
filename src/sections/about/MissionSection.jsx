export default function MissionSection() {
  return (
    <section className="py-24">
      <div className="max-w-[1700px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <div>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white leading-tight mb-6">
              Our Mission
            </h2>
            <p className="text-white/60 font-sans text-lg leading-relaxed">
              We believe that communication is a fundamental right. Our mission
              is to bridge the gap between the deaf and hearing communities in
              Cambodia by providing accessible, accurate, and real-time sign
              language translation technology.
            </p>
          </div>

          {/* Right - Vision */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-white/60 font-sans leading-relaxed mb-6">
              A world where language barriers no longer prevent meaningful
              connections. We envision a future where technology empowers every
              individual to express themselves freely and be understood.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Accessibility", "Inclusivity", "Innovation", "Impact"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-brand-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

