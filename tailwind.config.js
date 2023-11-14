/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "a-gray": "#eee",
        "a-darkgray": "#eee",
        "a-dark": "#1D1D1D",
        "a-dark2": "#2d2d2d",
      }
    },
  },
  plugins: [],
}

