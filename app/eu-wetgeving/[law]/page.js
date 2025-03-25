import { Suspense } from 'react';

import EULawHeader from '@/components/eu-law/eu-law-header';
import TabContent from '@/components/eu-law/tab-content';
import {
  EU_LAW_METADATA_QUERY,
  EU_LAW_PATHS_QUERY,
  LAW_SUMMARY_QUERY,
  LAW_TAB_QUERY,
} from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';

export async function generateMetadata({ params }, parent) {
  // read route params
  const law = params.law;

  // fetch data
  const euLawMetaData = await sanityFetch({
    query: EU_LAW_METADATA_QUERY,
    qParams: { law },
    tags: ['euLaw'],
  });
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;

  if (euLawMetaData) {
    return {
      title: euLawMetaData.metaTitle || euLawMetaData.title + ' - CircuLaw',
      description: euLawMetaData.metaDescribe || euLawMetaData.introText || generic.description,
      alternates: {
        canonical: `/eu-wetgeving/${euLawMetaData.slug}`,
      },
      openGraph: {
        images: previousImages,
        title: euLawMetaData.metaTitle || euLawMetaData.title,
        description: euLawMetaData.metaDescribe || euLawMetaData.introText || generic.description,
        type: 'website',
      },
    };
  }
}

export async function generateStaticParams() {
  const laws = await sanityFetch({ query: EU_LAW_PATHS_QUERY, tags: ['euLaw'] });
  return laws.map((law) => ({
    law: law,
  }));
}

export const dynamicParams = false;

export default async function EULawPage({ params, searchParams }) {
  const summaryData = await sanityFetch({
    query: LAW_SUMMARY_QUERY,
    qParams: params,
    tags: ['euLaw'],
  });
  const tabData = await sanityFetch({
    query: LAW_TAB_QUERY,
    qParams: params,
    tags: ['euEuropeTab', 'euCircularEconomyTab', 'euLocalTab'],
  });
  const initialTab = searchParams.tab;

  return (
    <>
      <EULawHeader summaryData={summaryData} initialTab={initialTab} />

      <Suspense>
        <TabContent summaryData={summaryData} tabData={tabData} />
      </Suspense>
    </>
  );
}
