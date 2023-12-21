import Layout from '@/components/layouts/layout';
import ExpertiseLayout from '@/components/layouts/expertise-layout';
import WindmillIcon from '@/public/icons/windmill.png';
import { client } from '@/lib/sanity';
import { categorieQuery } from '@/lib/queries';

export default function InfoPage({ expertiseData }) {
  return (
    <Layout title='CircuLaw - Windturbine instrumenten per categorie'>
      <ExpertiseLayout
        thema='windturbines'
        transitionAgenda='maakindustrie'
        title='Windturbines instrumenten per categorie'
        icon={WindmillIcon}
        //  p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
        expertiseData={expertiseData}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const expertiseData = await client.fetch(categorieQuery('windturbines'));
  return {
    props: {
      expertiseData,
    },
    revalidate: 1,
  };
}
