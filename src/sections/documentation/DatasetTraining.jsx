import React from "react";
import DatasetCollage from "../../components/visuals/DatasetCollage";

/**
 * Dataset & Training Section Component
 */
export const DatasetTraining = React.memo(() => {
  return (
    <section id="dataset-training">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Dataset & Training
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        The performance of the Khmer Sign Language Translation System depends
        largely on the quality and structure of the dataset used during
        training. To adapt the system for Khmer sign language, the model was
        fine-tuned using a dataset that represents common signs and hand
        gestures used in real communication.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Data Description
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            The dataset consists of recorded gesture samples representing over
            120 Khmer sign language signs. Each sign is captured from multiple
            angles and under different lighting conditions to help the model
            generalize across environments. The dataset includes variations in
            hand shape, motion, and position to improve the system's robustness.
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            For each gesture, video frames are processed to extract hand
            landmarks using MediaPipe. Instead of training on raw images alone,
            the system uses landmark coordinates as features, enabling more
            efficient learning and reduced computational requirements.
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            All data was collected, organized, and labeled by the project team.
            Each class (sign) is labeled carefully to ensure consistency during
            training and evaluation. Data cleaning and validation steps were
            performed to remove noisy or incomplete samples.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                100+
              </span>
              <span className="text-white/60 text-sm font-sans">
                Training Samples
              </span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                120+
              </span>
              <span className="text-white/60 text-sm font-sans">
                Gesture Classes
              </span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                6
              </span>
              <span className="text-white/60 text-sm font-sans">
                Contributors
              </span>
            </div>
          </div>

          {/* Dataset Images Collage */}
          <DatasetCollage />
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Model Architecture
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            We utilize a fine-tuned deep learning model based on a pre-trained
            architecture. The model was adapted specifically for Khmer sign
            language recognition through transfer learning techniques.
          </p>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h4 className="font-sans font-semibold text-white mb-3">
              Key Technologies:
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "MediaPipe Hands",
                "PyTorch",
                "Transfer Learning",
                "Data Augmentation",
                "Real-time Inference",
                "Model Optimization",
              ].map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-white/60 text-sm font-sans"
                >
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Training Process
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            The model was trained using a supervised learning approach, where
            each gesture sample was paired with its corresponding label.
            Training was conducted over multiple epochs, with the dataset split
            into training and validation sets to monitor performance and avoid
            overfitting.
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            During training, data augmentation techniques such as rotation,
            scaling, and brightness adjustment were applied to increase dataset
            diversity and improve the model's ability to generalize across
            different users and environments.
          </p>
          <p className="text-white/70 font-sans leading-relaxed">
            Loss functions and accuracy metrics were tracked throughout training
            to ensure the model was learning effectively. The final model was
            selected based on validation accuracy and tested on unseen data to
            confirm reliable performance.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Model Optimization
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            To ensure smooth real-time performance in a web environment, several
            optimization techniques were applied to the trained model. These
            improvements help reduce latency and improve responsiveness during
            gesture recognition.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">Model Quantization:</strong>{" "}
                Reducing the precision of model weights to decrease file size
                and speed up inference without significant loss in accuracy.
              </span>
            </li>
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">
                  Lightweight Architecture:
                </strong>{" "}
                Using a compact neural network structure optimized for real-time
                applications on standard hardware.
              </span>
            </li>
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">Efficient Preprocessing:</strong>{" "}
                Streamlining the landmark extraction process to minimize delay
                between gesture input and model prediction.
              </span>
            </li>
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">Batch Processing:</strong>{" "}
                Handling multiple frames efficiently to maintain consistent
                performance during continuous gesture recognition.
              </span>
            </li>
          </ul>
          <p className="text-white/70 font-sans leading-relaxed">
            These optimizations allow the system to run efficiently in a browser
            without requiring specialized hardware, making it accessible to a
            wider range of users.
          </p>
        </div>
      </div>
    </section>
  );
});

DatasetTraining.displayName = "DatasetTraining";
