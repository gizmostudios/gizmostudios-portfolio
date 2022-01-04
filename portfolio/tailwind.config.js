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
      flex: {
        '2': '2 2 0%'
      },
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
        gray: {
          default: '#aaa'
        },
        secondary: {
          default: '#0aa'
        },
        shade: {
          80: 'rgba(0,0,0,.8)'
        }
      },
      animation: {
        'slideup': 'slideUp .3s ease-out forwards',
        'slidedown': 'slideDown .3s ease-out forwards',
        'fadeIn': 'fadeIn .3s linear forwards',
        'fadeOut': 'fadeOut .3s linear forwards',
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(100%)'
          },
        },
        fadeIn: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        fadeOut: {
          from: {
            opacity: 1
          },
          to: {
            opacity: 0
          }
        }
      }
    },
  },
  plugins: [],
}
