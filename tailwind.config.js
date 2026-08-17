/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF6EE",
          50: "#FFFDFA",
          100: "#FBF6EE",
          200: "#F5EBD9",
          300: "#EDDFC3",
        },
        gold: {
          DEFAULT: "#C6A15B",
          50: "#F7EFDD",
          100: "#EFE0BB",
          200: "#DFC490",
          300: "#C6A15B",
          400: "#AD8642",
          500: "#8C6A32",
          600: "#6B4F25",
        },
        blush: {
          DEFAULT: "#E8C4C4",
          50: "#FBF0EF",
          100: "#F5DEDD",
          200: "#E8C4C4",
          300: "#D9A3A3",
          400: "#C67F7F",
        },
        ink: {
          DEFAULT: "#3A2E22",
          light: "#6B5D4F",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Cormorant Garamond'", "serif"],
        sans: ["'Jost'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(180deg, #FBF6EE 0%, #F5EBD9 55%, #EFE0BB 100%)",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.6, transform: "scale(1.08)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 2.4s ease-in-out infinite",
        "bounce-slow": "bounce-slow 1.8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
}
