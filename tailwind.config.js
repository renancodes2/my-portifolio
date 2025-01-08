/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        'custom-white': '1px 1px 7px white',
      },
      colors: {
        black: "#000000",
        purpleDark: "#570057",
        purpleLight: "#7e0c7d",
        white: "#ffffff",
      },
      screens: {
        'xs': '480px', // Breakpoint personalizado
        '3xl': '1600px', // Outro exemplo
      },
    },
  },
  plugins: [],
};