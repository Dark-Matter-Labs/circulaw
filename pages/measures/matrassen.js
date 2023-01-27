import Layout from '/components/layouts/layout';
import MatrassenIcon from '../../public/icons/matressIcon.svg';
import MeasuresLayout from '../../components/layouts/measures-layout';
import client from '../../lib/sanity';

const lawsQuery = `
*[_type == "measure" && thema == "matrassen"]
`;

export default function Measures({ laws }) {
  return (
    <Layout>
      <MeasuresLayout
        totalNumberOfLaws={laws.length}
        thema='matrassen'
        heading='Instrumenten om de circulariteit van de matrasketen te bevorderen'
        introPara={`We hebben ${laws.length} kansrijke instrumenten gevonden die je kunt inzetten als het gaat om matrassen. Met sommige van deze instrumenten is al praktijkervaring opgedaan, met andere nog niet. Ga aan de slag! Met jouw ervaringen help je anderen weer verder.`}
        icon={MatrassenIcon} // need to create a new icon for matress case
        searchTitle='Zoek in circulaire matrasketen'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(lawsQuery);
  return { props: { laws: laws } };
}
