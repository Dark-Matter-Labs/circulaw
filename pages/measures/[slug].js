import { lazy } from 'react';
import { PreviewSuspense } from 'next-sanity/preview';

import Layout from '../../components/layouts/layout';
import { client } from '../../lib/sanity';
import { measurePagePathsQuery, measureQuery } from '../../lib/queries';
import Instrument from '../../components/instrument';
import globalMeta from '../../utils/global-meta';

const PreviewInstrument = lazy(() => import('../../components/instrument-preview'));

export default function Measure({ preview, data }) {
  return preview ? (
    <PreviewSuspense>
      <Layout>
        <PreviewInstrument query={measureQuery} queryParams={data.slug} />
      </Layout>
    </PreviewSuspense>
  ) : (
    <Layout title={data?.measure?.titel} canonicalUrl={globalMeta.siteUrl + data?.measure?.slug}>
      <Instrument data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(measurePagePathsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  // It's important to default the slug so that it doesn't return "undefined"
  const slug = { slug: params?.slug ?? '' };
  if (preview) {
    return { props: { preview, data: { slug } } };
  }
  const measure = await client.fetch(measureQuery, slug);
  return {
    props: { preview, data: { measure, slug } },
    revalidate: 1,
  };
}
