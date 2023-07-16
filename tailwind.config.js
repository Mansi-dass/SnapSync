/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobiles: '320px',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        slideOut: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'slideIn': 'slideIn 0.6s linear forwards',
        'slideOut': 'slideOut 0.6s linear forwards',
      }, 
      transitionProperty: {
        width: "width"
      }
    },
  },
  plugins: [
  ],
}

