import { lazy } from 'react';
import { PreviewSuspense } from 'next-sanity/preview';

import Layout from '../../components/layouts/layout';
import { client } from '../../lib/sanity';
import {
  aboutPagePathsQuery,
  aboutPageQuery,
  siteSettingsQuerys,
  aboutPagePreviewQuery,
} from '../../lib/queries';
import AboutPageComponent from '../../components/about-page/about-page';

const AboutPagepreview = lazy(() => import('../../components/about-page/about-page-preview'));

export default function AboutPage({ preview, data }) {
  return preview ? (
    <PreviewSuspense>
      <Layout>
        <AboutPagepreview query={aboutPagePreviewQuery} queryParams={data?.slug} />
      </Layout>
    </PreviewSuspense>
  ) : (
    <Layout title={'Over CircuLaw - ' + data?.aboutPage?.pageTitle}>
      <AboutPageComponent data={data} aboutPageSlugs={data?.aboutPageSlugs} />
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
  const slug = { slug: params?.slug.toString() };
  if (preview) {
    return { props: { preview, data: { slug } } };
  }
  const aboutPage = await client.fetch(aboutPageQuery, slug);
  const aboutPageSlugs = await client.fetch(siteSettingsQuerys.overCirulaw);
  return {
    props: { preview, data: { aboutPage, slug, aboutPageSlugs } },
    revalidate: 1,
  };
}
