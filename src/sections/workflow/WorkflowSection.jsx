const steps = [
  {
    id: 1,
    title: "Camera Input",
    description: "Webcam captures hand movements",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Hand Detection",
    description: "CV extracts hand landmarks",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "ML Processing",
    description: "Neural network classifies gestures",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Text Output",
    description: "Converts to readable text",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Audio Output",
    description: "Text-to-speech playback",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
        />
      </svg>
    ),
  },
];

function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center px-2 self-center">
      <svg
        className="w-5 h-5 text-white/50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  );
}

function StepCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-5 p-8 rounded-2xl border border-white/10 bg-white/[0.02] min-w-[180px] max-w-[200px]">
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 border border-white/20 rounded-xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white font-heading whitespace-nowrap">
        {title}
      </h3>

      {/* Description */}
      <p className="text-white/50 font-sans text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section className="relative w-screen py-32 bg-brand-background overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-14 px-8 max-w-[1700px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Title */}
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white">
            Bridging the Silence
          </h2>

          {/* Description */}
          <p className="text-white/60 font-sans leading-relaxed">
            See how our system instantly turns Khmer sign language gestures into
            accurate, readable text in real time.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full py-8 gap-10 lg:gap-0">
          {steps.map((step, index) => (
            <>
              <div key={step.id} className="flex items-center gap-3">
                {/* Step Card */}
                <StepCard
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              </div>

              {/* Arrow (except after last item) */}
              {index < steps.length - 1 && <Arrow />}
            </>
          ))}
        </div>

        {/* Documentation Button */}
        <a
          href="/documentation"
          className="inline-flex items-center gap-2.5 px-7 py-3 border border-white/25 rounded-full text-white/85 font-sans text-sm font-semibold hover:border-white hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          Documentations
        </a>
      </div>
    </section>
  );
}
