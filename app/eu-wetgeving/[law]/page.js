import Link from 'next/link';
import { client } from '@/lib/sanity';
import SocialButtons from '@/components/social-buttons';
import Tabs from '@/components/eu-law/tabs';
import TabContent from '@/components/eu-law/tab-content';
import { EU_LAW_PATHS_QUERY, LAW_TAB_QUERY, LAW_SUMMARY_QUERY } from '@/lib/queries';
import { Suspense } from 'react';

export async function generateStaticParams() {
  const laws = await client.fetch(EU_LAW_PATHS_QUERY);
  return laws.map((law) => ({
    law: law,
  }));
}

export const dynamicParams = false;

async function getTabData(params) {
  const law = params;
  const tabContent = client.fetch(LAW_TAB_QUERY, { law });
  if (!tabContent) {
    throw new Error('data could not be fetched');
  }
  return tabContent;
}

async function getSummaryData(params) {
  const law = params;
  const summary = client.fetch(LAW_SUMMARY_QUERY, { law });
  if (!summary) {
    throw new Error('data could not be fetched');
  }
  return summary;
}

export default async function EULawPage({ params }) {
  const summaryData = await getSummaryData(params.law);
  const tabData = await getTabData(params.law);

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
        <Tabs summaryData={summaryData} />
        <Suspense>
          <TabContent summaryData={summaryData} tabData={tabData} />
        </Suspense>
      </div>
    </>
  );
}
