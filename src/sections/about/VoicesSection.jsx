import { useState } from "react";
import { FeedbackModal } from "../feedback/FeedbackSection";

const testimonials = [
  {
    quote:
      "The translation works smoothly and the interface is easy to use. I'm excited to see it improve.",
  },
  {
    quote:
      "This tool has helped me communicate better with my deaf colleagues. A wonderful initiative!",
  },
  {
    quote:
      "As a sign language learner, this system has been incredibly helpful for practice and understanding.",
  },
];

export default function VoicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white leading-tight mb-4">
            Voices from Our Users
          </h2>
          <p className="text-white/60 font-sans leading-relaxed">
            Early impressions from users trying our Khmer sign language
            translator.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Decorative quote marks */}
          <div className="absolute -left-30 -top-10 text-white hidden lg:block drop-shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                fill="currentColor"
                d="m21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7 7 0 0 0-.063-.539m-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a8 8 0 0 0-.064-.537"
              />
            </svg>
          </div>
          <div className="absolute -right-30 -bottom-10 text-white hidden lg:block drop-shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7 7 0 0 0-.063-.539m-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a8 8 0 0 0-.064-.537"
              />
            </svg>
          </div>

          {/* Decorative shapes */}
          {/* Person icon - top left */}
          <div className="absolute left-30 top-0 -translate-x-full -translate-y-1/2 text-white/75 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
              />
            </svg>
          </div>

          {/* Camera icon - bottom right */}
          <div className="absolute right-20 bottom-0 translate-x-1/2 translate-y-1/2 text-white/65 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.598 4.487c.267-1.31 1.433-2.237 2.768-2.237h3.268c1.335 0 2.5.927 2.768 2.237a.656.656 0 0 0 .62.524h.033c1.403.062 2.481.234 3.381.825c.567.372 1.055.85 1.435 1.409c.473.694.681 1.492.781 2.456c.098.943.098 2.124.098 3.62v.085c0 1.496 0 2.678-.098 3.62c-.1.964-.308 1.762-.781 2.457a5.2 5.2 0 0 1-1.435 1.409c-.703.461-1.51.665-2.488.762c-.958.096-2.159.096-3.685.096H9.737c-1.526 0-2.727 0-3.685-.096c-.978-.097-1.785-.3-2.488-.762a5.2 5.2 0 0 1-1.435-1.41c-.473-.694-.681-1.492-.781-2.456c-.098-.942-.098-2.124-.098-3.62v-.085c0-1.496 0-2.677.098-3.62c.1-.964.308-1.762.781-2.456a5.2 5.2 0 0 1 1.435-1.41c.9-.59 1.978-.762 3.381-.823l.017-.001h.016a.656.656 0 0 0 .62-.524m2.768-.737c-.64 0-1.177.443-1.298 1.036c-.195.96-1.047 1.716-2.072 1.725c-1.348.06-2.07.225-2.61.579a3.7 3.7 0 0 0-1.017.999c-.276.405-.442.924-.53 1.767c-.088.856-.089 1.96-.089 3.508s0 2.651.09 3.507c.087.843.253 1.362.53 1.768c.268.394.613.734 1.017.999c.417.273.951.438 1.814.524c.874.087 2 .088 3.577.088h4.444c1.576 0 2.702 0 3.577-.088c.863-.086 1.397-.25 1.814-.524c.404-.265.75-.605 1.018-1c.276-.405.442-.924.53-1.767c.088-.856.089-1.96.089-3.507s0-2.652-.09-3.508c-.087-.843-.253-1.362-.53-1.767a3.7 3.7 0 0 0-1.017-1c-.538-.353-1.26-.518-2.61-.578c-1.024-.01-1.876-.764-2.071-1.725a1.314 1.314 0 0 0-1.298-1.036zm1.634 7a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 13a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m9-3a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Sparkle icon - top right */}
          <div className="absolute right-70 top-0 translate-x-1/3 -translate-y-1/3 text-white/85 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                />
              </g>
            </svg>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors hidden lg:flex"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors hidden lg:flex"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Quote card */}
          <div
            key={currentIndex}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-16 w-full max-w-[900px] mx-auto animate-fade-in-up"
            style={{
              animation: "fadeInUp 0.4s ease-out forwards",
            }}
          >
            <p className="font-sans font-semibold text-xl lg:text-2xl text-white leading-relaxed text-center">
              {testimonials[currentIndex].quote}
            </p>
          </div>
          <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>

          {/* Mobile navigation dots */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-white/60 font-sans mb-4">
            Share your feedback to help us improve accuracy and features.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 rounded-full text-white font-sans text-sm hover:bg-white/5 transition-colors"
          >
            <svg
              className="w-4 h-4"
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
      </div>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
