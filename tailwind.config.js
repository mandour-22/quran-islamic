/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rakkas: ["Rakkas", "sans-serif"],
      },
      backgroundColor: {
        primary: "#554941",
        secondary: "#6a6666",
        bgCover: "#1f090399",
        bgBtn: "#3f3630",
      },
      borderColor: {
        color1: "#1f090345",
        color2: "#1f09037d",
      },
    },
  },
  plugins: [],
};
