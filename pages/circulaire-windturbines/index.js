import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import client from '../../lib/sanity';

const windQuery = `
*[_type == "measure" && thema == "matrassen"]
`;

export default function Windturbine({ laws }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout>
      <ThemeLayout
        // header
        title='Circulaire windturbines'
        thema='Circulaire windturbines'
        headerSubtitle='NEEDWe kunnen veel milieuvriendelijker bouwen wanneer we beton (deels) vervangen door houtfont change'
        headerLinkText='NEEDmeer over nut van circular →' // will be displayed in the same sentence as header subtitle
        headerLinkURL='/'
        bgHero='bg-circular-hero'
        // number of laws
        numberOfLaws={laws.length}
        // card titles
        listTitle={`${laws.length} Circulairewindturbine maatregelen`}
        samenhangTitle='NEED Samenhang álle houtbouwinstrumenten in beeld'
        waarvoorTitle='NEED Wie is waarvoor bevoegd?'
        // card texts
        listText='NEEDMet handige filters om snel te vinden wat je zoekt.'
        samenhangText='NEEDHoe meer instrumenten je tegelijk inzet, hoe meer je bereikt.'
        waarvoorText='NEEDZonder samenwerking geen succes. Maar dan moet je wel weten wie voor welk instrument verantwoordelijk is.'
        // card links
        cardLinkList='/measures/windturbines'
        cardLinkSamenhang='/circulaire-windturbines/samenhang-maatregelen'
        cardLinkWaarvoor='/circulaire-windturbines/welke-overheid-heeft'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(windQuery);
  return { props: { laws: laws } };
}
