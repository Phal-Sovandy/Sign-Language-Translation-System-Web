import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import { heroStats } from "../../config";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid w-full flex-1 items-center gap-8 py-12 lg:min-h-[calc(100vh-140px)] lg:grid-cols-[1.2fr_1fr] lg:gap-0 lg:py-20"
    >
      <div className="max-w-70%">
        <HeroContent />
      </div>
      <HeroVisual stats={heroStats} />
    </section>
  );
}
