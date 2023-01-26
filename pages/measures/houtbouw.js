import Layout from '/components/layouts/layout';
import MeasuresLayout from '../../components/layouts/measures-layout';
import IconWood from '../../public/icons/woodIcon.svg';

import client from '../../lib/sanity';

const lawsQuery = `
*[_type == "measure" && thema == "houtbouw"]
`;

export default function Measures({ laws }) {
  // casus must be exactly as written in data.js
  return (
    <Layout>
      <MeasuresLayout
        totalNumberOfLaws={laws.length}
        thema='houtbouw' // must be the same as value in cms
        heading='Instrumenten om de inzet van hout in de bouw te bevorderen'
        introPara='We hebben een groot aantal kansrijke instrumenten gevonden die je kunt inzetten om de houtbouwtransitie te versnellen. Sommige van deze instrumenten zijn al eerder toegepast, andere nog niet. Ga aan de slag! Met jouw ervaringen help je ook anderen weer verder.'
        icon={IconWood}
        searchTitle='Zoek in houtbouw stimuleren'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(lawsQuery);
  return { props: { laws: laws } };
}
