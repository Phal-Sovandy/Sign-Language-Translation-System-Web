import heroHand from "../../assets/images/misc/hero-hand.png";

const DataPill = ({ label, confidence }) => (
  <div className="text-sm font-mono text-white/80 animate-pulse-glow">
    <span>{label}</span>
    <span className="pl-2 text-cyan-300">{confidence}</span>
  </div>
);

// Each frame defines its inset, rotation, and opacity so that
// the squares fan out like in the reference image.
const frames = [
  { inset: 0, rotate: -28, opacity: 0.2 },
  { inset: 4, rotate: -20, opacity: 0.3 },
  { inset: 8, rotate: -12, opacity: 0.4 },
  { inset: 12, rotate: -4, opacity: 0.5 },
  { inset: 16, rotate: 4, opacity: 0.6 },
  { inset: 20, rotate: 12, opacity: 0.75 },
  { inset: 24, rotate: 20, opacity: 1 },
];

export default function HeroVisual({ stats = [] }) {
  return (
    <div className="relative flex items-center justify-center lg:justify-end lg:pr-0 lg:translate-x-[8vw] mr-5 lg:mr-0">
      <div className="relative w-full lg:w-[33vw]">
        <img
          src={heroHand}
          alt="Hand gesture visualization"
          className="absolute right-[-6vw] top-1/2 z-0 h-auto w-[180vw] drop-shadow-[0_25px_45px_rgba(255,0,0,0.7)] lg:right-[-1vw] lg:w-[250%]"
          style={{
            transform: "translate(2%, -35%) rotate(9deg)",
            filter: "drop-shadow(0 45px 100px rgba(127,129,255,0.3))",
          }}
        />
        <div className="relative aspect-square rounded-none p-8 lg:p-12 lg:-translate-x-[7vw]">
          {frames.map((frame, index) => {
            const stat = stats[index % stats.length];

            return (
              <div
                key={frame.inset}
                className="pointer-events-none absolute inset-0"
                style={{
                  inset: frame.inset,
                  border: `1px solid rgba(255,255,255,${frame.opacity})`,
                  transform: `rotate(${frame.rotate}deg)`,
                }}
              >
                {stat && (
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      transform: `translate(-8px, -25px)`,
                    }}
                  >
                    <DataPill {...stat} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
