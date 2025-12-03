import React from "react";
import MediaWrapper from "../../../components/ui/MediaWrapper";

/**
 * DemoImage Component
 * Displays a demo image with detection frames and text popup
 */
const DemoImage = React.memo(({ cursorImg, namasteImg }) => {
  return (
    <div className="relative scale-90 lg:scale-110">
      {/* Outer tilted detection frames */}
      <div className="absolute -inset-4 border border-white/30 -rotate-3 pointer-events-none" />
      <div className="absolute -inset-10 border border-white/15 -rotate-6 pointer-events-none" />
      <div className="absolute -inset-16 border border-white/8 -rotate-9 pointer-events-none" />

      {/* Main image container */}
      <div className="relative p-1">
        <MediaWrapper
          src={namasteImg}
          alt="Sign language detection"
          className="h-96 w-auto object-contain"
        />

        {/* Detection label */}
        <div className="absolute top-[-40px] left-[-20px] px-2 py-1 text-base font-bold text-white tracking-wide font-khmer">
          ជម្រាបសួរ: 99.68%
        </div>
      </div>

      {/* Detected Text popup */}
      <div className="absolute -top-6 right-[-20px] lg:right-[-100px] translate-x-8 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl px-6 py-4 shadow-2xl min-w-[220px]">
        <p className="text-xs text-white/70 mb-1.5 tracking-wide">
          Detected Text
        </p>
        <p className="text-base text-white font-medium font-khmer">
          ខ្ញុំចង់រៀនភាសាជនពិការគថ្លង់
        </p>
        {/* Cursor */}
        <MediaWrapper
          src={cursorImg}
          alt=""
          className="absolute -right-6 bottom-0 h-14 z-10 w-auto drop-shadow-md"
        />
        {/* Copied badge */}
        <div className="absolute right-3 -top-3 bg-[#2a2a2a] text-white text-[10px] px-2.5 py-1 rounded flex items-center gap-1 shadow-lg">
          <svg
            className="w-2.5 h-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Copied
        </div>
      </div>

      {/* Play button for speech */}
      <button className="absolute -bottom-3 -right-3 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/30 hover:bg-white/20 rounded-full shadow-xl transition-all hover:scale-110 z-20">
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
});

DemoImage.displayName = "DemoImage";

export default DemoImage;
