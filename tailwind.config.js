

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
        'grey-200': '#F0F0F0',
        'grey-300': '#DAD8D8',
        'grey-400': '#BFC0BF',
        'grey-500': '#A2A3A2',
        'grey-600': '#676868',
        'grey-800': '#1F2223',
        'green-200': '#84E9C5',
        'green-300': '#25C38B',
        'green-400': '#07B071',
        'green-500': '#028352',
        'green-600': '#035E46',
        'green-800': '#053237',
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
        lgNav: '910px',
      },
      spacing: {
        '128': '32rem',
      },
      flexBasis: {
        'houdbaarheid': '22%',
        'invloed': '14%',
        'overheidslaag': '35%',
        'rladder': '29%',
      },
      backgroundImage: {
        'houtbouw-hero' : 'url("/hero-images/houtbouwHero.png")',
        'windmill-hero' : 'url("/hero-images/windmillHero.png")',
        'matrassen-hero' : 'url("/hero-images/matrassenHero.png")',
        'list-card': 'url("/thema-card-background/list-bg.png")',
        'samenhang-card': 'url("/thema-card-background/samenhang-bg.png")',
        'waarvoor-card': 'url("/thema-card-background/waaroov-bg.png")',
        'en-background': 'url("/Background-en-page.png")',
        'en-header': 'url("/en-deco-header.png")',
        'about-header': 'url("/about-header.png")',
        'header': 'url("/home-page/CL_header_new2.png")'
      },
      borderRadius: {
          'cl': '10px',
          'clSm': '4px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
],
  
};
