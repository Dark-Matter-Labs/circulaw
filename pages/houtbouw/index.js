import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import client from '../../lib/sanity';

const houtbouwQuery = `
*[_type == "measure" && thema == "houtbouw"]
`;

export default function Houtbouw({ laws }) {
  useEffect(() => {
    localStorage.clear();
  });

  // content up to date: Mon 23 Jan 15h
  return (
    <Layout>
      <ThemeLayout
        laws={laws}
        // header
        title='Houtbouw stimuleren'
        thema='houtbouw'
        headerSubtitle='We kunnen veel milieuvriendelijker bouwen wanneer we beton (deels) vervangen door hout.'
        headerLinkText='Lees wat het AMS zegt over houtbouw' // will be displayed in the same sentence as header subtitle
        headerLinkURL='https://www.ams-institute.org/documents/64/AMS_Institute_Houtbouwmythes_ontkracht.pdf'
        bgHero='bg-houtbouw-hero'
        heroImage='/hero-images/houtbouw.jpeg'
        // number of laws
        numberOfLaws={laws?.length}
        cardTitle='Overzichten van instrumenten die houtbouw bevorderen'
        // card titles
        listTitle={`Lijst van ${laws?.length} instrumenten`}
        samenhangTitle='Samenhang álle houtbouwinstrumenten in beeld'
        waarvoorTitle='Wie is waarvoor bevoegd?'
        // card texts
        listText='Alle instrumenten op een rijtje, met handige filters om snel te vinden wat je zoekt.'
        samenhangText='Zie hoe instrumenten zich tot elkaar verhouden en hoe je ze met elkaar kunt combineren.'
        waarvoorText='Zonder samenwerking geen succes. Maar dan moet je wel weten wie waarvoor bevoegd en verantwoordelijk is.'
        // card links
        cardLinkList='/measures/houtbouw'
        cardLinkSamenhang='/houtbouw/samenhang-aantal-houtbouwmaatregelen'
        cardLinkWaarvoor='/houtbouw/welke-overheid'
        extendedMeasureHeading='instrumenten om houtbouw te bevorderen' // starts fron after the number
        extendedMeasureSubtitle='Met voorbeelden en handige leidraden.'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(houtbouwQuery);
  return { props: { laws: laws } };
}
