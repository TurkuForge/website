const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'brand-blue': '#45A29E',
      'brand-blue-light': '#66FCF1',
      'brand-blue-dark': '#1f2833',
      'brand-light': '#C5C6C7',
      'brand-dark': '#0B0C10',
      ...colors
    },
    fontFamily: {
      logo: ['Bungee'],
      'open-sans': ['Open Sans']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};
