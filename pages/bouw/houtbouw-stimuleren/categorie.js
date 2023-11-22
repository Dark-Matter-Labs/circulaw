import Layout from '@/components/layouts/layout';
import ExpertiseLayout from '@/components/layouts/expertise-layout';
import { client } from '@/lib/sanity';
import { categorieQuery } from '@/lib/queries';

export default function InfoPage({ expertiseData }) {
  return (
    <Layout title='CircuLaw - Samenhang Aantal Houtbouwmaatregelen'>
      <ExpertiseLayout
        expertiseData={expertiseData}
        thema='houtbouw-stimuleren'
        transitionAgenda='bouw'
        title='Houtbouw instrumenten per categorie'
        // p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const expertiseData = await client.fetch(categorieQuery('houtbouw-stimuleren'));
  return {
    props: {
      expertiseData,
    },
    revalidate: 1,
  };
}
