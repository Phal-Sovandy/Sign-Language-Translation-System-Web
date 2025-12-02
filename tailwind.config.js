/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        heading: ['"Lexend"', '"Inter"', "system-ui", "sans-serif"],
        display: [
          '"Micro 5"',
          '"Lexend"',
          '"Inter"',
          "system-ui",
          "sans-serif",
        ],
        script: ['"NothingYouCouldDo"', "cursive", "sans-serif"],
        khmer: ['"KantumruyPro"', "sans-serif"],
        cormorant: ['"CormorantInfant"', "serif"],
      },
      colors: {
        brand: {
          primary: "#2F6BFF",
          accent: "#486BF6",
          background: "#0C0C0C",
        },
      },
      keyframes: {
        "grid-move": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "120px 120px" },
        },
        "float-soft": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        "pulse-glow": {
          "0%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
          "100%": { opacity: "0.35" },
        },
        "pan-lines": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "grid-move": "grid-move 28s linear infinite",
        "float-soft": "float-soft 12s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        "pan-lines": "pan-lines 16s linear infinite",
      },
    },
  },
  plugins: [],
};
