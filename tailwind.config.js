/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "a-gray": "#999",
        "a-darkgray": "#888"
      }
    },
  },
  plugins: [],
}

