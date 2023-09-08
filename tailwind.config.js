/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif']
      },
      fontSize: {
        quote: '1.75rem'
      },
      colors: {
        global:{
          primarylight:'hsl(193, 38%, 86%)',
          primaryneon:'hsl(150, 100%, 66%)',
          neutraldark:'hsl(218, 23%, 16%)',
          neutralgrayish:'hsl(217, 19%, 24%)',
          neutralgrayishblue:'hsl(217, 19%, 38%)'
        },
      },
    },
  },
  plugins: [],
}

