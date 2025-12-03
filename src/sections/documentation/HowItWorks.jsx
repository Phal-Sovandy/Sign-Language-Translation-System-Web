import React from "react";
import MediaWrapper from "../../components/ui/MediaWrapper";
import handLandMark from "../../assets/images/how-it-work/how-it-work-1.webp";
import cnnArchitecture from "../../assets/images/how-it-work/how-it-work-2.webp";
import realTimeDetection from "../../assets/images/misc/demo.webp";

/**
 * How It Works Section Component
 */
export const HowItWorks = React.memo(() => {
  return (
    <section id="how-it-works">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        How It Works
      </h1>

      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-white/70 font-sans leading-relaxed">
          The Khmer Sign Language Translation System processes user gestures
          through a series of stages that convert visual hand movements into
          readable text and spoken output. The system combines computer vision
          techniques with a trained machine learning model to provide real-time
          translation through a web-based interface.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          First, the user performs Khmer sign language gestures in front of
          their device's camera. The web application continuously captures video
          frames and sends them to the processing system. To ensure reliable
          tracking, the user must keep their hands within the camera view and
          perform gestures clearly.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          Next, the system uses MediaPipe to detect and track the user's hands.
          MediaPipe identifies key hand landmarks such as finger joints and palm
          positions. These landmarks represent the gesture in numeric form,
          allowing the system to understand the shape and movement of the hand
          instead of raw images. This step improves processing speed and reduces
          noise caused by background details.
        </p>

        {/* Image 1 - Hand Landmark Detection */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <MediaWrapper
              src={handLandMark}
              alt="Hand landmark detection using MediaPipe"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            Example of hand landmark detection using MediaPipe.
          </figcaption>
        </figure>

        <p className="text-white/70 font-sans leading-relaxed">
          Once the hand landmarks are detected, the extracted features are
          passed into a deep learning model built with PyTorch. The model has
          been fine-tuned using a dataset of Khmer sign language gestures,
          allowing it to learn patterns specific to local signs. The model
          analyzes the landmarks and predicts the most likely gesture being
          performed.
        </p>

        {/* Image 2 - Gesture Processing */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <MediaWrapper
              src={cnnArchitecture}
              alt="Gesture features being processed by the trained recognition model"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            Gesture features being processed by the trained recognition model.
          </figcaption>
        </figure>

        <p className="text-white/70 font-sans leading-relaxed">
          After prediction, the system converts the recognized sign into text
          and displays it in real time on the interface. This allows the user to
          immediately see translation results as they perform gestures.
        </p>

        {/* Image 3 - Real-time Output */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <MediaWrapper
              src={realTimeDetection}
              alt="Real-time output showing translated text and speech feature"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            Real-time output showing translated text and speech feature.
          </figcaption>
        </figure>

        <p className="text-white/70 font-sans leading-relaxed">
          For improved accessibility, the system also supports speech output.
          The translated text is sent to a text-to-speech engine, which produces
          audio feedback. This enables communication between sign language users
          and people who do not understand sign language.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          Finally, the system stores feedback and testing data (if enabled) to
          help improve performance. Ongoing updates aim to refine accuracy,
          optimize speed, and expand the number of supported gestures.
        </p>
      </div>
    </section>
  );
});

HowItWorks.displayName = "HowItWorks";
