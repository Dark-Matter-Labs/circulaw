import Layout from '@/components/layouts/layout';
import ExpertiseLayout from '@/components/layouts/expertise-layout';
import { client } from '@/lib/sanity';
import { categorieQuery } from '@/lib/queries';

export default function InfoPage({ expertiseData }) {
  return (
    <Layout title='CircuLaw - Voedselverspilling instrumenten per categorie'>
      <ExpertiseLayout
        expertiseData={expertiseData}
        thema='voedselverspilling'
        transitionAgenda='biomassa-en-voedsel'
        title='Voedselverspilling instrumenten per categorie'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const expertiseData = await client.fetch(categorieQuery('voedselverspilling'));
  return {
    props: {
      expertiseData,
    },
    revalidate: 1,
  };
}
