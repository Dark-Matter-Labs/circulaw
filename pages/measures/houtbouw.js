import Layout from '/components/layouts/layout';
import IconWood from '../../public/icons/HoutbouwIconBg.svg';
import MeasuresLayout from '../../components/layouts/measures-layout';
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
        heading={`${laws.length} houtbouwmaatregelen voor innovatieve beleidsmakers`}
        introPara={`BWij hebben ${laws.length} kansvolle maatregelen gevonden waarmee je beleid uit kunt voeren om de houtbouwtransitie te versnellen. Veel daarvan zijn nog niet eerder toegepast: je gaat er mee pionieren. 
        In de toekomst gaan we tools aanbieden voor het in praktijk brengen ervan. Tot die tijd hebben de maatregelen alvast op een rij gezet.`}
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
