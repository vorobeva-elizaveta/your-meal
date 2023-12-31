/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#FFAB08',
        orange: '#FF7020',
        orangeDark: '#F86310'
      }
    }
  },
  plugins: []
}
