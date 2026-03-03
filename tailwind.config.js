/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#a855f7',       /* Your signature purple */
        darkBg: '#0f172a',      /* App background */
        cardBg: '#1e293b',      /* Card background */
        cardBorder: '#334155',  /* Card borders */
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}