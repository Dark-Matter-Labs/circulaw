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
        // header
        title='Houtbouw stimuleren'
        thema='houtbouw'
        headerSubtitle='We kunnen veel milieuvriendelijker bouwen wanneer we beton (deels) vervangen door hout.'
        headerLinkText='Lees wat het AMS zegt over houtbouw' // will be displayed in the same sentence as header subtitle
        headerLinkURL='https://www.ams-institute.org/documents/64/AMS_Institute_Houtbouwmythes_ontkracht.pdf'
        bgHero='bg-houtbouw-hero'
        heroImage='/houtbouwHero.jpeg'
        // number of laws
        numberOfLaws={laws?.length}
        // card titles
        listTitle={`Lijst van ${laws?.length} instrumenten`}
        samenhangTitle='Samenhang álle houtbouwinstrumenten in beeld'
        waarvoorTitle='Wie is waarvoor bevoegd?'
        // card texts
        listText='Met handige filters om snel te vinden wat je zoekt.'
        samenhangText='Hoe meer instrumenten je tegelijk inzet, hoe meer je bereikt.'
        waarvoorText='Zonder samenwerking geen succes. Maar dan moet je wel weten wie waarvoor bevoegden verantwoordelijk is. '
        // card links
        cardLinkList='/measures/houtbouw'
        cardLinkSamenhang='/houtbouw/samenhang-aantal-houtbouwmaatregelen'
        cardLinkWaarvoor='/houtbouw/welke-overheid'

        extendedMeasureHeading='instrumenten om houtbouw te bevorderen'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(houtbouwQuery);
  return { props: { laws: laws } };
}
