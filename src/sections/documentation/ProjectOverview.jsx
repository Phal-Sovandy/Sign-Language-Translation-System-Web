import React from "react";

/**
 * Project Overview Section Component
 */
export const ProjectOverview = React.memo(() => {
  return (
    <section id="project-overview">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Project Overview
      </h1>

      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="p-8 flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400/20 to-orange-600/20 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-orange-400/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15"
                />
              </svg>
            </div>
            <p className="text-white/40 text-sm">Hand Landmark Detection</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-white/70 font-sans leading-relaxed">
          The Khmer Sign Language Translation System is a web-based application
          developed as a Capstone Project for Year 3 students in the Data
          Science specialization and Computer Science department. The purpose of
          this system is to assist communication by translating Khmer sign
          language gestures into readable text and spoken output through a
          simple web interface.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          This project uses computer vision and machine learning techniques to
          recognize hand gestures in real time. When a user performs a sign in
          front of a camera, the system detects hand movements using MediaPipe
          and processes the gesture through a trained deep learning model built
          with PyTorch. The predicted result is then displayed as text and can
          be converted into speech to make communication easier with non-sign
          language users.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          Instead of building the model from scratch, this project fine-tunes a
          pre-trained model with a Khmer sign language dataset prepared by the
          team. This approach allows the system to better recognize local
          gestures while reducing development time. The team focuses on data
          processing, model optimization, and system integration to improve
          performance and usability.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          As this project is still under active development, the system may not
          always produce perfect translations. Accuracy and coverage are
          continuously being improved, and more gestures will be added in future
          updates. The current version demonstrates a functional prototype that
          shows how artificial intelligence can support accessibility and
          learning.
        </p>
      </div>
    </section>
  );
});

ProjectOverview.displayName = "ProjectOverview";
