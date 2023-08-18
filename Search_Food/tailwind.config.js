/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        merriWeather: ["Merriweather", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#142037",
        secondary: "#92B6FF",
        info: "#7A90BB",
      },
    },
  },
  plugins: [],
};
