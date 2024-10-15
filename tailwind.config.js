/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        nunito:["Nunito Sans", "sans-serif"],
        ubuntu:["Ubuntu Sans", "sans-serif"],
      },
      width:{
        '70':'70%',
        '75':'75%',
        '90':'90%',

      },keyframes: {
        skillBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(barwidth)' }, // Use a CSS variable to set the final width
        },
      },
      animation: {
        skillBar: 'skillBar 2s ease-out forwards', // 2s animation
      },
      borderWidth:{
        '1':"1px"
      },
      fontSize:{
        'xxs':".5rem",
        'xxxs':".50rem"
      },
      rotate: {
        '30': '30deg',
        '15':'15deg'   // Rotate by 30 degrees
      },
      perspective: {
        '1000': '1000px', // Set perspective for 3D rotation
      },
      screens:{
        'max-2xl':{'max':'1920px'},
        'max-xl':{'max':'1280px'},
        'max-lg':{'max':'1024px'},
        'max-md':{'max':'768px'},
        'max-sm':{'max':'640px'},
        'max-xs':{'max':'390px'},
      }
     
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}