/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sparkz: '#157395',
        'sparkz-light': '#FBFBFB',
      },
    },
  },
  plugins: [],
}