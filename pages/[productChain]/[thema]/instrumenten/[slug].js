import { useRouter } from 'next/router';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import Instrument from '@/components/instrument';
import Layout from '@/components/layouts/layout';
import { instrumentQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';

const InstrumentPreview = lazy(() => import('@/components/instrument/instrument-preview'));

const pathsQuery = `
  *[_type == "instrument" && defined(slug.current)]{
    "slug": slug.current,
    "thema": coalesce(*[_id == ("drafts." + ^.thema._ref)][0].slug.current, thema->.slug.current),
    "productChain": transitionAgenda->.slug.current,
  }
  `;

export default function InstrumentPage({ preview, data }) {
  const router = useRouter();

  return preview ? (
    <PreviewSuspense>
      <Layout>
        <InstrumentPreview query={instrumentQuery} queryParams={data.slug} />
      </Layout>
    </PreviewSuspense>
  ) : Object.keys(router.query).length > 0 ? (
    <Layout title={data?.instrument?.titel} pageUrl={router.asPath}>
      <Instrument data={data} />
    </Layout>
  ) : (
    <Layout></Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(pathsQuery);
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
