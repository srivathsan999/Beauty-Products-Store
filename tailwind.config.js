/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F4C2C2',
        secondary: '#FFF4F4',
        accent: '#C65B7C',
        'text-dark': '#2A2A2A',
        white: '#FFFFFF',
      },
      fontFamily: {
        'heading': ['Poppins', 'Inter', 'Urbanist', 'sans-serif'],
        'body': ['Inter', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [],
}

