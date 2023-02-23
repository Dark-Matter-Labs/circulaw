import logo1 from '../public/logo_partners/CircuLawPartners-01.svg';
import logo2 from '../public/logo_partners/CircuLawPartners-02.svg';
import logo3 from '../public/logo_partners/CircuLawPartners-03.png';
import logo4 from '../public/logo_partners/CircuLawPartners-04.svg';
import logo5 from '../public/logo_partners/CircuLawPartners-05.png';
import logo6 from '../public/logo_partners/CircuLawPartners-06.png';
import logo7 from '../public/logo_partners/Partner CircuLaw logo_s-23.png';
import logo8 from '../public/logo_partners/CircuLawPartners-08.png';
import logo9 from '../public/logo_partners/CircuLawPartners-09.svg';
import logo10 from '../public/logo_partners/CircuLawPartners-10.png';
import logo11 from '../public/logo_partners/CircuLawPartners-15.svg';
import logo12 from '../public/logo_partners/CircuLawPartners-11.svg';
import logo13 from '../public/logo_partners/CircuLawPartners-12.svg';
import logo14 from '../public/logo_partners/CircuLawPartners-13.svg';
import logo15 from '../public/logo_partners/CircuLawPartners-14.png';

const partners = [
    {
      name: 'Gemeente Amsterdam',
      link: 'https://www.amsterdam.nl/',
      image: logo1,
      className: 'border-r border-black-white-200', 
    },
    {
        name: 'Dark Matter Labs',
        link: 'https://darkmatterlabs.org/',
        image: logo2,
        className: 'border-r border-black-white-200',
    },
    {
        name: 'EIT Climate-KIC',
        link: 'https://www.climate-kic.org/',
        image: logo3,
        className: 'lg:border-r border-black-white-200',
    },
    {
        name: 'Built by Nature',
        link: 'https://builtbn.org/',
        image: logo4,
        className: 'border-r border-black-white-200',
    },
    {
        name: 'Amsterdam Institute for Advanced Metropolitan Solutions',
        link: 'https://www.ams-institute.org/',
        image: logo5,
        className: 'border-r border-black-white-200 lg:border-0',
    },
    {
        name: 'De Circulaire Bouweconomie',
        link: 'https://circulairebouweconomie.nl/',
        image: logo6,
        className: 'lg:border-r border-black-white-200',
    },
    {
        name: 'Provincie Noord-Holland',
        link: 'https://www.noord-holland.nl/',
        image: logo7,
        className: 'border-r border-black-white-200',
    },
    {
        name: 'Provincie Flevoland',
        link: 'https://www.flevoland.nl/',
        image: logo8,
        className: 'border-r border-black-white-200',
    },
    {
        name: 'Rijksdienst voor Ondernemend',
        link: 'https://www.rvo.nl/',
        image: logo9,
        className: 'lg:border-r border-black-white-200',
    },
    {
        name: 'Ministerie van Financiën',
        link: 'https://www.rijksoverheid.nl/ministeries/ministerie-van-financien',
        image: logo10,
        className: 'border-r border-black-white-200 lg:border-0',
    },
    {
        name: 'Vrije Universiteit Amsterdam',
        link: 'https://vu.nl/nl',
        image: logo11,
        className: 'border-r border-black-white-200',
    },
    {
        name: 'Universiteit van Amsterdam',
        link: 'https://www.uva.nl/',
        image: logo12,
        className: 'lg:border-r border-black-white-200',
    },
    {
        name: 'Wageningen University & Research',
        link: 'https://www.wur.nl/nl/wageningen-university.htm',
        image: logo13,
        className: 'border-r border-black-white-200',
    },
    {
        name: 'TU Delft',
        link: 'http://tudelft.nl//',
        image: logo14,
        className: 'border-r border-black-white-200',
    },
    {
        name: 'Erasmus Universiteit Rotterdam',
        link: 'https://www.eur.nl/',
        image: logo15,
        className: '',
    },
   
  ];

  export function get_partners() {
    return partners;
}