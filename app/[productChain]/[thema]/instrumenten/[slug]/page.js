import Instrument from '@/components/instrument';
import { INSTRUMENT_PATHS_QUERY, INSTRUMENT_PAGE_QUERY } from '@/lib/queries';
import { client } from '@/lib/sanity';

export async function generateStaticParams() {
  const slugs = await client.fetch(INSTRUMENT_PATHS_QUERY);
  return slugs.map((slug) => ({
    thema: slug.thema,
    productChain: slug.productChain,
    slug: slug.slug,
  }));
}

export const dynamicParams = false

async function getInstrumentData(params) {
  const slug = params;
  const instrumentData = await client.fetch(INSTRUMENT_PAGE_QUERY, { slug });
  if (!instrumentData) {
    throw new Error('could not get instrument data');
  }
  return instrumentData;
}

export default async function InstrumentPage({ params }) {
  const instrumentContent = await getInstrumentData(params.slug);

  return <Instrument data={instrumentContent} />;
}
