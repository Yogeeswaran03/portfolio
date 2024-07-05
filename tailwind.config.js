/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: '#DC143C',
        back1: '#EDF2F8',
      },
      fontFamily: {
        'hero-font': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
