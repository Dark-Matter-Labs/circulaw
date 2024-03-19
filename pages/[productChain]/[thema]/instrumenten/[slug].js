import { lazy } from 'react';
import { PreviewSuspense } from 'next-sanity/preview';

import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';
import { instrumentQuery } from '@/lib/queries';
import Instrument from '@/components/instrument';

import globalMeta from '@/utils/global-meta';

const InstrumentPreview = lazy(() => import('@/components/instrument/instrument-preview'));

const pathsQuery = `
  *[_type == "instrument" && defined(slug.current)]{
    "slug": slug.current,
    "thema": coalesce(*[_id == ("drafts." + ^.thema._ref)][0].slug.current, thema->.slug.current),
    "productChain": transitionAgenda->.slug.current,
  }
  `;

export default function instrument({ preview, data }) {
  return preview ? (
    <PreviewSuspense>
      <Layout>
        <InstrumentPreview query={instrumentQuery} queryParams={data.slug} />
      </Layout>
    </PreviewSuspense>
  ) : (
    <Layout
      title={data?.instrument?.titel}
      canonicalUrl={globalMeta.siteUrl + data?.instrument?.slug}
    >
      <Instrument data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(pathsQuery);
  console.log(paths)
  return {
    paths: paths.map((path) => ({
      params: { slug: path.slug, thema: path.thema, productChain: path.productChain },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  // It's important to default the slug so that it doesn't return "undefined"
  const slug = { slug: params?.slug ?? '' };

  if (preview) {
    return { props: { preview, data: { slug } } };
  }
  const instrument = await client.fetch(instrumentQuery, slug);
  return {
    props: { preview, data: { instrument, slug } },
    revalidate: 1,
  };
}
