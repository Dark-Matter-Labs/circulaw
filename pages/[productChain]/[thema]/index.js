import { useEffect, lazy } from 'react';
import Layout from '@/components/layouts/layout';
import ThemeLayout from '@/components/layouts/theme-index-layout';
import { client } from '@/lib/sanity';
import { themaQ } from '@/lib/queries';
import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';
import { PreviewSuspense } from 'next-sanity/preview';

const SimpleThemeLayoutPreview = lazy(() =>
  import('@/components/layouts/simple-thema-layout-preview'),
);
const ThemeLayoutPreview = lazy(() => import('@/components/layouts/theme-index-layout-preview'));

const pathsQuery = `
*[_type in ["thema", "simpleThema"] && defined(slug.current)]{
    "thema": slug.current,
    "productChain": transitionAgenda->.slug.current,
  }
`;

// featuredLaws, thema, length, instruments
export default function ThemeIndexPage({ themaData, preview }) {
  useEffect(() => {
    localStorage.clear();
  });

  if (preview) {
    if (themaData?.thema._type === 'simpleThema') {
      return (
        <>
          <PreviewSuspense>
            <Layout>
              <SimpleThemeLayoutPreview query='' queryParams={themaData.thema} />
            </Layout>
          </PreviewSuspense>
        </>
      );
    } else {
      return (
        <>
          <PreviewSuspense>
            <Layout>
              <ThemeLayoutPreview query='' queryParams={themaData.thema} />
            </Layout>
          </PreviewSuspense>
        </>
      );
    }
  } else {
    if (themaData?.thema._type === 'simpleThema') {
      return (
        <Layout title={`${themaData?.thema?.themaName}`}>
          <SimpleThemaLayout
            thema={themaData?.thema}
            numberOfLaws={themaData?.length}
            instruments={themaData?.instruments ?? []}
          />
        </Layout>
      );
    } else {
      return (
        <Layout title={`${themaData?.thema?.themaName}`}>
        <ThemeLayout
          featuredLaws={themaData?.featured}
          thema={themaData?.thema}
          listTitle={`Lijst van ${themaData?.length} instrumenten`}
        />
      </Layout>
      )

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

  const themaData = await client.fetch(themaQ, thema);

  return { props: { themaData }, revalidate: 1 };
}
