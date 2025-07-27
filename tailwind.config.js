/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"], // Optional custom font for headings
      },
      colors: {
        primary: "#1e2746",
        secondary: "#291e4a",
        lightGray: "#f7f8fa",
      },
      boxShadow: {
        card: "0 8px 20px rgba(0, 0, 0, 0.05)",
        hover: "0 10px 25px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
