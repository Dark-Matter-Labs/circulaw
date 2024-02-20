import Layout from '@/components/layouts/layout';
import mattressIcon from '@/public/icons/matressIcon.svg';
import ExpertiseLayout from '@/components/layouts/expertise-layout';
import { client } from '@/lib/sanity';
import { categorieQuery } from '@/lib/queries';


const pathsQuery = `
*[_type in ["thema", "simpleThema"] && defined(slug.current)]{
    "thema": slug.current,
    "productChain": transitionAgenda->.slug.current,
  }
`


export default function InfoPage({ expertiseData }) {
  console.log(expertiseData)
  return (
    <Layout title='CircuLaw - Matrasketen instrumenten per categorie'>
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

export async function getStaticPaths() {
    const themas = await client.fetch(pathsQuery)
    return {
      paths: themas.map((path) => ({ params: { thema: path.thema, productChain: path.productChain } })),
      fallback: true,
    }
  }

export async function getStaticProps({params}) {

  const thema = { thema: params?.thema ?? '' };

  const expertiseData = await client.fetch(categorieQuery(), thema);
  return {
    props: {
      expertiseData,
    },
    revalidate: 1,
  };
}
