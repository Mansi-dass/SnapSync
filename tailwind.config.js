/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        mobiles: '320px',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [
  ],
}

