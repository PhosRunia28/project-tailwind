/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        merriWeather: ["Merriweather", "serif"],
        IBMPlexSans: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        secondary: "#F1F2FC",
        primary: "#1E2641",
      },
    },
  },
  plugins: [],
};
