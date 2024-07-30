import { THEME_PATHS_QUERY, INSTRUMENT_LIST_PAGE_QUERY } from '@/lib/queries';
import { client } from '@/lib/sanity';
import ThemeLevelSearch from '@/components/theme-page/theme-level-search';

export async function generateStaticParams() {
  const themas = await client.fetch(THEME_PATHS_QUERY, { next: { tags: ['thema' , 'simpleThema'] } });
  return themas.map((thema) => ({ thema: thema.thema, productChain: thema.productChain }));
}

export const dynamicParams = false;

async function getInstrumentListPageData(params) {
  const thema = params;
  const instrumentListPageData = await client.fetch(INSTRUMENT_LIST_PAGE_QUERY, { thema }, { next: { tags: ['instrument'] } });
  if (!instrumentListPageData) {
    throw new Error('could not get instrument list page data');
  }
  return instrumentListPageData;
}

export const dynamic = 'force-dynamic';

export default async function InstrumentenPage({ params }) {
  const instrumentListPageContent = await getInstrumentListPageData(params.thema);
  return (
    <ThemeLevelSearch
      totalNumberOfLaws={20}
      title={`Lijst van alle ${params?.thema} instrumenten`}
      thema={params?.thema}
      heading={`Instrumenten om de circulariteit van de ${params?.thema} te bevorderen`}
      transitionAgenda={params?.productChain}
      searchTitle={`Zoek in ${params?.thema}`}
      instruments={instrumentListPageContent}
    />
  );
}
