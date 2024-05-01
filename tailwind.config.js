/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back' : '#eeeee4',
        'darkb': '#063970',
        'xdarkb': '#154c79',
        'org': '#e28743',
        'skyb': '#abdbe3'
      }
    },
  },
  plugins: [],
}

