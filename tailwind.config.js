/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: '#CAFCB0',
        cream: '#FFF5C2',
        yellow: '#EABE7C',
        grey: '#222',
        black: '#000',
        greyer: '#111',
        seagreen: '#0A8754',
        pink: '#F4ACB7',
       
      },

      fontFamily: {
        heading: ['Playfair Display', 'sans-serif'],
        content: ['Montserat', 'sans-serif'],
      },

      keyframes: {
        slideDown: {
          '0%': { opacity: 0, maxHeight: 0 },
          '100%': { opacity: 1, maxHeight: '10rem' }, 
        },
        slideUp: {
          '0%': { opacity: 1, maxHeight: '10rem' }, 
          '100%': { opacity: 0, maxHeight: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-in',
      },
    },
  },
    
  
  plugins: [],
};