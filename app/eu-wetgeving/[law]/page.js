import Link from 'next/link';
import { client, sanityFetch } from '@/lib/sanity';
import SocialButtons from '@/components/social-buttons';
import Tabs from '@/components/eu-law/tabs';
import TabContent from '@/components/eu-law/tab-content';
import {
  EU_LAW_PATHS_QUERY,
  LAW_TAB_QUERY,
  LAW_SUMMARY_QUERY,
  EU_LAW_METADATA_QUERY,
} from '@/lib/queries';
import { Suspense } from 'react';

export async function generateMetadata({ params }, parent) {
  // read route params
  const law = params.law;

  // fetch data
  const euLawMetaData = await client.fetch(
    EU_LAW_METADATA_QUERY,
    { law },
    {
      next: { tags: ['euLaw'] },
    },
  );
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
  const laws = await client.fetch(EU_LAW_PATHS_QUERY, { next: { tags: ['euLaw'] } });
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
      <div className='relative'>
        <div className='h-[240px] sm:h-[360px] pt-3 bg-green-800'>
          <div className='flex flex-col justify-between global-margin h-full'>
            <div className='pt-6 flex flex-row justify-between'>
              <div className='p-2xs-bold text-green-600 bg-white w-min pl-2 pr-3 py-1.5 rounded-clSm flex flex-row whitespace-nowrap'>
                <Link href='/' className=''>
                  <span className='link-interaction'>
                    Home <span className='mx-2'>{'>'}</span>
                  </span>
                </Link>
                <Link href='/eu-wetgeving'>
                  <span className='capitalize link-interaction'>EU wetgeving</span>
                </Link>
              </div>
              <div className='hidden sm:block'>
                <SocialButtons title={`${summaryData?.title} -`} />
              </div>
              {/* ${selectedTab.replace(/(-)/g, ' ')} */}
            </div>
            <h1 className='mb-[60px] sm:mb-[94px] heading-2xl-semibold sm:heading-5xl-semibold text-gray-100 max-w-4xl'>
              {' '}
              {summaryData?.title}
            </h1>
          </div>
        </div>
        <Tabs summaryData={summaryData} initialTab={initialTab} />
        <Suspense>
          <TabContent summaryData={summaryData} tabData={tabData} />
        </Suspense>
      </div>
    </>
  );
}
