import { Link, useLocation } from "react-router-dom";
import { heroCopy } from "../../config";

const Highlight = () => (
  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-white/60">
    <span className="h-2 w-2 rounded-full bg-[#33fff8] shadow-[0_0_10px_rgba(51,255,248,0.9)] animate-pulse-glow"></span>
    <p className="font-heading text-sm">{heroCopy.badge}</p>
  </div>
);

const Title = () => (
  <h1 className="font-heading text-[clamp(4.5rem,8vw,8rem)] font-normal leading-tight text-white">
    <span className="font-bold bg-linear-to-r from-[#0077FF] to-[#FF2D2D] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,119,255,0.55)]">
      {heroCopy.highlight}
    </span>{" "}
    <span className="block text-white">{heroCopy.title[0]}</span>
    <span className="block text-white">{heroCopy.title[1]}</span>
  </h1>
);

const Description = () => (
  <p className="w-50% text-lg text-white/60 font-sans leading-relaxed">
    {heroCopy.description}
  </p>
);

const PrimaryActions = () => {
  const location = useLocation();

  const handleLinkClick = (path) => {
    // If clicking on the same page link, scroll to top
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Link
        to="/demo"
        onClick={() => handleLinkClick("/demo")}
        className="rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_15px_45px_rgba(47,107,255,0.45)] ring-1 ring-[#4d8dff]/40 transition hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(47,107,255,0.7)]"
      >
        {heroCopy.primaryCta} →
      </Link>
      <Link
        to="/about"
        onClick={() => handleLinkClick("/about")}
        className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white/85 transition hover:border-white hover:text-white"
      >
        {heroCopy.secondaryCta} →
      </Link>
    </div>
  );
};

export default function HeroContent() {
  return (
    <div className="space-y-8">
      <Highlight />
      <div className="space-y-5">
        <Title />
        <Description />
      </div>
      <PrimaryActions />
    </div>
  );
}
