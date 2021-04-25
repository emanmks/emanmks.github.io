const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
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
