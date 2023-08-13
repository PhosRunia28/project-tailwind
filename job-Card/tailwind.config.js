/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#F3F6FF",
        secondary: "#1E2246",
      },
      fontFamily: {
        merriWeather: ["Merriweather", "serif"],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
