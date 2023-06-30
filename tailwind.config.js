/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { min: "270px", max: "600px" },
        tablet: { min: "600px", max: "1000px" },
        laptop: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
