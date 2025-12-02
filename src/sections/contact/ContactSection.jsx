export default function ContactSection() {
  return (
    <section className="relative w-screen py-32 bg-gradient-to-t from-[#006EF5]/[0.2] via-[#7BDEFA]/[0.1] to-[#FFFFFF]/[0] overflow-hidden">
      {/* Bottom glow effect */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-white/5 via-white/[0.02] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-8 max-w-[1700px] mx-auto text-center">
        {/* Title */}
        <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-white/60 font-sans leading-relaxed">
          Have questions or ideas? We're happy to connect.
          <br />
          Send us your feedback or suggestions to help improve our project.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2.5 px-7 py-3 bg-white text-black font-sans text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
          Contact Us
        </a>
      </div>
    </section>
  );
}
