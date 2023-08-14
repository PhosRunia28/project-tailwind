/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#FBEDF2",
        primary: "#FB6C93",
        secondary: "#29293D",
        accent: "#FCFCFF",
        neutral: "#ACACB8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merriWeather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
