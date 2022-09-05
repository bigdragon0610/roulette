/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rolling: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rising: {
          "0%": { bottom: 0, left: "50%", transform: "translate(-50%, 100%)" },
          "100%": {
            bottom: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
          },
        },
      },
      animation: {
        rolling: "rolling 0.5s linear infinite",
        rising: "rising 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
