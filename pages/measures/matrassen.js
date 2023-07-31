import Layout from '/components/layouts/layout';
import MatrassenIcon from '../../public/icons/matressIcon.svg';
import MeasuresLayout from '../../components/layouts/measures-layout';
import { client } from '../../lib/sanity';
import { matrassenQueries } from '../../lib/queries';

export default function Measures({ totalNumberOfLaws }) {
  return (
    <Layout title='CircuLaw - Circulaire matrasketen'>
      <MeasuresLayout
        totalNumberOfLaws={totalNumberOfLaws}
        title='Lijst van circulaire matrasketen instrumenten'
        thema='circulaire-matrasketen'
        heading='Instrumenten om de circulariteit van de matrasketen te bevorderen'
        introPara={`We hebben ${totalNumberOfLaws} kansrijke instrumenten gevonden die je kunt inzetten als het gaat om matrassen. Met sommige van deze instrumenten is al praktijkervaring opgedaan, met andere nog niet. Ga aan de slag! Met jouw ervaringen help je anderen weer verder.`}
        icon={MatrassenIcon}
        searchTitle='Zoek in circulaire matrasketen'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const totalNumberOfLaws = await client.fetch(matrassenQueries.matrassenLength);
  return { props: { totalNumberOfLaws }, revalidate: 1 };
}
