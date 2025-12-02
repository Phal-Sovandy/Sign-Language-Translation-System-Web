import { useState } from "react";
import emailjs from "@emailjs/browser";
import { LogoLoop } from "../../components/visuals/LogoLoop";
import { emailjsConfig, validateEmailjsConfig } from "../../config/emailjs";

// Feedback Modal Component
export function FeedbackModal({ isOpen, onClose }) {
  const [sentiment, setSentiment] = useState(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setSubject("");
    setMessage("");
    setSentiment(null);
    setStatus("idle");
    setErrorMessage("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!subject.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a subject.");
      return;
    }
    if (!message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a message.");
      return;
    }
    if (!sentiment) {
      setStatus("error");
      setErrorMessage("Please select a sentiment (thumbs up or down).");
      return;
    }

    // Validate EmailJS configuration
    if (!validateEmailjsConfig(true)) {
      setStatus("error");
      setErrorMessage(
        "Email service is not configured. Please contact support."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Prepare template parameters
      // These variable names should match your EmailJS feedback template variables
      const templateParams = {
        subject: subject,
        message: message,
        sentiment: sentiment === "positive" ? "👍 Positive" : "👎 Negative",
        sentiment_value: sentiment,
      };

      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.feedbackTemplateId,
        templateParams,
        emailjsConfig.publicKey
      );

      // Success
      setStatus("success");
      // Reset form after a short delay to show success state
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (err) {
      // Error handling
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage(
        err.message || "Failed to send feedback. Please try again."
      );
    }
  };

  if (!isOpen) return null;

  // Success State
  if (status === "success") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        />
        <div className="relative w-full max-w-xl bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col items-center gap-4 py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-500"
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
            </div>
            <h3 className="font-heading text-2xl font-semibold text-white">
              Thank You!
            </h3>
            <p className="text-white/60 font-sans max-w-sm">
              Your feedback has been sent successfully. We appreciate your input
              and will use it to improve our system.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-7 py-3 bg-white text-black font-sans text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <h3 className="font-heading text-2xl font-semibold text-white mb-2">
          Send Us Your Feedback
        </h3>

        {/* Subtitle */}
        <p className="text-white/60 font-sans mb-6">
          Share your feedback to help us improve accuracy and features.
        </p>

        {/* Error Message */}
        {status === "error" && errorMessage && (
          <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
            <svg
              className="w-5 h-5 text-red-500 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <p className="text-red-400 font-sans text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Subject with Sentiment */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="flex-1 px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white font-sans text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
            />
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSentiment("positive")}
                className={`p-2 rounded-lg transition-colors ${
                  sentiment === "positive"
                    ? "bg-white/20 text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
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
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setSentiment("negative")}
                className={`p-2 rounded-lg transition-colors ${
                  sentiment === "negative"
                    ? "bg-white/20 text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
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
                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white font-sans text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-fit px-7 py-3 bg-white text-black font-sans text-sm font-semibold rounded-full hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {status === "loading" ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send Feedback"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

// Khmer sign language words for the scrolling pills
const khmerWordsRow1 = [
  { node: <Pill>ស្រឡាញ់</Pill> },
  { node: <Pill>ជម្រាបសួរ</Pill> },
  { node: <Pill>អរគុណ</Pill> },
  { node: <Pill>សូមទោស</Pill> },
  { node: <Pill>ម្សិលមិញ</Pill> },
  { node: <Pill>ដឹង</Pill> },
  { node: <Pill>ដែក</Pill> },
  { node: <Pill>មនុស្សគថ្លង់</Pill> },
  { node: <Pill>សូមអរគុណ</Pill> },
  { node: <Pill>ឡាន</Pill> },
];

const khmerWordsRow2 = [
  { node: <Pill>សត្វក្របី</Pill> },
  { node: <Pill>ឆ្នាំ</Pill> },
  { node: <Pill>ក</Pill> },
  { node: <Pill>២</Pill> },
  { node: <Pill>ប្រណាំងប្រដែង</Pill> },
  { node: <Pill>អណ្ដើក</Pill> },
  { node: <Pill>មិនយល់ព្រម</Pill> },
  { node: <Pill>ខ្ញុំស្រឡាញ់អ្នក</Pill> },
  { node: <Pill>មេត្តា</Pill> },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-dashed border-white/30 bg-white/5 text-white font-khmer text-base whitespace-nowrap">
      {children}
    </span>
  );
}

export default function FeedbackSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-screen py-32 bg-brand-background overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-12 max-w-[1700px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center px-8">
            {/* Title */}
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white">
              Help Us Grow
            </h2>

            {/* Description */}
            <p className="text-white/60 font-sans leading-relaxed">
              Share your feedback to help us improve accuracy and features.
            </p>
          </div>

          {/* Scrolling Pills */}
          <div className="w-full flex flex-col gap-4">
            {/* Row 1 - scrolling left */}
            <LogoLoop
              logos={khmerWordsRow1}
              speed={60}
              direction="left"
              gap={16}
              logoHeight={44}
              pauseOnHover={false}
              fadeOut={true}
              fadeOutColor="#0C0C0C"
            />

            {/* Row 2 - scrolling right */}
            <LogoLoop
              logos={khmerWordsRow2}
              speed={50}
              direction="right"
              gap={16}
              logoHeight={44}
              pauseOnHover={false}
              fadeOut={true}
              fadeOutColor="#0C0C0C"
            />
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 px-7 py-3 bg-white text-black font-sans text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
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
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
            Share your idea
          </button>
        </div>
      </section>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
