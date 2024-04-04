import Layout from '@/components/layouts/layout';
import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';
import ThemeLayout from '@/components/layouts/theme-index-layout';
import { themaQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { useEffect, lazy } from 'react';

const ThemeLayoutPreview = lazy(() => import('@/components/layouts/theme-index-layout-preview'));

const pathsQuery = `
*[_type in ["thema", "simpleThema"] && defined(slug.current)]{
    "thema": slug.current,
    "productChain": transitionAgenda->.slug.current,
  }
`;

export default function ThemeIndexPage({ preview, data }) {
  useEffect(() => {
    localStorage.clear();
  });

  if (preview) {
    return (
      <>
        <PreviewSuspense>
          <Layout>
            <ThemeLayoutPreview query={themaQuery} queryParams={data?.thema} />
          </Layout>
        </PreviewSuspense>
      </>
    );
  } else {
    if (data?.themaData?.thema?._type === 'simpleThema') {
      return (
        <Layout title={`${data?.themaData?.thema?.themaName}`}>
          <SimpleThemaLayout
            thema={data?.themaData?.thema}
            numberOfLaws={data?.themaData?.length}
            instruments={data?.themaData?.instruments ?? []}
          />
        </Layout>
      );
    } else {
      return (
        <Layout title={`${data?.themaData?.thema?.themaName}`}>
          <ThemeLayout
            featuredLaws={data?.themaData?.featured}
            thema={data?.themaData?.thema}
            numberOfLaws={data?.themaData?.length}
          />
        </Layout>
      );
    }
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

export async function getStaticProps({ params, preview = false }) {
  const thema = { thema: params?.thema ?? '' };
  if (preview) {
    return { props: { preview, data: { thema } } };
  }

  const themaData = await client.fetch(themaQuery, thema);

  return { props: { data: { themaData, thema } }, revalidate: 1 };
}
