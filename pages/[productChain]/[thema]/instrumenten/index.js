import Layout from '/components/layouts/layout';
import InstrumentsLayout from '@/components/layouts/instruments-layout';
import { client } from '@/lib/sanity';
import { themaQueryFunction, instrumentListPageFunction } from '@/lib/queries';

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

export default function instruments({ numberOfInstruments, instruments, themaData }) {
  if (themaData?.type === 'thema') {
    return (
      <Layout title={`${themaData?.themaName}`}>
        <InstrumentsLayout
          totalNumberOfLaws={numberOfInstruments}
          title={`Lijst van alle ${themaData?.thema} instrumenten`}
          thema={themaData?.thema}
          heading={`Instrumenten om de circulariteit van de ${themaData?.thema} te bevorderen`}
          // introPara={`We hebben ${totalNumberOfLaws} kansrijke instrumenten gevonden die je kunt inzetten als het gaat om matrassen. Met sommige van deze instrumenten is al praktijkervaring opgedaan, met andere nog niet. Ga aan de slag! Met jouw ervaringen help je anderen weer verder.`}
          // icon={MatrassenIcon}
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

  const numberOfInstruments = await client.fetch(themaQueryFunction().length, thema);
  const instruments = await client.fetch(instrumentListPageFunction(), thema);
  const themaData = await client.fetch(themaInfo, thema);

  return { props: { numberOfInstruments, instruments, themaData }, revalidate: 1 };
}
