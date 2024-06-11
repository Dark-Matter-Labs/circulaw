import { useRouter } from 'next/router';
import Layout from '/components/layouts/layout';
import InstrumentsLayout from '@/components/layouts/instruments-layout';
import { totalNumberOfInstrumentsPerThema, instrumentListPageFunction } from '@/lib/queries';
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
    "type": _type
}
`;

export default function Instruments({ numberOfInstruments, instruments, themaData }) {
  const router = useRouter();
  if (themaData?.type === 'thema') {
    return (
      <Layout title={`${themaData?.themaName}`} pageUrl={router.asPath}>
        <InstrumentsLayout
          totalNumberOfLaws={numberOfInstruments}
          title={`Lijst van alle ${themaData?.thema} instrumenten`}
          thema={themaData?.thema}
          heading={`Instrumenten om de circulariteit van de ${themaData?.thema} te bevorderen`}
          transitionAgenda={themaData?.transitionAgenda}
          searchTitle={`Zoek in ${themaData?.thema}`}
          instruments={instruments}
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

// move fetching of laws here
export async function getStaticProps({ params }) {
  const thema = { thema: params?.thema ?? '' };

  const numberOfInstruments = await client.fetch(totalNumberOfInstrumentsPerThema, thema);
  const instruments = await client.fetch(instrumentListPageFunction(), thema);
  const themaData = await client.fetch(themaInfo, thema);

  if (!themaData) {
    return {
        notFound: true
    };
}

  return { props: { numberOfInstruments, instruments, themaData }, revalidate: 1 };
}
