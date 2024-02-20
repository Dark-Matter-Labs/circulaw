import { useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import ThemeLayout from '@/components/layouts/theme-index-layout';
import { client } from '@/lib/sanity';
import { themaQueryFunction } from '@/lib/queries';
import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';

const pathsQuery = `
*[_type in ["thema", "simpleThema"] && defined(slug.current)]{
    "thema": slug.current,
    "productChain": transitionAgenda->.slug.current,
  }
`



export default function ThemeIndexPage({ featuredLaws, thema, length, instruments }) {

console.log(thema)
  useEffect(() => {
    localStorage.clear();
  });
 if (thema._type === 'simpleThema') {
    return (
        <Layout title={`CircuLaw - ${thema.themaName}`}>
            <SimpleThemaLayout thema={thema} numberOfLaws={length} instruments={instruments} />
        </Layout>
    )
 } else {
    return (
        <Layout title={`CircuLaw - ${thema.themaName}`}>
          <ThemeLayout
            featuredLaws={featuredLaws}
            transitionAgenda={thema.transitionAgenda}
            thema={thema}
            numberOfLaws={length}
            listTitle={`Lijst van ${length} instrumenten`}
          />
        </Layout>
      );
 }
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

  const featuredLaws = await client.fetch(themaQueryFunction().featured, thema);
  const length = await client.fetch(themaQueryFunction().length, thema);
  const themaData = await client.fetch(themaQueryFunction().themaQuery, thema);
  const instruments = await client.fetch(themaQueryFunction().instrumentsQuery, thema)

  return { props: { featuredLaws, thema: themaData, length, instruments }, revalidate: 1 };
}



  
  

  
  