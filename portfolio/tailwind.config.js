const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      fontFamily: {
        sans: ['Titillium Web', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          default: '#802',
          dark: '#402',
          900: '#800',
          600: '#a03'
        },
        secondary: {
          default: '#0aa'
        }
      }
    },
  },
  plugins: [],
}
