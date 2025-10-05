/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff8c00',
          600: '#e67b00',
        }
      }
    },
  },
  plugins: [],
}
