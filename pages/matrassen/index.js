import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import client from '../../lib/sanity';

const matrassenQuery = `
*[_type == "measure" && thema == "matrassen"]
`

export default function Matrassen({laws}) {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <Layout>
      <ThemeLayout
       // header
      title = 'Matrassen stimuleren'
      thema='matrassen'
      headerSubtitle='NEEDWe kunnen veel milieuvriendelijker bouwen wanneer we beton (deels) vervangen door houtfont change'
      headerLinkText='NEEDmeer over nut van houtbouw →' // will be displayed in the same sentence as header subtitle
      headerLinkURL='https://www.ams-institute.org/documents/64/AMS_Institute_Houtbouwmythes_ontkracht.pdf'
      bgHero= 'bg-matrassen-hero'
      // number of laws
      numberOfLaws = {laws.length}

      // card titles
      listTitle={`Lijst van ${laws.length} instrumenten`}
      samenhangTitle='NEED Samenhang álle houtbouwinstrumenten in beeld'
      waarvoorTitle='NEED Wie is waarvoor bevoegd?'

      // card texts
      listText='NEEDMet handige filters om snel te vinden wat je zoekt.'
      samenhangText='NEEDHoe meer instrumenten je tegelijk inzet, hoe meer je bereikt.'
      waarvoorText='NEEDZonder samenwerking geen succes. Maar dan moet je wel weten wie voor welk instrument verantwoordelijk is.'

      // card button texts ** THIS COULD BE THE SAME FOR ALL PAGES?
      listButtonText='Bekijk  de lijst?'
      samenhangButtonText='Bekijk de samenhang?'
      waarvoorButtonText='Bekijk  de bevoegdheden?'

      // card links
      cardLinkList='/measures/matrassen'
      cardLinkSamenhang='/'
      cardLinkWaarvoor='/'
      />
    </Layout>
  );
}
export async function getStaticProps() {
  const laws = await client.fetch(matrassenQuery);
  return { props: { laws: laws } };
}
