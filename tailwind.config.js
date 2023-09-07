/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.6875rem'
      },
      colors: {
        'letters-tertiary': '#575757',
        'brand-primary': 'rgb(123 116 255)'
      },
    }
  },
  plugins: [],
}

