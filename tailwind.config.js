/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-color' : '#034833',
        'second-color': '#83CD20',
        'para_color'  : '#727272'
      },
      fontFamily: {
        'jakarta' : ["Plus Jakarta Sans", 'sans-serif']
      }
    },
    container:{
      center:true
    }
  },
  plugins: [],
}