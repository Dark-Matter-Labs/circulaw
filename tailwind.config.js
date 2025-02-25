

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './lib/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {
      boxShadow: {
        'card': [
          '0px 0px 3px 0px rgba(12, 26, 75, 0.24)',
          '0px 3px 8px -1px rgba(50, 50, 71, 0.05)'
        ]
      },
      colors: {
        'green-50': '#F8FBF8',
        'green-100': '#D1F9EB', 
        'green-200': '#84E9C5',
        'green-300': '#25C38B',
        'green-400': '#07B071',
        'green-500': '#028352',
        'green-600': '#035E46',
        'green-800': '#053237',
        'gray-100': '#FDFDFD',
        'gray-200': '#F0F0F0', // gray 250 in DS
        'cl-grey': '#A2A3A2',
        'cl-dark-grey': '#676868',
        'cl-black': '#1F2223',
      },
      fontFamily: {
        jakarta: ['var(--font-plus-jakarta-sans)'],
      },
      fontSize: {
        xxs: '12px',
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
        '7xl': '54px',
        '8xl': '85px'
      },
      lineHeight: {
        2: '14px',
        3: '15px',
        4: '16px',
        5: '19px',
        6: '20px',
        7: '21px',
        8: '22px',
        9: '23px',
        10: '24px',
        11: '26px',
        12: '28px',
        13: '30px',
        14: '32px',
        15: '36px',
        16: '64px',
        17: '96px'
      },
      screens: {
        lgNav: '990px',
      },
      spacing: {
        '128': '32rem',
      },
      flexBasis: {
        'houdbaarheid': '22.3%',
        'invloed': '7%',
        'overheidslaag': '40.7%',
        'rladder': '29%',
      },
      backgroundImage: {
        'about-header': 'url("/about-header.png")',
        'header': 'url("/home-page/homepage_bg.png")',
        // 'scoll-circles': 'url("/scrolly/centered.svg")',
      },
      borderRadius: {
          'cl': '10px',
          'clSm': '4px'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '110': '110',
        '120': '120',
        '130': '130'
      },
    },
  },
  // this allows the dynamic setting of animation delay in theme-sponsors.js
  safelist: [
    'delay-[250ms]',
    'delay-[500ms]',
    'delay-[750ms]',
    'delay-[1000ms]',
    // etc.
  ],
  plugins: [
    require('@tailwindcss/forms')
],
};


