

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './lib/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
    
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'grey-100': '#FDFDFD',
        'grey-150': '#F8FBF8',
        'grey-200': '#F0F0F0',
        'grey-300': '#DAD8D8',
        'grey-400': '#BFC0BF',
        'grey-500': '#A2A3A2',
        'grey-600': '#676868',
        'grey-800': '#1F2223',
        'green-100': '#F9FBF9',
        'green-200': '#84E9C5',
        'green-300': '#25C38B',
        'green-400': '#07B071',
        'light-green-500': '#00D88A',
        'green-500': '#028352',
        'green-600': '#035E46',
        'green-800': '#053237',
        'breadcrumb': 'rgba(253, 253, 253, 0.10)'
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
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
        'houdbaarheid': '25%',
        'invloed': '12%',
        'overheidslaag': '37%',
        'rladder': '26%',
      },
      backgroundImage: {
        'houtbouw-hero' : 'url("/hero-images/houtbouwHero.png")',
        'windmill-hero' : 'url("/hero-images/windmillHero.png")',
        'matrassen-hero' : 'url("/hero-images/matrassenHero.png")',
        'en-background': 'url("/Background-en-page.png")',
        'en-header': 'url("/en-deco-header.png")',
        'about-header': 'url("/about-header.png")',
        'header': 'url("/home-page/CL_header_new2.png")'
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
        '120': '120'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
],
};
