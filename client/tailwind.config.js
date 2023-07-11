/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "'Montserrat', sans-serif",
        titleFont: "'Nunito Sans', sans-serif" 
      },
      colors: {
        primary: "#949494"
      },
      screens: {
        "xs": "420px"
      }
    },
  },
  plugins: [],
}

