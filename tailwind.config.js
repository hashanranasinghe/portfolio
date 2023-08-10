/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      screens: {
        sm: "480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px"

      },
      spacing:{
        "big":"35rem"
      }
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
}