/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Young-Serif": "Young Serif, serif",
        Outfit: "Outfit, sans-serif",
      },
      fontSize: {
        "3xl": "32px",
      },
      colors: {
        subheadings: "#713c2e",
      },
    },
  },
  plugins: [],
};
