/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"], // Added jsx to the content array
  theme: {
    extend: {
      backgroundImage: {
        'violet-gradient': 'linear-gradient(to right, #7F00FF, #E100FF)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Add your desired font here
      },
      screens: {
        'sm': '640px',
        'custom': {'max': '490px'},
      },
    },
  },
  plugins: [],
}
