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
        heading='Circulaire matrasketen'
        introPara={`need to add text here for matrassen case ${laws.length}`}
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
