/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        IBMplexSans: ["IBM Plex Sans", "sans-serif"],
        merriWeather: ["Merriweather", "serif"],
      },
      colors: {
        body: "#F7F8FB",
        primary: "#4249ED",
        secondary: "#0F1730",
        info: "#555B6D",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
