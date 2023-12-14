/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#41476a',
        grey: '#83889D',
        orange: '#F17007',
        yellow: '#FFA944',
        beige: '#F4DEC5',
      }
    },
    fontFamily: {
      'poppins': ['poppins', 'sans-serif'],
    },
  },
  plugins: [],
}