import { useRouter } from 'next/router';
import ExpertiseLayout from '@/components/layouts/expertise-layout';
import Layout from '@/components/layouts/layout';
import { categorieQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';

const pathsQuery = `
*[_type in ["thema", "simpleThema"] && defined(slug.current)]{
    "thema": slug.current,
    "productChain": transitionAgenda->.slug.current,
  }
`;

const themaInfo = `
*[_type == "thema" && slug.current == $thema][0] {
    "thema": slug.current,
    "transitionAgenda": transitionAgenda->.slug.current, 
    themaName,
    "type": _type,
}
`;

export default function InfoPage({ expertiseData, themaData }) {
  const router = useRouter();

  if (themaData?.type === 'thema' && Object.keys(router.query).length > 0) {
    return (
      <Layout title={`${themaData?.themaName} instrumenten per categorie`} pageUrl={router.asPath}>
        <ExpertiseLayout
          thema={themaData?.thema}
          transitionAgenda={themaData?.transitionAgenda}
          expertiseData={expertiseData}
          title={`${themaData?.themaName} instrumenten per categorie`}
          // p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
        />
      </Layout>
    );
  } else {
    return <Layout></Layout>;
  }
}

export async function getStaticPaths() {
  const themas = await client.fetch(pathsQuery);
  return {
    paths: themas.map((path) => ({
      params: { thema: path.thema, productChain: path.productChain },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const thema = { thema: params?.thema ?? '' };

  const expertiseData = await client.fetch(categorieQuery(), thema);
  const themaData = await client.fetch(themaInfo, thema);

  if (!themaData) {
    return {
        notFound: true
    };
}

  return {
    props: {
      expertiseData,
      themaData,
    },
    revalidate: 1,
  };
}
