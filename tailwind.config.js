const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html']
  },
  darkMode: false,
  theme: {
    colors: {
      gray: colors.coolGray
    },
    fontFamily: {},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
