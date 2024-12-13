/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '320px', 'max': '540px'},
        'mid-xs': {'min': '540px', 'max': '768px'}, 
        'large-xs': {'min': '768px', 'max': '960px'},
        'mid-xl': {'min': '1170px'},
      },
      colors: {
        aqua: "#49F7F3",
        white: "#FFFFFF",
        lightGray: "#EDEDED",
        // bodyColor: "#E7EBFD",
        redColor: "#FF5959",
      },
    },
  },
  plugins: [],
}