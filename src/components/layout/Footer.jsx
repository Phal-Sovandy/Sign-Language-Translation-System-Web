import { socialLinks } from "../../config";

export default function Footer() {
  const disclaimers = [
    "The Khmer Sign Language Translation System is a student research and development project created as Capstone Project 01 for Term 1, Year 3 under the Data Science Specialization and Computer Science Department. This project is developed strictly for academic, educational, and demonstration purposes and does not represent a commercial, governmental, or certified software product.",
    "This project is designed, implemented, and maintained by Capstone Group 15, consisting of the following members: Phal Sovandy, Toek Hengsreng, Chhi Hangcheav, Mony Meakputsoktheara, Vann Vat, Chim Panhaprasith, as part of a supervised academic requirement.",
    "This system is not developed entirely from original code. It utilizes a pre-trained machine learning model provided by third-party sources, which has been fine-tuned, retrained, and adapted using a project-specific dataset to suit the scope, objectives, and experimental design of this academic work. The selection of such models is part of the learning process and does not indicate proprietary ownership of the base architecture.",
    "This system is currently under active development and testing. As such, the accuracy, speed, stability, and reliability of translations may vary depending on hardware performance, camera quality, lighting conditions, gesture clarity, dataset limitations, and model constraints.",
    "No warranty, express or implied, is provided regarding the correctness, completeness, availability, suitability, or usefulness of the system or the output it generates. This includes, but is not limited to, implied warranties of accuracy, reliability, and fitness for any particular purpose.",
    "This project must not be relied upon for professional, medical, legal, accessibility, or critical communication purposes. Any use beyond testing, demonstration, or educational evaluation is done entirely at the user's own risk.",
    "The development team, academic institution, and supervising faculty disclaim all liability for any loss, damage, confusion, or misinterpretation that may arise from the use, misuse, or inability to use this system.",
    "Third-party tools, frameworks, libraries, and models may be integrated into this project. All respective trademarks, names, and intellectual property rights remain the property of their rightful owners.",
    "Any datasets used in training are collected for academic experimentation only and are handled in accordance with ethical research practices. No personal data is deliberately collected or stored by this system.",
    'All features, outputs, and results are provided "as is" without assurance of continuation, future support, or upgrade commitments.',
  ];

  return (
    <footer className="relative w-screen py-16 bg-brand-background">
      {/* Top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="px-8 max-w-[1700px] mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          {/* Copyright */}
          <p className="text-white/80 font-sans text-sm">
            © Khmer Sign Language Translation System. All Rights RESERVED
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimers */}
        <ol className="list-decimal list-outside pl-6 space-y-4 mb-16">
          {disclaimers.map((disclaimer, index) => (
            <li
              key={index}
              className="text-white/40 font-sans text-sm leading-relaxed pl-2"
            >
              {disclaimer}
            </li>
          ))}
        </ol>

        {/* Bottom Info */}
        <div className="flex flex-col gap-1">
          <p className="text-white/60 font-sans text-sm font-medium">
            Khmer Sign Language Translation System
          </p>
          <p className="text-white/40 font-sans text-sm">
            Data Science Specialization & Computer Science Department
          </p>
          <p className="text-white/40 font-sans text-sm">
            Capstone Project 01 — Year 3, Term 1
          </p>
        </div>
      </div>
    </footer>
  );
}
