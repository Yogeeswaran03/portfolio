/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: '#0F1624',
        back1: '#1A202C',
      },
      fontFamily: {
        'hero-font': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
