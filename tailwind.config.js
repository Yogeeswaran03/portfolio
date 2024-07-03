/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: '#0F1624',
        back1: '#EDF2F8',
      },
      fontFamily: {
        'hero-font': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
