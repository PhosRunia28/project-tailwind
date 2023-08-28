/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merriWeather: ["Merriweather", "serif"],
      },
      colors: {
        body: "#D8DAE2",
        primary: "#EFF0F1",
        secondary: "#E5E7F0",
      },
    },
  },
  plugins: [],
};
