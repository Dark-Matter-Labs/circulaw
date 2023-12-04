import Layout from '@/components/layouts/layout';
import mattressIcon from '@/public/icons/matressIcon.svg';
import ExpertiseLayout from '@/components/layouts/expertise-layout';
import { client } from '@/lib/sanity';
import { categorieQuery } from '@/lib/queries';

export default function InfoPage({ expertiseData }) {
  return (
    <Layout title='CircuLaw - Samenhang Matrassen'>
      <ExpertiseLayout
        thema='matrasketen'
        transitionAgenda='consumptie-goederen'
        expertiseData={expertiseData}
        title='Matrasketen instrumenten per categorie'
        icon={mattressIcon}
        // p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const expertiseData = await client.fetch(categorieQuery('matrasketen'));
  return {
    props: {
      expertiseData,
    },
    revalidate: 1,
  };
}
