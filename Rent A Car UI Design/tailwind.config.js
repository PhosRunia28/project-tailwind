/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        merriWeather: ["Merriweather", "serif"],
      },
      colors: {
        cta: "#FE6F4F",
        primary: "#0D1C52",
        pill1: "#FCC863",
        pill2: "#FC9A63",
      },
    },
  },
  plugins: [],
};
