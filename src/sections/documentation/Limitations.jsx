import React from "react";

const limitations = [
  {
    title: "Limited Vocabulary",
    description:
      "The system currently recognizes approximately 120 Khmer sign language gestures. Many signs, especially regional variations or less common expressions, are not yet included.",
  },
  {
    title: "Lighting Sensitivity",
    description:
      "Hand detection relies on visual input and works best in well-lit environments. Low light, backlighting, or harsh shadows can reduce detection accuracy.",
  },
  {
    title: "Background Requirements",
    description:
      "Complex or cluttered backgrounds may confuse the hand tracking model. A plain, contrasting background improves recognition reliability.",
  },
  {
    title: "Single User Detection",
    description:
      "The system is designed to detect one user at a time. Multiple hands from different people in the frame may cause confusion or incorrect predictions.",
  },
  {
    title: "Static Gesture Focus",
    description:
      "The model primarily recognizes static hand poses. Dynamic gestures involving motion or transitions between signs may not be fully captured.",
  },
  {
    title: "Browser Compatibility",
    description:
      "The web application works best on modern browsers like Chrome, Edge, or Firefox. Older browsers or mobile devices may experience reduced performance.",
  },
  {
    title: "No Offline Support",
    description:
      "The system requires an internet connection to load the model and dependencies. Offline functionality is not currently available.",
  },
  {
    title: "Speech Output Limitations",
    description:
      "Text-to-speech output depends on browser support and available voices. Khmer language voice quality may vary across different devices and browsers.",
  },
];

/**
 * Limitations Section Component
 */
export const Limitations = React.memo(() => {
  return (
    <section id="limitations">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Limitations
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        As a Capstone student project, the Khmer Sign Language Translation
        System demonstrates the core concept of translating gestures into text
        and speech, but it has several limitations that users and developers
        should be aware of. Understanding these limitations helps set realistic
        expectations and guides future improvements.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {limitations.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white/5 border border-white/10 rounded-xl"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Limitations.displayName = "Limitations";
