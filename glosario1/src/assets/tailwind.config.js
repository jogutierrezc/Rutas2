/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'trattatello': ['Trattatello', 'fantasy'],
        'heritage': ['Heritage_Sans', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
