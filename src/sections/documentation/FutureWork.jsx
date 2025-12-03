import React from "react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Expand Gesture Vocabulary",
    description:
      "Increase the number of recognizable signs by collecting more gesture samples and retraining the model. Priority will be given to commonly used words and phrases in daily conversation.",
    status: "in-progress",
  },
  {
    phase: "Phase 2",
    title: "Improve Model Accuracy",
    description:
      "Enhance recognition accuracy through better data augmentation, model fine-tuning, and handling of edge cases such as varied lighting and hand sizes.",
    status: "planned",
  },
  {
    phase: "Phase 3",
    title: "Support Dynamic Gestures",
    description:
      "Extend the system to recognize motion-based signs that involve hand movement over time, not just static hand poses.",
    status: "planned",
  },
  {
    phase: "Phase 4",
    title: "Add Two-Hand Gesture Recognition",
    description:
      "Implement support for signs that require both hands, which are common in Khmer sign language for complex expressions.",
    status: "planned",
  },
  {
    phase: "Phase 5",
    title: "Mobile Application Development",
    description:
      "Create a mobile-friendly version or native app to allow users to access the translation system on smartphones and tablets.",
    status: "planned",
  },
  {
    phase: "Phase 6",
    title: "Offline Functionality",
    description:
      "Enable the system to work without an internet connection by bundling the model locally using technologies like TensorFlow Lite or ONNX.",
    status: "research",
  },
  {
    phase: "Phase 7",
    title: "Reverse Translation (Text to Sign)",
    description:
      "Develop a feature that converts text input into animated sign language visuals, enabling two-way communication between hearing and deaf users.",
    status: "research",
  },
  {
    phase: "Phase 8",
    title: "Community Contribution Platform",
    description:
      "Build a platform where users can contribute new gesture samples, suggest corrections, and help expand the dataset collaboratively.",
    status: "research",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "in-progress":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "planned":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "research":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    default:
      return "bg-white/10 text-white/60 border-white/20";
  }
};

/**
 * Future Work Section Component
 */
export const FutureWork = React.memo(() => {
  return (
    <section id="future-work">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Future Work
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        The Khmer Sign Language Translation System is a functional prototype
        that demonstrates real-time gesture recognition, text translation, and
        speech output. However, there are several areas identified for
        improvement and expansion to make the system more comprehensive,
        accurate, and user-friendly. The following are the primary directions
        for future development:
      </p>

      <div className="space-y-4">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white/5 border border-white/10 rounded-xl"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-brand-primary font-semibold uppercase tracking-wider">
                    {item.phase}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status.replace("-", " ")}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm font-sans">
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

FutureWork.displayName = "FutureWork";
