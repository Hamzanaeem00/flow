/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'min': '320px', 'max': '480px' }, // Extra small screens (e.g., small phones)
        'sm': { 'min': '480px', 'max': '768px' }, // Small screens (e.g., phones)
        'md': { 'min': '768px', 'max': '1024px' }, // Medium screens (e.g., tablets)
        'lg': { 'min': '1024px', 'max': '1366px' }, // Large screens (e.g., laptops)
        'xl': { 'min': '1366px', 'max': '1600px' }, // Extra large screens (e.g., desktops)
        '2xl': { 'min': '1601px' }, // Ultra-wide screens (e.g., large monitors)
      },
      colors: {
        aqua: "#49F7F3",
        white: "#FFFFFF",
        lightGray: "#EDEDED",
        // bodyColor: "#E7EBFD",
        redColor: "#FF5959",
        inputColor: "#191919"
      },
    },
  },
  plugins: [],
}