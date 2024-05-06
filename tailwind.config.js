/** @type {import('tailwindcss').Config} */
const leedom = require('@leedomjs/tailwindcss-preset')

module.exports = {
  presets: [
    leedom(),
  ],
  content: ['./src/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [],
}
