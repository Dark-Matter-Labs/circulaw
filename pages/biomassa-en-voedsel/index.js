import Layout from '@/components/layouts/layout';
import PCLayout from '@/components/layouts/product-chain-layout';
// import { client } from '@/lib/sanity';
// import { voedselverspillingQueries } from '@/lib/queries';

import themaImage from '@/public/tempImages/thema.png';
import impact1 from '@/public/tempImages/impact1.png';
import impact2 from '@/public/tempImages/impact2.png';
import impact3 from '@/public/tempImages/impact3.png';
import ambition1 from '@/public/tempImages/ambition1.png';
import ambition2 from '@/public/tempImages/ambition2.png';
import ambition3 from '@/public/tempImages/ambition3.png';

const themaList = [
  {
    name: 'Voedselverspilling',
    instrumentCount: 37,
    description: 'CircuLaw publiceert artikelen, geeft interviews en haalt het nieuws.',
    image: themaImage,
  },
  {
    name: 'Organische reststromen',
    instrumentCount: 37,
    description: 'CircuLaw publiceert artikelen, geeft interviews en haalt het nieuws.',
    image: themaImage,
  },
  {
    name: 'Organische reststromen',
    instrumentCount: 37,
    description: 'CircuLaw publiceert artikelen, geeft interviews en haalt het nieuws. ',
    image: themaImage,
  },
];

const impactList = [
  {
    detail: '17% Van de nationale CO2 uitstoot wordt veroorzaakt door het voedselsysteem',
    question: 'Hoe komt dit?',
    image: impact1,
  },
  {
    detail: 'Het voedselsysteem zorgt voor een neergang van gezonde en regeneratieve bodems',
    question: 'Hoe komt dit?',
    image: impact2,
  },
  {
    detail: 'Er is een circulair systeem nodig voor voedsel!',
    question: 'Waarom is dit nodig?',
    image: impact3,
  },
];

const ambitionList = [
  {
    title: 'Voedselverspilling verminderen met 50%',
    detail:
      'Het Nationaal Programma Circulaire Economie wil vanaf 2050 de kringlooplandbouw en een klimaatneutraal systeem gerealiseerd hebben met als bijkomend  Doel: voedselverspilling in 2030 50% verminderen ten opzichte van 2015.',
    image: ambition1,
  },
  {
    title: 'Duurzame productie van biogrondstoffen',
    detail:
      'De duurzame productie van biogrondstoffen voor verschillende toepassingen als de bouw, en duurzaam gebruik en hergebruik van biogrondstoffen zijn integrale onderdelen van het programma.',
    image: ambition2,
  },
  {
    title: 'Lokaal verbouwen plantaardige eiwitten',
    detail:
      'Plantaardige eiwitten moeten meer lokaal verbouwd worden, en een belangrijk onderdeel vormen van het algemene dieet, Doel: een 50/50 verdeling tussen dierlijke en plantaardige eiwitten in 2030.',
    image: ambition3,
  },
];

export default function Biomassa() {
  return (
    <Layout title='CircuLaw - Voedsel en biomassa'>
      <PCLayout
        title='Voedsel en biomassa'
        totalInstruments={127}
        themaList={themaList}
        impactList={impactList}
        ambitionList={ambitionList}
      />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const featuredLaws = await client.fetch(voedselverspillingQueries.voedselverspillingFeatured);
//   const length = await client.fetch(voedselverspillingQueries.voedselverspillingLength);
//   const thema = await client.fetch(voedselverspillingQueries.voedselverspillingThemaQuery);
//   return {
//     props: {
//       featuredLaws,
//       thema,
//       length,
//     },
//     revalidate: 1,
//   };
// }
