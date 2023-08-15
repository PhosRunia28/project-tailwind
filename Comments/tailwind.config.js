/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sourceSans3: ["Source Sans 3", "sans-serif"],
      },
      colors: {
        body: "#F1F8FF",
        primary: "#0089FF",
        secondary: "#F1F2F3",
      },
    },
  },
  plugins: [],
};
