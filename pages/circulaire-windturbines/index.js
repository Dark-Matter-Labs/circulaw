import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import client from '../../lib/sanity';

const windQuery = `
*[_type == "measure" && thema == "circulaire-windturbines"]
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
        thema='circulaire-windturbines'
        headerSubtitle='Door meer windturbines in te zetten en door windturbines te ontwikkelen die zelf circulair zijn,  kunnen we grote stappen zetten om onze samenleving circulairder te maken.'
        // headerLinkText='' // will be displayed in the same sentence as header subtitle
        // headerLinkURL='/'
        bgHero='bg-circular-hero'
        heroImage='/windturbineHero.jpg'
        // number of laws
        numberOfLaws={laws.length}

        cardTitle = 'Overzichten van instrumenten die circulaire windturbines bevorderen'


        // card titles
        listTitle={`Lijst van ${laws.length} instrumenten`}
        samenhangTitle='Samenhang álle instrumenten voor circulaire windturbines in beeld'
        waarvoorTitle='Wie is waarvoor bevoegd?'
        // card texts
        listText='Alle instrumenten op een rijtje, met handige filters om snel te vinden wat je zoekt.'
        samenhangText='Zie hoe instrumenten zich tot elkaar verhouden en hoe je ze met elkaar kunt combineren.'
        waarvoorText='Zonder samenwerking geen succes. Maar dan moet je wel weten wie waarvoor bevoegd en verantwoordelijk is.'
        // card links
        cardLinkList='/measures/windturbines'
        cardLinkSamenhang='/circulaire-windturbines/samenhang-maatregelen'
        cardLinkWaarvoor='/circulaire-windturbines/welke-overheid-heeft'
        extendedMeasureHeading='instrumenten om circulariteit van windturbines te bevorderen'
        extendedMeasureSubtitle='Met voorbeelden.'
        
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(windQuery);
  return { props: { laws: laws } };
}
