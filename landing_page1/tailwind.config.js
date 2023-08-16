/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ibmsans: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        primary: "#14203E",
        hero: "#FFFCF8",
        secondary: "#F6F0E8",
      },
    },
  },
  plugins: [],
};
