module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        'black-white-200': '#F8FBF8',
        'black-white-300': '#DAD8D8',
        'black-white-400': '#BFC0BF',
        'black-white-500': '#A2A3A2',
        'black-white-600': '#676868',
        'black-white-800': '#1F2223',
        'green-200': '#84E9C5',
        'green-300': '#25C38B',
        'green-400': '#6D9F6B',
        'green-500': '#028352',
        'green-600': '#035E46',
        'green-800': '#053237',
        blush1: '#F9D9C8', // will be removed
        blush2: '#FFF3ED', // will be removed
        blush3: '#FFD8C4', // will be removed
        green3: '#AABC97', // will be removed
        green33: '#659986', // will be removed
        green4: '#F9FBF9', // will be removed
        green8: '#0ED28C', // will be removed
        greenAlpha: 'rgba(109, 159, 107, 0.2)', // will be removed
        greenLink: '#047857', // will be removed
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      },
      fontSize: {
        xs: '14px',
        sm: '15px',
        base: '16px',
        lg: '17px',
        xl: '18px',
        '2xl': '19px',
        '3xl': '22px',
        '4xl': '23px',
        '5xl': '25px',
        '6xl': '29px',
        '7xl': '55px',
        '8xl': '85px'
      },
      lineHeight: {
        3: '15px',
        4: '16px',
        5: '19px',
        6: '20px',
        7: '21px',
        8: '22px',
        9: '23px',
        10: '24px',
        11: '26px',
        12: '27px',
        13: '30px',
        14: '32px',
        15: '36px',
        16: '64px',
        17: '96px'
      },
      screens: {
        lg: '1145px',
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'houtbouw-hero' : 'url("/houtbouwHero.jpeg")'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
