import { useState } from "react";

const faqs = [
  {
    question: "What is this system used for?",
    answer:
      "Our project translates Khmer sign language gestures into readable text and can also convert that text into speech.",
  },
  {
    question: "Is this system available offline?",
    answer:
      "Currently, the system requires an internet connection for real-time processing and translation. We're working on offline capabilities for future releases.",
  },
  {
    question: "How many signs are supported?",
    answer:
      "We currently support over 120 Khmer sign language gestures, with more being added regularly as we continue to expand our dataset.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No installation required! The system runs entirely in your web browser. Just make sure you have a modern browser and webcam access.",
  },
  {
    question: "What devices are supported?",
    answer:
      "The system works on any device with a modern web browser and camera, including desktops, laptops, and tablets. Mobile support is coming soon.",
  },
  {
    question: "Is this a finished product?",
    answer:
      "This is currently a research project and prototype. We're continuously improving accuracy and adding new features based on user feedback.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-sans text-base pr-8">{question}</span>
        <svg
          className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-white/60 font-sans leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-screen py-32 bg-brand-background overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row item-start gap-10 lg:gap-10 px-8 max-w-[1700px] mx-auto">
        {/* Left Side - Title */}
        <div className="flex flex-col gap-4 lg:w-[50%] lg:self-start">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white leading-tight">
            Frequently
            <br />
            asked Questions
          </h2>
          <p className="text-white/60 font-sans leading-relaxed">
            Don't see the answer you're looking for?{" "}
            <a
              href="/contact"
              className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
            >
              Get in touch
            </a>
            .
          </p>
        </div>

        {/* Right Side - FAQ Items */}
        <div className="flex-1">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
