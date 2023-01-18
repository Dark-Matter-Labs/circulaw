import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import client from '../../lib/sanity';

const houtbouwQuery = `
*[_type == "measure" && thema == "houtbouw"]
`

export default function Houtbouw({laws}) {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <Layout>
      <ThemeLayout 
      // header
      title = 'Houtbouw stimuleren'
      thema='houtbouw'
      headerSubtitle='We kunnen veel milieuvriendelijker bouwen wanneer we beton (deels) vervangen door houtfont change'
      headerLinkText='meer over nut van houtbouw →' // will be displayed in the same sentence as header subtitle
      headerLinkURL='https://www.ams-institute.org/documents/64/AMS_Institute_Houtbouwmythes_ontkracht.pdf'
      bgHero  = 'bg-houtbouw-hero'
     
      // number of laws
      numberOfLaws = {laws.length}

      // card titles
      listTitle={`Lijst van ${laws.length} instrumenten`}
      samenhangTitle='Samenhang álle houtbouwinstrumenten in beeld'
      waarvoorTitle='Wie is waarvoor bevoegd?'

      // card texts
      listText='Met handige filters om snel te vinden wat je zoekt.'
      samenhangText='Hoe meer instrumenten je tegelijk inzet, hoe meer je bereikt.'
      waarvoorText='Zonder samenwerking geen succes. Maar dan moet je wel weten wie voor welk instrument verantwoordelijk is.'

      // card button texts ** THIS COULD BE THE SAME FOR ALL PAGES?
      listButtonText='Bekijk  de lijst'
      samenhangButtonText='Bekijk de samenhang'
      waarvoorButtonText='Bekijk  de bevoegdheden'

      // card links
      cardLinkList='/measures/houtbouw'
      cardLinkSamenhang='/houtbouw/samenhang-aantal-houtbouwmaatregelen'
      cardLinkWaarvoor='/houtbouw/welke-overheid'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(houtbouwQuery);
  return { props: { laws: laws } };
}
