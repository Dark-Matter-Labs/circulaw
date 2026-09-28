import { notFound } from 'next/navigation';

import EULawHeader from '@/components/eu-law/eu-law-header';
import SummaryComponent from '@/components/eu-law/summary-tab-content';
import LegislationStructuredData from '@/components/structured-data/legislation';
import { EU_LAW_METADATA_QUERY, EU_LAW_PATHS_QUERY, LAW_SUMMARY_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';

export async function generateMetadata(props, parent) {
  const params = await props.params;
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

// Laws published after the last deploy are rendered on first request (and then
// cached) instead of 404ing until the next build; unknown slugs still notFound().
export const dynamicParams = true;

export default async function EULawPage(props) {
  const params = await props.params;
  const summaryData = await sanityFetch({
    query: LAW_SUMMARY_QUERY,
    qParams: params,
    tags: ['euLaw'],
  });

  if (!summaryData) {
    notFound();
  }

  return (
    <>
      <LegislationStructuredData law={summaryData} />
      <EULawHeader summaryData={summaryData} activeTab='overzicht' />
      <SummaryComponent lawData={summaryData} />
    </>
  );
}
