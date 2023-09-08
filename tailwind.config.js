/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Fuzzy Bubbles'],
        header: ['Joti One']
      },
    },
  },
  plugins: [],
}