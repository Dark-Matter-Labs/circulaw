import { useRouter } from 'next/router';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import AboutPageComponent from '@/components/about-page';
import Layout from '@/components/layouts/layout';
import {
  aboutPagePathsQuery,
  aboutPageQuery,
  siteSettingsQuerys,
  aboutPagePreviewQuery,
} from '@/lib/queries';
import { client } from '@/lib/sanity';

const AboutPagepreview = lazy(() => import('@/components/about-page/about-page-preview'));

export default function AboutPage({ preview, data }) {
  const router = useRouter();
  return preview ? (
    <PreviewSuspense>
      <Layout>
        <AboutPagepreview query={aboutPagePreviewQuery} queryParams={data?.slug} />
      </Layout>
    </PreviewSuspense>
  ) : Object.keys(router.query).length > 0 ? (
    <Layout title={'Over CircuLaw - ' + data?.aboutPage?.pageTitle} pageUrl={router.asPath}>
      <AboutPageComponent data={data} aboutPageSlugs={data?.aboutPageSlugs} />
    </Layout>
  ) : (
    <Layout></Layout>
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

  if (!aboutPage) {
    return {
        notFound: true
    };
}
  return {
    props: { preview, data: { aboutPage, slug, aboutPageSlugs } },
    revalidate: 1,
  };
}
