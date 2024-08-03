/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      minHeight: {
        '53px': '53px',
      },
      backgroundImage: {
        'custom-image': "url('./images/slide-1.jpg')",
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  darkMode:'class'
}

