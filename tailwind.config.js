const { BiGame } = require('react-icons/bi')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'newsletter': "url('./assets/newsletter-bg.png')",
        'newsletter2': "url('./assets/newsletter-box.png')"
      }
    },
  },
  plugins: [],
}
