// Changelog data configuration
// To add a new version, add a new object to the changelogs array
// Date format: [year, month, day] - month is 1-indexed (1 = January, 12 = December)

export const changelogs = [
  {
    version: "0.1.0 (Beta)",
    codename: "Speedy Rabbit",
    date: [2025, 12, 1],
    intro:
      "Our website interface is complete, while the AI model is still being trained and integrated. Features listed below reflect UI and system progress.",
    features: [
      "Web interface for Khmer sign language translation completed",
      "Demo page design finalized",
      "User-friendly layout with accessible design",
      "Sections added: Home, About, Documentation, Contact, Changelog, and Demo",
      "Real-time UI preview layout prepared (model pending integration)",
      "Speech output interface designed (text-to-speech integration in progress)",
    ],
    fixes: [
      "Fixed layout issues on mobile devices",
      "Improved page loading performance",
      "Resolved navigation bugs between pages",
      "Corrected UI alignment and spacing issues",
      "Fixed broken links in Documentation and Contact sections",
    ],
    improvements: [
      "Enhanced design consistency across all pages",
      "Improved user experience with cleaner interface and smoother navigation",
      "Optimized assets for better performance",
      "Updated content clarity and documentation structure",
      "Prepared API structure for AI model connection (integration ongoing)",
    ],
  },
];
