/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#FFF4E0',
        'secondary': '#FFBF9B',
      },
      textColor: {
        'primary': '#4D4D4D',
        'secondary': '#B46060',
      },
    },
    variants: {
      extend: {}
    },
  },
  plugins: [],
}
