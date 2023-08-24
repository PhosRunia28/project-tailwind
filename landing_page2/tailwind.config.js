/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FAD961",
      },
    },
  },
  plugins: [],
};
