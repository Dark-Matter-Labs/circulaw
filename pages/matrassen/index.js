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

  // content up to date: Mon 23 Jan 15h
  return (
    <Layout>
      <ThemeLayout
        laws={laws}
        // header
        title='Circulaire matrasketen'
        thema='matrassen'
        headerSubtitle='De hele matrasketen vanaf ontwerp tot aan de verwerking van afgedankte matrassen kan circulairder.'
        // headerLinkText='' // will be displayed in the same sentence as header subtitle
        // headerLinkURL=''
        bgHero='bg-matrassen-hero'
        heroImage='/hero-images/matrassen.jpeg' // needs replacing
        // number of laws
        numberOfLaws={laws.length}
        cardTitle='Overzichten van instrumenten die de circulaire matrasketen bevorderen'
        // card titles
        listTitle={`Lijst van ${laws.length} instrumenten`}
        samenhangTitle='Samenhang álle instrumenten voor de circulaire matrasketen in beeld'
        waarvoorTitle='Wie is waarvoor bevoegd?'
        // card texts
        listText='Alle instrumenten op een rijtje, met handige filters om snel te vinden wat je zoekt.'
        samenhangText='Zie hoe instrumenten zich tot elkaar verhouden en hoe je ze met elkaar kunt combineren.'
        waarvoorText='Zonder samenwerking geen succes. Maar dan moet je wel weten wie waarvoor bevoegd en verantwoordelijk is.'
        // card links
        cardLinkList='/measures/matrassen'
        cardLinkSamenhang='/matrassen/samenhang-matrassen'
        cardLinkWaarvoor='/matrassen/welke-overheid-heeft'
        extendedMeasureHeading='instrumenten om de circulariteit van de matrasketen te bevorderen'
        extendedMeasureSubtitle='Met voorbeelden.'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(matrassenQuery);
  return { props: { laws: laws } };
}
