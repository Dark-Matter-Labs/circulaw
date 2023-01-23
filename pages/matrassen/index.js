import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import client from '../../lib/sanity';

const matrassenQuery = `
*[_type == "measure" && thema == "matrassen"]
`;

export default function Matrassen({ laws }) {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <Layout>
      <ThemeLayout
        // header
        title='Circulaire matrasketen'
        thema='matrassen'
        headerSubtitle='De hele matrasketen vanaf ontwerp tot aan de verwerking van afgedankte matrassen kan circulairder.'
        headerLinkText='' // will be displayed in the same sentence as header subtitle
        headerLinkURL=''
        bgHero='bg-matrassen-hero'
        // number of laws
        numberOfLaws={laws.length}
        // card titles
        listTitle={`Lijst van ${laws.length} instrumenten`}
        samenhangTitle='NEED Samenhang álle houtbouwinstrumenten in beeld'
        waarvoorTitle='NEED Wie is waarvoor bevoegd?'
        // card texts
        listText='NEEDMet handige filters om snel te vinden wat je zoekt.'
        samenhangText='NEEDHoe meer instrumenten je tegelijk inzet, hoe meer je bereikt.'
        waarvoorText='NEEDZonder samenwerking geen succes. Maar dan moet je wel weten wie voor welk instrument verantwoordelijk is.'
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
