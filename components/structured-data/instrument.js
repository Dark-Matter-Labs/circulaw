import { INSTRUMENT_STRUCTURED_DATA_QUERY } from '@/lib/agent-queries';
import { sanityFetch } from '@/lib/sanity';
import { buildInstrumentGraph } from '@/lib/structured-data';
import globalMeta from '@/utils/global-meta';

import JsonLd from './json-ld';

// Fetches its own data: the breadcrumbs need the product chain and theme names,
// which the instrument page query does not return.
export default async function InstrumentStructuredData({ params }) {
  const instrument = await sanityFetch({
    query: INSTRUMENT_STRUCTURED_DATA_QUERY,
    qParams: {
      productChain: params.productChain,
      thema: params.thema,
      slug: params.slug,
    },
    tags: ['instrument', 'thema', 'simpleThema', 'transitionAgenda'],
  });
  return <JsonLd data={buildInstrumentGraph(instrument, { siteUrl: globalMeta.siteUrl })} />;
}
