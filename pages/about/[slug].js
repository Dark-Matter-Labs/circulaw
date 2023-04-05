import { lazy } from 'react';
import { PreviewSuspense } from 'next-sanity/preview';

import Layout from '../../components/layouts/layout';
import { client } from '../../lib/sanity';
import { aboutPagePathsQuery, aboutPageQuery } from '../../lib/queries';
import AboutPageComponent from '../../components/about-page';

const AboutPagepreview = lazy(() => import('../../components/about-page-preview'));

export default function AboutPage({ preview, data }) {
  return preview ? (
    <PreviewSuspense>
      <Layout>
        <AboutPagepreview query={aboutPageQuery} queryParams={data.slug} />
      </Layout>
    </PreviewSuspense>
  ) : (
    <Layout>
      <AboutPageComponent data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(aboutPagePathsQuery);
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
  const aboutPage = await client.fetch(aboutPageQuery, slug);
  return {
    props: { preview, data: { aboutPage, slug } },
    revalidate: 1,
  };
}
