import React from "react";

const textBoxesData = [
  {
    id: 1,
    text: "សួស្តី",
    top: "5%",
    left: "90%",
    delay: "0s",
    rotate: "-3deg",
  },
  {
    id: 2,
    text: "សូមស្វាគមន៍",
    top: "10%",
    right: "0%",
    delay: "0.2s",
    rotate: "2deg",
  },
  {
    id: 3,
    text: "សូមទោស",
    top: "25%",
    left: "75%",
    delay: "0.4s",
    rotate: "-2deg",
  },
  {
    id: 4,
    text: "ជម្រាបសួរ",
    top: "40%",
    right: "50%",
    delay: "0.6s",
    rotate: "3deg",
  },
  {
    id: 5,
    text: "ខ្ញុំស្រឡាញ់អ្នក",
    bottom: "35%",
    left: "40%",
    delay: "0.8s",
    rotate: "-1deg",
  },
  {
    id: 6,
    text: "អរគុណច្រើន",
    bottom: "10%",
    right: "80%",
    delay: "1s",
    rotate: "2deg",
  },
  {
    id: 7,
    text: "សុខសប្បាយ",
    top: "0",
    right: "80%",
    delay: "1.2s",
    rotate: "-2deg",
  },
  {
    id: 8,
    text: "ជំរាបលា",
    bottom: "15%",
    left: "70%",
    delay: "1.4s",
    rotate: "1deg",
  },
];

/**
 * FloatingTextBoxes Component
 * Displays floating text boxes for Performance Optimized feature
 */
const FloatingTextBoxes = React.memo(() => {
  return (
    <div className="relative w-full h-96 scale-90 lg:scale-110">
      {textBoxesData.map((box) => (
        <div
          key={box.id}
          className="absolute bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl px-5 py-4 shadow-2xl min-w-[200px] max-w-[280px] animate-float"
          style={{
            top: box.top,
            left: box.left,
            right: box.right,
            bottom: box.bottom,
            transform: `rotate(${box.rotate})`,
            animationDelay: box.delay,
          }}
        >
          <p className="text-xs text-white/70 mb-1.5 tracking-wide font-sans">
            Detected Text
          </p>
          <p className="text-sm text-white font-medium font-khmer">
            {box.text}
          </p>
        </div>
      ))}
    </div>
  );
});

FloatingTextBoxes.displayName = "FloatingTextBoxes";

export default FloatingTextBoxes;
